import PrimaryImageButton from "./components/PrimaryImageButton/PrimaryImageButton";
import StudioPDF from "/how-to-find-the-studio.pdf";

import ImageOnlineShop from "../assets/Homepage/online-shop.PNG";
import ImageAftercare from "../assets/Homepage/aftercare.PNG";
import ImageStudioGuide from "../assets/Homepage/studio-guide.PNG";
import ImageBookNow from "../assets/Homepage/book-now.PNG";
import waitListImage from "../assets/Homepage/waitlist.PNG";

const Homepage = () => {
  const booksOpen = false;

  return (
    <div>
      <div className={buttonGroupTailwind}>
        {booksOpen ? (
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
        {booksOpen ? (
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
