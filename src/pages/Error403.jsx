import { changeURL } from "./Homepage";

function Error403() {
  return (
    <>
      <h2>403 Not Found</h2>
      <p style={{ marginBottom: "0px", padding: "20px", textAlign: "center" }}>
        That page doesn't exist, please go back to the homepage.
      </p>
      {/* Back Button */}
      <button onClick={() => changeURL("")} id="back-button">
        <strong>BACK</strong>
      </button>
    </>
  );
}

export default Error403;
