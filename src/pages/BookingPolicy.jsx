import { useEffect } from "react";
import { changeHashAddress } from "./Homepage";

function BookingPolicy() {
  useEffect(() => {
    /**
     * Scroll the window to the top on hash change
     */
    const handleHashChange = () => {
      window.scrollTo(0, 0);
    };

    // Add event when page loads
    window.addEventListener("hashchange", handleHashChange);

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  });

  return (
    <>
      <div id="content-div">
        <h2 id="headings">PLEASE READ</h2>
        <h3 id="headings" data-testid="non-refundable">
          Deposits are non-refundable
        </h3>
        <p className="text">
          Please note that your tattoo appointment is not confirmed until we
          have settled on a date/time and I've received a screenshot of the
          deposit paid to lock in your booking. I will always send a follow up
          email letting you know that your tattoo appointment has now been
          confirmed.
          <br />
          <br />I open my books roughly every 3 months and keep them open for
          one week to allow everyone enough time to send in their submission. I
          respond to all new submissions via email within one week to start the
          booking process and then I close my books again. Please note that I
          don't check my emails outside of these booking windows to allow for a
          better work/life balance so please contact Georgia directly
          <a href="https://www.instagram.com/georgia.tattoos/">
            @georgia.tattoos
          </a>
          .
        </p>
        <h3 id="headings" data-testid="deposits">
          Deposits
        </h3>
        <p className="text">
          A $100 deposit will be collected for each booking made, this amount
          comes off the total on the day.
          <br />
          <br />
          Once I've sent you my deposit information, the deposit will need to be
          paid within 72 hours to secure that date/time. If I don't receive a
          screenshot of the deposit paid within this time frame, your booking
          will be automatically deleted from my system and the prior agreed upon
          date will need to be renegotiated before a deposit can be paid.
        </p>
        <h3 id="headings" data-testid="reschedules">
          Reschedules
        </h3>
        <p className="text">
          If you need to reschedule your booking, please contact me via
          Instagram only more than 48 hours before your appointment time.
          Failure to do so within this time frame will forfeit your deposit and
          a second deposit will be required to secure a new date.
          <br />
          <br />
          Please note that only 2 reschedules are honoured with your original
          deposit - if for whatever reason you need to reschedule a 3rd time, a
          new deposit will be required to lock in a new date.
          <br />
          <br />
          As I am booked out at least 3 months in advance, please be aware that
          if you need to reschedule - I will always do my best to find you a
          date ASAP but to keep things fair, it's highly likely your new date
          will be months out from your original.
        </p>
        <h3
          id="headings"
          data-testid="booking-policy"
          style={{ marginBottom: 0 + "px" }}
        >
          Full Day Booking Policy
        </h3>
        <p className="text" style={{ marginTop: 0 + "px" }}>
          (𝘪𝘨𝘯𝘰𝘳𝘦 𝘵𝘩𝘪𝘴 𝘴𝘦𝘤𝘵𝘪𝘰𝘯 𝘪𝘧 𝘺𝘰𝘶’𝘳𝘦 𝘯𝘰𝘵 𝘣𝘰𝘰𝘬𝘪𝘯𝘨 𝘢 𝘧𝘶𝘭𝘭 𝘥𝘢𝘺)
          <br /> <br />
          Full day bookings consist of 6 hours of tattooing time charged at
          $1100. If you'd like to book a full day, please be aware that I have a
          policy which requires a minimum spend of $700. This means that if you
          tap out early or cannot complete the 6 hour session, a minimum payment
          of $700 will need to be paid at the end of the session and the deposit
          for that session will be put towards a second session to finish your
          tattoo. If this concerns you please let me know as we can easily
          negotiate doing your tattoo over several smaller sessions.
          <br />
          <br />
          Thank you for reading my booking policies! If you have any questions
          about anything, please let me know as I'm always happy to clarify. I'm
          looking forward to working with you!
        </p>
      </div>{" "}
      {/* Booking */}
      <button onClick={() => changeHashAddress("booking")}>
        <strong>BACK TO BOOKING</strong>
      </button>{" "}
    </>
  );
}

export default BookingPolicy;
