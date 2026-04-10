import { SetStateAction, useState } from "react";
import { backdropStyle } from "./BookingPolicy/Tailwind";
import {
  modalButtonHoverStyle,
  modalButtonStyle,
  modalInitStyle,
  modalStyle,
} from "../Tailwind";
import clsx from "clsx";

type EarlyAccessModalType = {
  setShowModal: React.Dispatch<SetStateAction<boolean>>;
};

const EarlyAccessModal = ({ setShowModal }: EarlyAccessModalType) => {
  const [earlyAccessInput, setEarlyAccessInput] = useState("");
  const [showError, setShowError] = useState(false);

  const earlyAccessCode = import.meta.env.VITE_BOOKING_EARLY_ACCESS_CODE;

  const handleEarlyAccessInput = (
    e: React.ChangeEvent<HTMLInputElement, HTMLInputElement>,
  ) => {
    setEarlyAccessInput(e.target.value);
  };

  const handleEarlyAccessButton = () => {
    if (earlyAccessInput.length <= 0) return;

    if (earlyAccessInput === earlyAccessCode) {
      console.log("ENTER");
      setShowModal(false);
    } else {
      setShowError(true);
    }
  };

  const handleEarlyAccessButtonKeyPress = (
    e: React.KeyboardEvent<HTMLInputElement>,
  ) => {
    if (e.key === "Enter") {
      handleEarlyAccessButton();
    }
  };

  return (
    <div>
      <div className={backdropStyle}>
        <div className={modalInitStyle}>
          <div className={modalStyle}>
            <h1 className="text-xl text-center underline font-bold">
              Early Access
            </h1>
            <p>Please enter the early access code provided via my newsletter</p>
            <input
              className={clsx(
                "px-4 py-1 rounded-md text-pink-600 border-2 shadow-lg bg-pink-50 focus:outline-none",
                showError && "border-red-600",
              )}
              value={earlyAccessInput}
              onChange={(e) => handleEarlyAccessInput(e)}
              onKeyDown={(e) => handleEarlyAccessButtonKeyPress(e)}
              data-testid="early-access-input"
            />
            {showError && (
              <div className="flex justify-center">
                <p className="text-red-600">The code used is incorrect</p>
              </div>
            )}
            <div className="flex justify-center">
              <button
                className={clsx(modalButtonStyle, modalButtonHoverStyle)}
                onClick={handleEarlyAccessButton}
              >
                ENTER
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EarlyAccessModal;
