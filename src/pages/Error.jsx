import { changeHashAddress } from "./Homepage";

function Error() {
  return (
    <>
      <h2>Error</h2>
      <p style={{ marginBottom: "0px", padding: "20px", textAlign: "center" }}>
        There has been an error please go back and try again.
      </p>
      {/* Back Button */}
      <button onClick={() => changeHashAddress("")} id="back-button">
        <strong>BACK</strong>
      </button>
    </>
  );
}

export default Error;
