import { bookingPolicyCloseButtonStyle } from "./components/Booking/Components/BookingPolicy/Tailwind";
import PrimaryButton from "./components/PrimaryButton/PrimaryButton";

const ThankYou = () => {
  return (
    <div className="flex justify-center flex-col text-center px-6 max-w-110 content-center">
      <p>
        Thank so much, for you interest in getting tattooed by me! Keep an eye
        on your emails (including spam/junk) for a response from me.
      </p>
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

export default ThankYou;
