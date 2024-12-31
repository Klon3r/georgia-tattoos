function PronounSelector() {
  return (
    <>
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
    </>
  );
}

export default PronounSelector;
