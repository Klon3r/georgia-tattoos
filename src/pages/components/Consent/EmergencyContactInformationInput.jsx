function EmergencyContactInformationInput({ value, onChange }) {
  const handleInput = (event) => {
    const newValue = event.target.value.replace(/[^0-9]/g, "");
    onChange({ target: { name: event.target.name, value: newValue } });
  };

  return (
    <>
      <p className="consent-paragraph">
        In the event that something happens throughout your tattoo session and I
        need to phone someone to come collect you, please provide your
        <strong>
          <i> Emergency Contact </i>
        </strong>
        details below
      </p>

      <div className="consent-label">
        Emergency Contact Name: <span className="required">*</span>
      </div>
      <div className="consent-inputs">
        <input
          type="text"
          id="emergency-contact-name"
          name="emergencyContactName"
          placeholder="Emergency Contact Name"
          title="Emergency Contact Name"
          value={value.emergencyContactName}
          onChange={onChange}
          maxLength={100}
        ></input>
      </div>

      <div className="consent-label">
        Emergency Contact Number: <span className="required">*</span>
      </div>
      <div className="consent-inputs">
        <input
          type="text"
          id="emergency-contact-number"
          name="emergencyContactNumber"
          title="Emergency Contact Number"
          value={value.emergencyContactNumber}
          inputMode="numeric"
          onInput={handleInput}
          maxLength={10}
          placeholder="## #### ####"
        ></input>
      </div>
    </>
  );
}

export default EmergencyContactInformationInput;
