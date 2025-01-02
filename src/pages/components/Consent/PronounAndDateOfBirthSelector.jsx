function PronounAndDateOfBirthSelector() {
  return (
    <>
      <div className="pronoun-and-dob-div">
        <div className="consent-label">
          Pronouns: <span className="required">*</span>
        </div>
        <div className="pronoun-div">
          <select
            id="pronouns"
            title="pronouns"
            className="pronouns"
            name="Pronouns:"
            required
          >
            <option hidden>Select pronouns</option>
            <option value="She/Her">She/Her</option>
            <option value="He/Him">He/Him</option>
            <option value="They/Them">They/Them</option>
          </select>
        </div>
        <div className="consent-label">
          Date of Birth: <span className="required">*</span>
        </div>
        <div className="consent-inputs">
          <input
            type="date"
            id="dob"
            name="dob"
            placeholder="dd-mm-yyyy"
            title="date-of-birth"
            required
          />
        </div>
      </div>
    </>
  );
}

export default PronounAndDateOfBirthSelector;
