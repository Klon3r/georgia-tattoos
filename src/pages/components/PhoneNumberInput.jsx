function PhoneNumberInput() {
  return (
    <>
      <div className="booking-label">
        Phone Number: <span className="required">*</span>
      </div>
      <div className="booking-inputs">
        <input
          className="number-input"
          type="tel"
          id="number"
          title="number"
          name="phone-number"
          placeholder="## #### ####"
          maxLength={10}
          required
        ></input>
      </div>
    </>
  );
}

export default PhoneNumberInput;
