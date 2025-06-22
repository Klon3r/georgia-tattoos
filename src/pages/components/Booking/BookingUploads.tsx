import { RefObject, useState } from "react";
import TextHeader from "./Components/TextHeader";
import UploadInput from "./Components/UploadInput";
import { checkFiles } from "../../../utils/bookingForm.util";

type BookingUploadsType = {
  inputRef: RefObject<HTMLInputElement | null>;
};

const BookingUploads = ({ inputRef }: BookingUploadsType) => {
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = () => {
    if (inputRef.current?.files) {
      if (!checkForImages(inputRef.current.files)) {
        setErrorMessage("Please only select image files");
        inputRef.current.value = "";
        return;
      }

      const fileSize = checkFiles(inputRef.current.files);
      if (fileSize >= 25) {
        setErrorMessage("Please select files that are under the total of 25mb");
        inputRef.current.value = "";
      }
    }
  };

  const checkForImages = (files: FileList) => {
    return Array.from(files).every((file) => file.type.startsWith("image/"));
  };

  return (
    <div>
      <TextHeader headerText="Upload a reference photos: " required />
      <UploadInput
        id="referenceFiles"
        ref={inputRef}
        ariaLabel="Please select the reference photos"
        multiple
        required
        onChange={handleChange}
      />
      <p className="flex justify-center text-red-600 my-5">{errorMessage}</p>
    </div>
  );
};

export default BookingUploads;
