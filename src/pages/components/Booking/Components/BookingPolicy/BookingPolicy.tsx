import { createPortal } from "react-dom";
import TextHeader from "../TextHeader";
import BookingPolicyModal from "./BookingPolicyModal";
import { useState } from "react";
import CheckBoxOption from "../CheckBoxOption";
import { bookingParagraphStyle, textLinkStyle } from "./Tailwind";

/**
 * Contains: Booking Terms & Conditions 
 */
const BookingPolicy = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <TextHeader headerText="Booking Terms & Conditions: " required />
      <p className={bookingParagraphStyle} onClick={() => setIsModalOpen(true)}>
        Please click{" "}
        <a onClick={() => setIsModalOpen(true)} className={textLinkStyle}>
          HERE
        </a>{" "}
        to read my booking T&Cs
      </p>
      <CheckBoxOption
        id="bookingPolicy"
        headerText="I accept the booking T&Cs: "
        ariaLabel="Do you accept the terms of the booking terms and conditions?"
        singleLine
        required
      />

      {isModalOpen &&
        createPortal(
          <BookingPolicyModal onClose={() => setIsModalOpen(false)} />,
          document.body
        )}
    </div>
  );
};

export default BookingPolicy;
