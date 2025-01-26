function HomeAddressTextArea({ value, onChange }) {
  return (
    <>
      <div className="consent-label">
        Home Address: <span className="required">*</span>
      </div>
      <div className="consent-inputs">
        <textarea
          placeholder="Enter your full address (e.g., 123 Example St, Apt 4, Brisbane, QLD 4000)"
          name="homeAddress"
          rows="3"
          maxLength={500}
          value={value.homeAddress}
          onChange={onChange}
        />
      </div>
    </>
  );
}

export default HomeAddressTextArea;
