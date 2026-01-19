import { RefObject, useState } from "react";
import TextHeader from "./Components/TextHeader";
import UploadInput from "./Components/UploadInput";
import { checkFiles } from "../../../utils/bookingForm.util";
import { clearButtonStyle } from "./Tailwind";

type BookingUploadsType = {
  inputRef: RefObject<HTMLInputElement | null>;
};

/** 
 * Contains: Image Upload
 */
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
      setErrorMessage("");
    }
  };

  const checkForImages = (files: FileList) => {
    return Array.from(files).every((file) => file.type.startsWith("image/"));
  };

  const resetFileInput = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (inputRef.current) inputRef.current.value = "";
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
      <div className="flex justify-end">
        <button onClick={(e) => resetFileInput(e)} className={clearButtonStyle}>
          Clear Files
        </button>
      </div>
      <p className="flex justify-center text-red-600 my-5">{errorMessage}</p>
    </div>
  );
};

export default BookingUploads;
