import { useState } from "react";

function MedicationsOptions({ value, onChange }) {
  const [medicationBool, setMedicationBool] = useState(null);

  const labelOnClick = (value) => {
    console.log(value);
  };

  return (
    <>
      <div className="consent-label">
        Are you currently taking any medications?
        <span className="required">*</span>
      </div>

      <div id="medication-choices" className="radio-group">
        <div className="radio-button-div">
          <label htmlFor="medication-yes">
            <input
              type="radio"
              id="medication-yes"
              title="medication-yes"
              name="medications"
              value="yes"
              onChange={onChange}
              onClick={() => setMedicationBool(true)}
            />
            Yes
          </label>
        </div>

        <div className="radio-button-div">
          <label htmlFor="medication-no">
            <input
              type="radio"
              id="medication-no"
              title="medication-no"
              name="medications"
              value="no"
              onChange={onChange}
              onClick={() => setMedicationBool(false)}
            />
            No
          </label>
        </div>
      </div>
      {medicationBool && (
        <div className="consent-label">
          Please specify which medications
          <span className="required">*</span>
          <div className="consent-inputs">
            <input
              placeholder="i.e. blood thinners"
              rows="1"
              type="text"
              name="whichMedications"
              value={value.whichMedications}
              onChange={onChange}
            />
          </div>
        </div>
      )}
    </>
  );
}

export default MedicationsOptions;
