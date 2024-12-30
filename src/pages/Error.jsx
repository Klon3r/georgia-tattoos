import { changeURL } from "./Homepage";

function Error() {
  return (
    <>
      <h2>ERROR</h2>
      <p style={{ marginBottom: "0px", padding: "20px", textAlign: "center" }}>
        There has been an error please go back and try again.
      </p>
      {/* Back Button */}
      <button onClick={() => changeURL("")} id="back-button">
        <strong>BACK</strong>
      </button>
    </>
  );
}

export default Error;
