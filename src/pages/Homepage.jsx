function Homepage() {
  return (
    <>
      <div className="button-div">
        {/* Booking */}
        {/* <button
          onClick={() => changeHashAddress("booking")}
          id="booking-button"
        >
          <strong>BOOKING FORM</strong>
        </button> */}
        {/* Etsy */}
        <button
          onClick={() =>
            changeURL("https://www.etsy.com/au/shop/georgiatattoos")
          }
        >
          <strong>ETSY STORE</strong>
        </button>
        {/* Instagram */}
        <button
          onClick={() => changeURL("https://www.instagram.com/georgia.tattoos")}
        >
          <strong>INSTAGRAM</strong>
        </button>
        {/* Facebook */}
        <button
          onClick={() => changeURL("https://www.facebook.com/georgiamtattoos")}
        >
          <strong>FACEBOOK</strong>
        </button>
        {/* Tik Tok */}
        <button
          onClick={() => changeURL("https://www.tiktok.com/@georgia.tattoos")}
        >
          <strong>TIKTOK</strong>
        </button>
        {/* Aftercare */}
        <button onClick={() => changeHashAddress("aftercare")}>
          <strong>AFTERCARE</strong>
        </button>
        {/* STUDIO PDF */}
        <button onClick={() => changeURL("how-to-find-the-studio.pdf")}>
          <strong>STUDIO LOCATION</strong>
        </button>
      </div>
    </>
  );
}

export function changeHashAddress(location) {
  window.location.hash = location;
}

function changeURL(location) {
  window.location = location;
}

export default Homepage;
