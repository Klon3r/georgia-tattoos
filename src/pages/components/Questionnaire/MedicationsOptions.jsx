import { useState } from "react";

function MedicationsOptions() {
  const [medicationBool, setMedicationBool] = useState(false);

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
              name="medication"
              value="yes"
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
              name="medication"
              value="no"
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
            <textarea placeholder="i.e. blood thinners" rows="4" />
          </div>
        </div>
      )}
    </>
  );
}

export default MedicationsOptions;
