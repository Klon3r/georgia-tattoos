function LicenseCardInput({ value, onChange }) {
  const handleInput = (event) => {
    const newValue = event.target.value.replace(/[^0-9]/g, "");
    onChange({ target: { name: event.target.name, value: newValue } });
  };
  return (
    <>
      <div className="consent-label">
        License Number (or Proof of Age Card Number):
        <span className="required">*</span>
      </div>
      <div className="consent-inputs">
        <input
          type="text"
          id="license-number"
          title="license-number"
          className="license-number"
          name="licenseNumber"
          placeholder="License Number"
          value={value.licenseNumber}
          onInput={handleInput}
          inputMode="numeric"
          required
        />
      </div>
      <div className="consent-label">
        License Photo (or Proof of Age Card Photo):
        <span className="required">*</span>
      </div>
      <div className="consent-inputs">
        <input type="file" accept="image/*;capture=camera"></input>
      </div>
    </>
  );
}

export default LicenseCardInput;
