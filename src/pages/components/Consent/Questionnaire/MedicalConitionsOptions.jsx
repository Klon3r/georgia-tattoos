function MedicalConditionsOptions() {
  return (
    <>
      <div className="consent-label">
        Please tick any of the following conditions that apply to you?
        <span className="required">*</span>
      </div>

      <div id="medical-conditions" className="checkbox-group">
        <div className="checkbox-div">
          <label htmlFor="checkbox-div">
            <input
              type="checkbox"
              id="diabetes-checkbox"
              title="diabetes-checkbox"
              name="diabetes"
            />
            Diabetes
          </label>
        </div>

        <div className="checkbox-div">
          <label htmlFor="checkbox-div">
            <input
              type="checkbox"
              id="hiv-aids-checkbox"
              title="hiv-aids-checkbox"
              name="hiv-aids"
            />
            HIV/AIDS
          </label>
        </div>

        <div className="checkbox-div">
          <label htmlFor="checkbox-div">
            <input
              type="checkbox"
              id="hepatitis-checkbox"
              title="hepatitis-checkbox"
              name="hepatitis"
            />
            Hepatitis
          </label>
        </div>

        <div className="checkbox-div">
          <label htmlFor="checkbox-div">
            <input
              type="checkbox"
              id="heart-condition-checkbox"
              title="heart-condition-checkbox"
              name="heart-condition"
            />
            Heart Condition/s
          </label>
        </div>

        <div className="checkbox-div">
          <label htmlFor="checkbox-div">
            <input
              type="checkbox"
              id="eczema-checkbox"
              title="eczema-checkbox"
              name="eczema"
            />
            Psoriasis/Eczema
          </label>
        </div>

        <div className="checkbox-div">
          <label htmlFor="checkbox-div">
            <input
              type="checkbox"
              id="keloiding-checkbox"
              title="keloiding-checkbox"
              name="keloiding"
            />
            Prone to Keloiding
          </label>
        </div>

        <div className="checkbox-div">
          <label htmlFor="checkbox-div">
            <input
              type="checkbox"
              id="autoimmune-checkbox"
              title="autoimmune-checkbox"
              name="autoimmune"
            />
            Autoimmune Disorder
          </label>
        </div>

        <div className="checkbox-div">
          <label htmlFor="checkbox-div">
            <input
              type="checkbox"
              id="none-of-the-above-checkbox"
              title="none-of-the-above-checkbox"
              name="none-of-the-above"
            />
            None of the above
          </label>
        </div>

        <div className="consent-label">
          Please list below any other medical conditions not listed you think I
          should know about (optional)
          <div className="consent-inputs">
            <textarea rows="4" />
          </div>
        </div>
      </div>
    </>
  );
}

export default MedicalConditionsOptions;
