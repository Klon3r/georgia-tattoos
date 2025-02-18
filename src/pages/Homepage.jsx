import studioPDF from "../assets/how-to-find-studio.pdf";

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

        {/* Shopify */}
        <button onClick={() => changeURL("https://qwqr9e-6b.myshopify.com/")}>
          <strong>SHOP NOW</strong>
        </button>

        {/* Aftercare */}
        <button onClick={() => changeURL("aftercare")}>
          <strong>AFTERCARE</strong>
        </button>

        {/* STUDIO PDF */}
        <a href={studioPDF} download>
          <button>
            <strong>STUDIO GUIDE</strong>
          </button>
        </a>

        {/* Tik Tok */}
        <button
          onClick={() => changeURL("https://www.tiktok.com/@georgia.tattoos")}
        >
          <strong>TIKTOK</strong>
        </button>

        {/* Facebook */}
        <button
          onClick={() => changeURL("https://www.facebook.com/georgiamtattoos")}
        >
          <strong>FACEBOOK</strong>
        </button>
      </div>
    </>
  );
}

export function changeURL(location) {
  window.location = location;
}

export default Homepage;
