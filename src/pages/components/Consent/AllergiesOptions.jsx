import { useState } from "react";

function AllergiesOptions({ value, onChange }) {
  const [allergies, setAllergies] = useState(false);

  return (
    <>
      <div className="consent-label">
        Do you have any known allergies? (latex, soap, adhesives)
        <span className="required">*</span>
      </div>

      <div id="allergies-choices" className="radio-group">
        <div className="radio-button-div">
          <label htmlFor="radio-button-yes">
            <input
              type="radio"
              id="allergies-yes"
              title="allergies-yes"
              name="allergies"
              value="yes"
              onChange={onChange}
              onClick={() => setAllergies(true)}
            />
            Yes
          </label>
        </div>

        <div className="radio-button-div">
          <label htmlFor="radio-button-no">
            <input
              type="radio"
              id="allergies-no"
              title="allergies-no"
              name="allergies"
              value="no"
              onChange={onChange}
              onClick={() => setAllergies(false)}
            />
            No
          </label>
        </div>
      </div>
      {allergies && (
        <div className="consent-label">
          Please specify which allergies
          <span className="required">*</span>
          <div className="consent-inputs">
            <textarea
              placeholder="i.e. latex"
              rows="4"
              name="allergiesInfo"
              onChange={onChange}
              value={value.allergiesInfo}
            />
          </div>
        </div>
      )}
    </>
  );
}

export default AllergiesOptions;
