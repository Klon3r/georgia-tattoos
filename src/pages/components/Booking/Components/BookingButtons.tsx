import { bookingButtonStyle, bookingResetButtonStyle } from "../Tailwind";
import { BookingButtonType } from "./Types";

import { createPortal } from "react-dom";
import SubmitModal from "./SubmitModal";

/**
 * Contains: Reset & Submit
 */
const BookingButtons = ({ isSending }: BookingButtonType) => {
  return (
    <div className="flex justify-between mx-5">
      <button
        onClick={() => {
          window.scrollTo(0, 0);
          window.location.reload();
        }}
        className={bookingResetButtonStyle}
      >
        RESET
      </button>
      <button className={bookingButtonStyle} type="submit">
        SUBMIT
      </button>
      {isSending && createPortal(<SubmitModal />, document.body)}
    </div>
  );
};

export default BookingButtons;
