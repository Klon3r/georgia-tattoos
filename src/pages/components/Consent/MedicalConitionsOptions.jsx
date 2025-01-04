import { useState } from "react";

function MedicalConditionsOptions({ value, onChange }) {
  const [medicalConditions, setMedicalConditions] = useState([]);
  const [diabetesCheck, setDiabetesCheck] = useState(false);

  const pushToList = (value, e) => {
    if (e.target.checked == true) {
      if (!medicalConditions.includes(value)) {
        // Add to list
        medicalConditions.push(value);
      }
    } else {
      // Remove from list
      if (medicalConditions.includes(value)) {
        const index = medicalConditions.indexOf(value);
        medicalConditions.splice(index, 1);
      }
    }
    onChange({
      target: { name: "medicalConditions", value: medicalConditions },
    });
  };

  return (
    <>
      <div className="consent-label">
        Please tick any of the following conditions that apply to you?
        <span className="required">*</span>
      </div>

      <div id="medical-conditions" className="checkbox-group">
        <div className="checkbox-div">
          <label htmlFor="checkbox-div">
            <input
              type="checkbox"
              id="diabetes-checkbox"
              title="diabetes-checkbox"
              name="diabetes"
              onClick={(e) => pushToList("diabetes", e)}
            />
            Diabetes
          </label>
        </div>

        <div className="checkbox-div">
          <label htmlFor="checkbox-div">
            <input
              type="checkbox"
              id="hiv-aids-checkbox"
              title="hiv-aids-checkbox"
              name="hivAids"
              onClick={(e) => pushToList("hiv aids", e)}
            />
            HIV/AIDS
          </label>
        </div>

        <div className="checkbox-div">
          <label htmlFor="checkbox-div">
            <input
              type="checkbox"
              id="hepatitis-checkbox"
              title="hepatitis-checkbox"
              name="hepatitis"
              onClick={(e) => pushToList("hepatitis", e)}
            />
            Hepatitis
          </label>
        </div>

        <div className="checkbox-div">
          <label htmlFor="checkbox-div">
            <input
              type="checkbox"
              id="heart-condition-checkbox"
              title="heart-condition-checkbox"
              name="heart-condition"
              onClick={(e) => pushToList("heart condition", e)}
            />
            Heart Condition/s
          </label>
        </div>

        <div className="checkbox-div">
          <label htmlFor="checkbox-div">
            <input
              type="checkbox"
              id="eczema-checkbox"
              title="eczema-checkbox"
              name="eczema"
              onClick={(e) => pushToList("eczema", e)}
            />
            Psoriasis/Eczema
          </label>
        </div>

        <div className="checkbox-div">
          <label htmlFor="checkbox-div">
            <input
              type="checkbox"
              id="keloiding-checkbox"
              title="keloiding-checkbox"
              name="keloiding"
              onClick={(e) => pushToList("keloiding", e)}
            />
            Prone to Keloiding
          </label>
        </div>

        <div className="checkbox-div">
          <label htmlFor="checkbox-div">
            <input
              type="checkbox"
              id="autoimmune-checkbox"
              title="autoimmune-checkbox"
              name="autoimmune"
              onClick={(e) => pushToList("autoimmune", e)}
            />
            Autoimmune Disorder
          </label>
        </div>

        <div className="checkbox-div">
          <label htmlFor="checkbox-div">
            <input
              type="checkbox"
              id="none-of-the-above-checkbox"
              title="none-of-the-above-checkbox"
              name="none-of-the-above"
              onClick={(e) => pushToList("none of the above", e)}
            />
            None of the above
          </label>
        </div>

        <div className="consent-label">
          Please list below any other medical conditions not listed you think I
          should know about (optional)
          <div className="consent-inputs">
            <textarea
              rows="4"
              name="otherMedicalConditions"
              value={value.otherMedicalConditions}
              onChange={onChange}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default MedicalConditionsOptions;
