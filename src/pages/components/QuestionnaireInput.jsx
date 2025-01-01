import PhotoConsentOptions from "./Questionnaire/PhotoConsentOptions";
import AllergiesOptions from "./Questionnaire/AllergiesOptions";
import AreYouOptions from "./Questionnaire/AreYouOptions";
import MedicalConditionsOptions from "./Questionnaire/MedicalConitionsOptions";
import MedicationsOptions from "./Questionnaire/MedicationsOptions";
import TattooOptions from "./Questionnaire/TattooOptions";
import TermsAndConditions from "./TermsAndConditions";

function QuestionnaireInput() {
  return (
    <>
      <MedicationsOptions />
      <TattooOptions />
      <AreYouOptions />
      <AllergiesOptions />
      <MedicalConditionsOptions />
      <PhotoConsentOptions />
      <TermsAndConditions />
    </>
  );
}

export default QuestionnaireInput;
