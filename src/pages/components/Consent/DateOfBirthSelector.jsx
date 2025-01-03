function DateOfBirthSelector({ value, onChange }) {
  return (
    <>
      <div className="consent-label">
        Date of Birth: <span className="required">*</span>
      </div>
      <div className="consent-inputs">
        <input
          type="date"
          id="dob-id"
          name="dob"
          value={value.dob}
          onChange={onChange}
          required
        />
      </div>
    </>
  );
}

export default DateOfBirthSelector;
