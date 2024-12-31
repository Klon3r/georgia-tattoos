function LicenseCardInput() {
  return (
    <>
      <div className="consent-label">
        License Number (or Proof of Age Card Number):
        <span className="required">*</span>
      </div>
      <div className="consent-inputs">
        <input
          type="number"
          id="license-number"
          title="license-number"
          className="license-number"
          name="license-number:"
          placeholder="License Number"
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
