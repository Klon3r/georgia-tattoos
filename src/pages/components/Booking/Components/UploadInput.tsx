import { uploadFileInputStyle } from "../Tailwind";
import { UploadInputType } from "./Types";

const UploadInput = ({
  id,
  ref,
  ariaLabel,
  multiple,
  required,
  onChange,
}: UploadInputType) => {
  return (
    <div>
      <input
        className={uploadFileInputStyle}
        type="file"
        id={id}
        ref={ref}
        required={required}
        multiple={multiple}
        aria-label={ariaLabel}
        onChange={onChange}
        accept="image/*"
      />
    </div>
  );
};

export default UploadInput;
