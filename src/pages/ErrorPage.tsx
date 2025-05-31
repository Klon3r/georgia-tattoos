import PrimaryButton from "./components/PrimaryButton/PrimaryButton";

type ErrorPageProps = {
  headerText: string;
  errorMessage: string;
};

const ErrorPage = ({ headerText, errorMessage }: ErrorPageProps) => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-2xl">{headerText}</h1>
      <p className="pt-15">{errorMessage}</p>
      <PrimaryButton name="Homepage" location={"/"} />
    </div>
  );
};

export default ErrorPage;
