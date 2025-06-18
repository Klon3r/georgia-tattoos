import EmailInput from "./Components/EmailInput";
import InstagramInput from "./Components/InstagramInput";
import PhoneInput from "./Components/PhoneInput";
import TextHeader from "./Components/TextHeader";
import { inputContainerStyle, inputRowDivStyle } from "./Tailwind";

const BookingContact = () => {
  return (
    <div className={inputContainerStyle}>
      <TextHeader headerText="Email: " required />
      <EmailInput />
      <div className={inputRowDivStyle}>
        <div>
          <TextHeader headerText="Mobile: " required />
          <PhoneInput />
        </div>
        <div>
          <TextHeader headerText="Instagram: " required />
          <InstagramInput />
        </div>
      </div>
    </div>
  );
};

export default BookingContact;
