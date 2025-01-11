function TattooOptions({ value, onChange }) {
  return (
    <>
      <div className="consent-label">
        What part of the body is your tattoo/s going on?
        <span className="required">*</span>
        <div className="consent-inputs">
          <textarea
            placeholder="i.e. forearm"
            rows="4"
            name="whereTattooOnBody"
            value={value.whereTattooOnBody}
            onChange={onChange}
          />
        </div>
      </div>

      <div className="consent-label">
        Have you used numbing cream for this tattoo session?
        <span className="required">*</span>
      </div>

      <div id="tattoo-option-choices" className="radio-group">
        <div className="radio-button-div">
          <label htmlFor="numbing-cream-yes">
            <input
              type="radio"
              id="numbing-cream-yes"
              title="numbing-cream-yes"
              name="numbingCream"
              value="yes"
              onChange={onChange}
            />
            Yes
          </label>
        </div>

        <div className="radio-button-div">
          <label htmlFor="numbing-cream-no">
            <input
              type="radio"
              id="numbing-cream-no"
              title="numbing-cream-no"
              name="numbingCream"
              value="no"
              onChange={onChange}
            />
            No
          </label>
        </div>
      </div>
    </>
  );
}

export default TattooOptions;
