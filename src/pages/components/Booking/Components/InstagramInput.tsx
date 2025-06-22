import clsx from "clsx";
import { inputStyle, inputStyleFocusBorder } from "../Tailwind";
import { storeValue } from "../../../../utils/bookingForm.util";

const InstagramInput = () => {
  return (
    <input
      className={clsx(inputStyle, inputStyleFocusBorder)}
      type="text"
      id="instagram"
      name="instagram"
      placeholder="@"
      title="Please enter you instagram username"
      aria-label="Please enter you instagram username"
      maxLength={31}
      required
      onChange={(e) => storeValue(e)}
    />
  );
};

export default InstagramInput;
