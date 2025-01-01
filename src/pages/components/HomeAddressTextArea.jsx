function HomeAddressTextArea() {
  return (
    <>
      <div className="consent-label">
        Home Address: <span className="required">*</span>
      </div>
      <div className="consent-inputs">
        <textarea placeholder="Enter Address" rows="4" />
      </div>
    </>
  );
}

export default HomeAddressTextArea;
