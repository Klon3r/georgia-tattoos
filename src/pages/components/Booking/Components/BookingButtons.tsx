import { bookingButtonStyle, bookingResetButtonStyle } from "../Tailwind";
import { BookingButtonType } from "./Types";

import spinner from "../../../../assets/Icons/spinner.gif";

/**
 * Contains: Reset & Submit 
 */
const BookingButtons = ({ isSending }: BookingButtonType) => {
  return (
    <div className="flex justify-between mx-5">
      <button
        onClick={() => {
          window.location.reload();
        }}
        className={bookingResetButtonStyle}
      >
        RESET
      </button>
      <button className={bookingButtonStyle} type="submit">
        {isSending ? (
          <div className="flex gap-2 items-center justify-center">
            <img className="w-8 h-8" src={spinner} alt="Loading..." />{" "}
            <div>
              <p>Sending...</p>
              <p>Please wait</p>
            </div>
          </div>
        ) : (
          "SUBMIT"
        )}
      </button>
    </div>
  );
};

export default BookingButtons;
