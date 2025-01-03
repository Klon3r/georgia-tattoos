function PhotoConsentOptions() {
  return (
    <>
      <div className="consent-label">
        Do you consent to having photos of your tattoo posted to social media
        for advertisement purposes?
        <span className="required">*</span>
      </div>
      <div id="photo-choices" className="radio-group">
        <div className="radio-button-div">
          <label htmlFor="radio-button-yes">
            <input
              type="radio"
              id="photo-choices-yes"
              title="photo-choices-yes"
              name="photo-permission"
              value="yes"
            />
            Yes
          </label>
        </div>

        <div className="radio-button-div">
          <label htmlFor="radio-button-no">
            <input
              type="radio"
              id="photo-choices-no"
              title="photo-choices-no"
              name="photo-permission"
              value="no"
            />
            No
          </label>
        </div>
      </div>
      <p>
        I hereby acknowledge by signing this agreement that I have been given
        the full opportunity to ask any questions regarding obtaining a tattoo
        and these have been answered to my full satisfaction
      </p>
    </>
  );
}

export default PhotoConsentOptions;
