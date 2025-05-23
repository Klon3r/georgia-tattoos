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
          <label htmlFor="allergies-yes">
            <input
              type="radio"
              id="allergies-yes"
              title="allergies-yes"
              name="allergies"
              value="Yes"
              onChange={onChange}
              onClick={() => setAllergies(true)}
            />
            Yes
          </label>
        </div>

        <div className="radio-button-div">
          <label htmlFor="allergies-no">
            <input
              type="radio"
              id="allergies-no"
              title="allergies-no"
              name="allergies"
              value="No"
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
              rows="2"
              name="allergiesInfo"
              onChange={onChange}
              value={value.allergiesInfo}
              maxLength={200}
            />
          </div>
        </div>
      )}
    </>
  );
}

export default AllergiesOptions;
