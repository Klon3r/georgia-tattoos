import clsx from "clsx";
import { emailInputStyle, inputStyleFocusBorder } from "../Tailwind";
import { storeValue } from "../../../../utils/bookingFormUtil";

const EmailInput = () => {
  return (
    <input
      className={clsx(emailInputStyle, inputStyleFocusBorder)}
      type="email"
      id="email"
      name="email"
      placeholder="example@email.com"
      title="email"
      aria-label="Enter email"
      required
      onChange={(e) => storeValue(e)}
    />
  );
};

export default EmailInput;
