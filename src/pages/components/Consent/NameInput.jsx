function NameInput() {
  return (
    <>
      <div className="consent-label">
        Name: <span className="required">*</span>
      </div>
      <div className="consent-inputs">
        <input
          type="text"
          id="fname"
          name="fname"
          placeholder="First Name"
          title="first-name"
          required
        ></input>
        <input
          type="text"
          id="lname"
          name="lname"
          placeholder="Last Name"
          title="last-name"
          required
        ></input>
      </div>
    </>
  );
}

export default NameInput;
