import { useRef, useState } from "react";
import BookingContact from "./components/Booking/BookingContact";
import BookingNames from "./components/Booking/BookingNames";
import BookingTattoo from "./components/Booking/BookingTattoo";
import BookingUploads from "./components/Booking/BookingUploads";
import BookingButtons from "./components/Booking/Components/BookingButtons";
import BookingPolicy from "./components/Booking/Components/BookingPolicy/BookingPolicy";
import { checkAvailability } from "../utils/bookingFormUtil";
import imageCompression from "browser-image-compression";
import { changeURL } from "../utils/changeURL";

const BOOKING_URL_VERCEL = "/api/booking";
// const BOOKING_URL_LOCAL = "http://localhost:3000/api/booking";

const Booking = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [firstTimeLoad, setFirstTimeLoad] = useState(true);
  const fileInput = useRef<HTMLInputElement>(null);

  const [availability, setAvailability] = useState({
    monday: false,
    tuesday: false,
    friday: false,
    saturday: false,
  });

  const loadLocalStorage = (): Record<string, string | number> => {
    const data: Record<string, string | number> = {};
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key) {
        data[key] = localStorage.getItem(key) ?? "";
      }
    }
    return data;
  };

  const onAvailableCheckboxChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setAvailability({
      ...availability,
      [e.target.id]: e.target.checked,
    });
  };

  const resizeImage = async (imageFile: File) => {
    const options = {
      maxSizeMB: 1,
      maxWidthOrHeight: 1920,
      useWebWorker: true,
    };

    const compressedImage = await imageCompression(imageFile, options);
    return compressedImage;
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (checkAvailability(availability)) {
      setIsSending(true);

      const formData = new FormData();
      const localData = loadLocalStorage();
      Object.entries(localData).forEach(([key, value]) => {
        formData.append(key, value as string);
      });

      formData.append("availability", JSON.stringify(availability));

      const inputFiles = fileInput.current?.files;

      if (inputFiles) {
        const compressedFiles = await Promise.all(
          Array.from(inputFiles).map(async (originalFile) => {
            const compressedBlob = await resizeImage(originalFile);
            return new File([compressedBlob], originalFile.name, {
              type: compressedBlob.type,
            });
          }),
        );

        compressedFiles.forEach((compressedFile) => {
          formData.append("files", compressedFile);
        });
      }

      fetch(BOOKING_URL_VERCEL, {
        method: "POST",
        body: formData,
      }).then((response) => {
        if (response.ok) {
          setIsSending(false);
          localStorage.clear();
          setFirstTimeLoad(false);
          changeURL("thank-you");
        }
      });
    } else {
      setErrorMessage("Please select at least one available day");
      return;
    }
  };

  if (firstTimeLoad) {
    localStorage.clear();
    setFirstTimeLoad(false);
  }

  return (
    <form encType="multipart/form-data" onSubmit={onSubmit}>
      <div className="flex flex-col gap-10 pb-20 px-3">
        <BookingNames />
        <BookingContact />
        <BookingTattoo onAvailableCheckboxChange={onAvailableCheckboxChange} />
        <BookingPolicy />
        <BookingUploads inputRef={fileInput} />
        <div>
          <p className="flex justify-center text-red-600 mb-10">
            {errorMessage}
          </p>
          <BookingButtons isSending={isSending} />
        </div>
      </div>
    </form>
  );
};

export default Booking;
