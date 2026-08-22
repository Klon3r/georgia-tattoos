import ErrorPage from "./components/ErrorPage/ErrorPage";

const Error403 = () => {
  return (
    <ErrorPage
      headerText="403 Not Found"
      errorMessage="That page doesn't exist, please go back to the homepage."
    />
  );
};

export default Error403;
