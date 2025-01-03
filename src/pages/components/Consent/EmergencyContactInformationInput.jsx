function EmergancyContactInformationInput({ value, onChange }) {
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
          value={value.emergancyContactName}
          onChange={onChange}
          required
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
          placeholder="Emergency Contact Number"
          title="Emergency Contact Number"
          value={value.emergancyContactNumber}
          onChange={onChange}
          required
        ></input>
      </div>
    </>
  );
}

export default EmergancyContactInformationInput;
