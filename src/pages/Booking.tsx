import { useRef, useState } from "react";
import BookingContact from "./components/Booking/BookingContact";
import BookingNames from "./components/Booking/BookingNames";
import BookingTattoo from "./components/Booking/BookingTattoo";
import BookingUploads from "./components/Booking/BookingUploads";
import BookingButtons from "./components/Booking/Components/BookingButtons";
import BookingPolicy from "./components/Booking/Components/BookingPolicy/BookingPolicy";
import { changeURL } from "../utils/url.util";
import {
  compressFiles,
  loadLocalStorage,
  uploadFile,
} from "../utils/booking.util";
import PrimaryButton from "./components/PrimaryButton/PrimaryButton";
import { bookingPolicyCloseButtonStyle } from "./components/Booking/Components/BookingPolicy/Tailwind";
import { getBookingFormEnabledFlag } from "../utils/featureFlag.util";
import { checkAvailability } from "../utils/bookingForm.util";

const BOOKING_URL = "/api/booking";

const Booking = () => {
  const bookingFormFlag = getBookingFormEnabledFlag();

  const [errorMessage, setErrorMessage] = useState("");
  const [isSending, setIsSending] = useState(false);
  const fileInput = useRef<HTMLInputElement>(null);

  const [availability, setAvailability] = useState({
    monday: false,
    tuesday: false,
    friday: false,
    saturday: false,
  });

  const onAvailableCheckboxChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setAvailability({
      ...availability,
      [e.target.id]: e.target.checked,
    });
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!checkAvailability(availability)) {
      setErrorMessage("Please select at least one available day");
      return;
    } else {
      setIsSending(true);

      const formData = new FormData();
      const localData = loadLocalStorage();
      Object.entries(localData).forEach(([key, value]) => {
        formData.append(key, String(value));
      });
      formData.append("availability", JSON.stringify(availability));

      const inputFiles = fileInput.current?.files;

      if (inputFiles) {
        const compressedFiles = await compressFiles(inputFiles);
        const firstName = formData.get("firstName");
        const lastName = formData.get("lastName");
        const fileUrls = await uploadFile(
          compressedFiles,
          firstName ?? "unknown",
          lastName ?? "unknown",
        );

        formData.append("fileUrls", JSON.stringify(fileUrls));
      }

      fetch(BOOKING_URL, {
        method: "POST",
        body: formData,
      }).then((response) => {
        if (response.ok) {
          setIsSending(false);
          localStorage.clear();
          changeURL("thank-you");
        }
      });
    }
  };

  return (
    <div>
      {bookingFormFlag ? (
        <form encType="multipart/form-data" onSubmit={onSubmit}>
          <div className="flex flex-col gap-10 pb-20 px-3">
            <BookingNames />
            <BookingContact />
            <BookingTattoo
              onAvailableCheckboxChange={onAvailableCheckboxChange}
            />
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
      ) : (
        <BookingClosed />
      )}
    </div>
  );
};

const BookingClosed = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <p>Booking not available</p>
      <p>Please go back to the homepage</p>
      <div className="flex justify-center mt-4">
        <PrimaryButton
          name="Homepage"
          location={"/"}
          styleClass={bookingPolicyCloseButtonStyle}
        />
      </div>
    </div>
  );
};

export default Booking;
