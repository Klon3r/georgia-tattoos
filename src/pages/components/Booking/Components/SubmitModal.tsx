import { backdropStyle } from "./BookingPolicy/Tailwind";

import spinner from "../../../../assets/Icons/spinner.gif";

const SubmitModal = () => {
  return (
    <div>
      <div className={backdropStyle} />
      <div className="fixed top-30 left-1/2 transform -translate-x-1/2 max-h-4/5 overflow-y-auto">
        <div className="bg-white justify-center w-100 m-auto dark:text-white shadow-2xl rounded-lg p-3 flex flex-col gap-2 border-pink-300 border-3">
          <div className="flex flex-row justify-center">
            <img className="w-6 h-6 mr-1" src={spinner} alt="Loading..." />
            <p>
              <b>Please wait...</b>
            </p>
          </div>
          <p>Your booking is currently being submitted.</p>
          <p>Please do not leave this page</p>
        </div>
      </div>
    </div>
  );
};

export default SubmitModal;
