function NameInput({ value, onChange }) {
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
          value={value.fname}
          onChange={onChange}
          maxLength={50}
        ></input>
        <input
          type="text"
          id="lname"
          name="lname"
          placeholder="Last Name"
          title="last-name"
          value={value.lname}
          onChange={onChange}
          maxLength={50}
        ></input>
      </div>
    </>
  );
}

export default NameInput;
