function TermsAndConditions() {
  return (
    <>
      <h2>Tattoo Terms and Conditions</h2>
      <div className="consent-label">
        I understand and have fully disclosed the following:
      </div>
      <div className="consent-inputs">
        <ul>
          <li>I acknowledge that I am over the age of 18.</li>
          <li>I’m not under the influence of alcohol or drugs</li>
          <li>
            I have fully disclosed of any physical and/or mental impairments
            such as but not limited to: Psoriasis, Hepatitis, Diabetes.
          </li>
          <li>
            I accept that getting a skin infection is a possibility as a result
            of receiving any tattoo procedure, particularly if I do not take
            proper care of my tattoo and follow my artist’s aftercare
            instructions.
          </li>
          <li>
            I acknowledge that it is not reasonably possible for the staff of
            Esoteric Tattoo to know whether or not I may have an allergic
            reaction to the pigments and processes used throughout the tattoo
            procedure and I accept that such a reaction is possible.
          </li>
          <li>
            I understand that this tattoo is a permanent change to my body and
            no claims have been made regarding the ability to change or undo the
            work once I have consented to the design process and begun the
            tattoo.
          </li>
          <li>
            If understand that using numbing creams for a tattoo procedure
            increases the potential to encounter adverse reactions such as but
            not limited to : anaesthetic poisoning, redness, swelling, tingling,
            prolonged period of numbness, shallow breathing
          </li>
          <li>
            I agree to release Esoteric Tattoo and its employees from any and
            all claims, damages and legal action arising from or connected in
            any way to the tattoo procedure. I indemnify and hold harmless
            Esoteric Tattoo against any claims, expenses, damages, and
            liabilities.
          </li>
          <li>
            I have read all of the above information carefully and by signing
            this document I am acknowledging that I understand and agree to all
            the information stated within it.
          </li>
          <li>I acknowledge that Esoteric Tattoo does not offer refunds.</li>
        </ul>
      </div>
      <div className="consent-label">
        I understand and have fully disclosed the following:
      </div>

      <div id="acknowledge-choices" className="radio-group">
        <div className="radio-button-div">
          <label htmlFor="radio-button-yes">
            <input
              type="radio"
              id="ack-yes"
              title="ack-yes"
              name="acknowledge"
              value="yes"
            />
            Yes
          </label>
        </div>

        <div className="radio-button-div">
          <label htmlFor="radio-button-no">
            <input
              type="radio"
              id="ack-no"
              title="ack-no"
              name="acknowledge"
              value="no"
            />
            No
          </label>
        </div>
      </div>
    </>
  );
}

export default TermsAndConditions;
