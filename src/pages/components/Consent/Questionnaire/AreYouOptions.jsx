function AreYouOptions() {
  return (
    <>
      <div className="consent-label">
        Are you currently pregnant or breastfeeding?
        <span className="required">*</span>
      </div>

      <div id="are-you-choices" className="radio-group">
        <div className="radio-button-div">
          <label htmlFor="radio-button-yes">
            <input
              type="radio"
              id="breastfeeding-yes"
              title="breastfeeding-yes"
              name="breastfeeding"
              value="yes"
            />
            Yes
          </label>
        </div>

        <div className="radio-button-div">
          <label htmlFor="radio-button-no">
            <input
              type="radio"
              id="breastfeeding-no"
              title="breastfeeding-no"
              name="breastfeeding"
              value="no"
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
          <label htmlFor="radio-button-yes">
            <input
              type="radio"
              id="cancer-yes"
              title="cancer-yes"
              name="cancer"
              value="yes"
            />
            Yes
          </label>
        </div>

        <div className="radio-button-div">
          <label htmlFor="radio-button-no">
            <input
              type="radio"
              id="cancer-no"
              title="cancer-no"
              name="cancer"
              value="no"
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
          <label htmlFor="radio-button-yes">
            <input
              type="radio"
              id="alcohol-or-drugs-yes"
              title="alcohol-or-drugs-yes"
              name="alcohol-or-drugs"
              value="yes"
            />
            Yes
          </label>
        </div>

        <div className="radio-button-div">
          <label htmlFor="radio-button-no">
            <input
              type="radio"
              id="alcohol-or-drugs-no"
              title="alcohol-or-drugs-no"
              name="alcohol-or-drugs"
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
