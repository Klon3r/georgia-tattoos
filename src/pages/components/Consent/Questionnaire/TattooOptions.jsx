function TattooOptions() {
  return (
    <>
      <div className="consent-label">
        What part of the body is your tattoo/s going on?
        <span className="required">*</span>
        <div className="consent-inputs">
          <textarea placeholder="i.e. forearm" rows="4" />
        </div>
      </div>

      <div className="consent-label">
        Have you used numbing cream for this tattoo session?
        <span className="required">*</span>
      </div>

      <div id="tattoo-option-choices" className="radio-group">
        <div className="radio-button-div">
          <label htmlFor="radio-button-yes">
            <input
              type="radio"
              id="numbing-cream-yes"
              title="numbing-cream-yes"
              name="numbing-cream"
              value="yes"
            />
            Yes
          </label>
        </div>

        <div className="radio-button-div">
          <label htmlFor="radio-button-no">
            <input
              type="radio"
              id="numbing-cream-no"
              title="numbing-cream-no"
              name="numbing-cream"
              value="no"
            />
            No
          </label>
        </div>
      </div>
    </>
  );
}

export default TattooOptions;
