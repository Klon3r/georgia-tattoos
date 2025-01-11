function AreYouOptions({ value, onChange }) {
  return (
    <>
      <div className="consent-label">
        Are you currently pregnant or breastfeeding?
        <span className="required">*</span>
      </div>

      <div id="are-you-choices" className="radio-group">
        <div className="radio-button-div">
          <label htmlFor="breastfeeding-yes">
            <input
              type="radio"
              id="breastfeeding-yes"
              title="breastfeeding-yes"
              name="breastfeeding"
              value="yes"
              onChange={onChange}
            />
            Yes
          </label>
        </div>

        <div className="radio-button-div">
          <label htmlFor="breastfeeding-no">
            <input
              type="radio"
              id="breastfeeding-no"
              title="breastfeeding-no"
              name="breastfeeding"
              value="no"
              onChange={onChange}
            />
            No
          </label>
        </div>
      </div>

      <div className="consent-label">
        Are you currently undertaking treatment for cancer?
        <span className="required">*</span>
      </div>

      <div id="are-you-choices" className="radio-group">
        <div className="radio-button-div">
          <label htmlFor="cancer-yes">
            <input
              type="radio"
              id="cancer-yes"
              title="cancer-yes"
              name="cancer"
              onChange={onChange}
              value="yes"
            />
            Yes
          </label>
        </div>

        <div className="radio-button-div">
          <label htmlFor="cancer-no">
            <input
              type="radio"
              id="cancer-no"
              title="cancer-no"
              name="cancer"
              value="no"
              onChange={onChange}
            />
            No
          </label>
        </div>
      </div>

      <div className="consent-label">
        Are you currently under the influence of drugs or alcohol?
        <span className="required">*</span>
      </div>

      <div id="are-you-choices" className="radio-group">
        <div className="radio-button-div">
          <label htmlFor="alcohol-or-drugs-yes">
            <input
              type="radio"
              id="alcohol-or-drugs-yes"
              title="alcohol-or-drugs-yes"
              name="alcoholOrDrugs"
              onChange={onChange}
              value="yes"
            />
            Yes
          </label>
        </div>

        <div className="radio-button-div">
          <label htmlFor="alcohol-or-drugs-no">
            <input
              type="radio"
              id="alcohol-or-drugs-no"
              title="alcohol-or-drugs-no"
              name="alcoholOrDrugs"
              onChange={onChange}
              value="no"
            />
            No
          </label>
        </div>
      </div>
    </>
  );
}

export default AreYouOptions;
