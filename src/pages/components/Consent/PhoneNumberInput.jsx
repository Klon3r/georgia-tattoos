function PhoneNumberInput({ value, onChange }) {
  const handleInput = (event) => {
    const newValue = event.target.value.replace(/[^0-9]/g, "");
    onChange({ target: { name: event.target.name, value: newValue } });
  };

  return (
    <>
      <div className="booking-label">
        Phone Number: <span className="required">*</span>
      </div>
      <div className="booking-inputs">
        <input
          className="number-input"
          type="text"
          id="number"
          title="number"
          name="phoneNumber"
          placeholder="## #### ####"
          maxLength={10}
          inputMode="numeric"
          onInput={handleInput}
          value={value.phoneNumber}
          required
        ></input>
      </div>
    </>
  );
}

export default PhoneNumberInput;
