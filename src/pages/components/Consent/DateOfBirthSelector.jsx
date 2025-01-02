import React, { useEffect } from "react";
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css"; // Default styles

function DateOfBirthSelector() {
  useEffect(() => {
    const todayDate = new Date();
    flatpickr("#dob", {
      dateFormat: "d-m-Y",
      minDate: "01-01-1990",
      maxDate: todayDate,
      disableMobile: true, // Remove mobile styling
      theme: "light", // light or dark
    });
  }, []);

  return (
    <>
      <div className="consent-label">
        Date of Birth: <span className="required">*</span>
      </div>
      <div className="consent-inputs">
        <input
          type="text"
          id="dob"
          name="dob"
          placeholder="dd-mm-yyyy"
          title="date-of-birth"
          required
        />
      </div>
    </>
  );
}

export default DateOfBirthSelector;
