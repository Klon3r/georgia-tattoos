function LicenseCardInput({ value, onChange }) {
  const handleInput = (event) => {
    const newValue = event.target.value.replace(/[^0-9]/g, "");
    onChange({ target: { name: event.target.name, value: newValue } });
  };

  const handleFileInput = (event) => {
    const file = event.target.files[0];
    if (file) {
      const fileBlob = new Blob([file], { type: file.type });
      onChange({ target: { name: event.target.name, value: fileBlob } });
    }
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
        />
      </div>
      <div className="consent-label">
        License Photo (or Proof of Age Card Photo):
        <span className="required">*</span>
      </div>
      <div className="consent-inputs">
        <input
          type="file"
          accept="image/*;capture=camera"
          name="licensePhoto"
          onChange={handleFileInput}
        ></input>
      </div>
    </>
  );
}

export default LicenseCardInput;
