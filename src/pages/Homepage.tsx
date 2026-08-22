import PrimaryImageButton from "../components/PrimaryImageButton/PrimaryImageButton";
import StudioPDF from "/how-to-find-the-studio.pdf";

import ImageOnlineShop from "../assets/Homepage/online-shop.png";
import ImageAftercare from "../assets/Homepage/aftercare.png";
import ImageStudioGuide from "../assets/Homepage/studio-guide.png";
import ImageBookNow from "../assets/Homepage/book-now.png";
import waitListImage from "../assets/Homepage/waitlist.png";

const Homepage = () => {
  // TODO: Implement GlobalConfig via Vercel
  const bookingFormFlag = false;

  return (
    <div>
      <div className={buttonGroupTailwind}>
        {bookingFormFlag ? (
          <PrimaryImageButton
            imageSource={ImageBookNow}
            url="/booking"
            ariaLabel="Book now button"
            testId="book-now-button"
          />
        ) : (
          <PrimaryImageButton
            imageSource={ImageOnlineShop}
            url="https://qwqr9e-6b.myshopify.com/"
            openNewTab
            ariaLabel="Online shop button"
            testId="online-shop-button"
          />
        )}
        <PrimaryImageButton
          imageSource={ImageAftercare}
          url="/aftercare"
          ariaLabel="Aftercare button"
          testId="aftercare-button"
        />
      </div>
      <div className={buttonGroupTailwind}>
        <PrimaryImageButton
          imageSource={ImageStudioGuide}
          url={StudioPDF}
          ariaLabel="Studio guide button"
          testId="studio-guide-button"
        />
        {bookingFormFlag ? (
          <PrimaryImageButton
            imageSource={ImageOnlineShop}
            url="https://qwqr9e-6b.myshopify.com/"
            openNewTab
            ariaLabel="Online shop button"
            testId="online-shop-button"
          />
        ) : (
          <PrimaryImageButton
            imageSource={waitListImage}
            url="https://georgiatattoos.store/pages/newsletter"
            openNewTab
            ariaLabel="Waitlist button"
            testId="waitlist-button"
          />
        )}
      </div>
    </div>
  );
};

const buttonGroupTailwind = "flex flex-row gap-5 p-5 mb-5";

export default Homepage;
