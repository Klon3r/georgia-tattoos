function TattooOptions({ value, onChange }) {
  return (
    <>
      <div className="consent-label">
        What part of the body is your tattoo/s going on?
        <span className="required">*</span>
        <div className="consent-inputs">
          <input
            type="text"
            placeholder="i.e. upper leg"
            rows="1"
            name="whereTattooOnBody"
            value={value.whereTattooOnBody}
            onChange={onChange}
            maxLength={200}
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
              value="Yes"
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
              value="No"
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
