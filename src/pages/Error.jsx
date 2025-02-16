import { changeURL } from "./Homepage";

function Error() {
  return (
    <>
      <h2>ERROR</h2>
      <p style={{ marginBottom: "0px", padding: "20px", textAlign: "center" }}>
        There has been an error please try again.
      </p>
      <button onClick={() => changeURL("/")} id="back-button">
        <strong>Homepage</strong>
      </button>
    </>
  );
}

export default Error;
