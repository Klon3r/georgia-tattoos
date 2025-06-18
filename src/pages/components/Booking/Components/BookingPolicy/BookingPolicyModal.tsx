import TextHeader from "../TextHeader";
import { BookingPolicyModalType } from "../Types";
import { backdropStyle, bookingPolicyCloseButtonStyle } from "./Tailwind";

const BookingPolicyModal = ({ onClose }: BookingPolicyModalType) => {
  return (
    <div>
      <div className={backdropStyle} onClick={onClose} />
      <div className="fixed top-30 left-1/2 transform -translate-x-1/2 max-h-4/5 overflow-y-auto">
        <div className="bg-white justify-center w-100 m-auto dark:text-white shadow-2xl rounded-lg p-3 flex flex-col gap-2">
          <TextHeader
            divClassName="flex justify-center pb-5"
            headerText="Booking Policy"
          />
          <TextHeader headerText="DEPOSITS" />
          <div className="flex flex-col gap-2">
            <p>Deposits are non-refundable. </p>
            <p>
              Please note that your tattoo appointment is not confirmed until we
              have settled on a date/time and I've received a screenshot of the
              deposit transaction via email. I will always send a follow up
              email letting you know that your tattoo appointment has now been
              confirmed.
            </p>
            <p>
              A $100 deposit is required for each booking made & this will come
              off the total of your tattoo appointment on the day. Once I've
              sent you through my deposit information, the payment will need to
              be made within 72 hours to secure that date/time. If I don’t see a
              confirmation of payment via email within 72 hours of me sending
              the deposit information — the agreed upon date/s will need to be
              renegotiated before a deposit can be paid, as I cannot hold dates
              without a deposit.
            </p>
          </div>
          <TextHeader headerText="RESCHEDULING" />
          <div className="flex flex-col gap-2">
            <p>
              If you need to reschedule your booking, please contact me more
              than 48 hours before your appointment time. Failure to do so
              within this time frame will forfeit your deposit and a second
              deposit will be required to secure a new date.
            </p>
            <p>
              Only 2 reschedules are honoured with your original deposit - if
              for whatever reason you need to reschedule a 3rd time, a new
              deposit will be required to lock in a new date.
            </p>
            <p>
              As I am booked out at least 3 months in advance, please be aware
              that if you need to reschedule - it's highly likely your new date
              will be months out from your original.
            </p>
          </div>

          <div className="flex justify-center">
            <button onClick={onClose} className={bookingPolicyCloseButtonStyle}>
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingPolicyModal;
