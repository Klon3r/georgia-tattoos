import { useState } from "react";

function MedicationsOptions({ value, onChange }) {
  const [medicationBool, setMedicationBool] = useState(null);

  return (
    <>
      <div className="consent-label">
        Are you currently taking any medications?
        <span className="required">*</span>
      </div>

      <div id="medication-choices" className="radio-group">
        <div className="radio-button-div">
          <label htmlFor="radio-button-yes">
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
          <label htmlFor="radio-button-no">
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
            <textarea
              placeholder="i.e. blood thinners"
              rows="4"
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
