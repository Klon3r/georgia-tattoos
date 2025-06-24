import PrimaryImageButton from "./components/PrimaryImageButton/PrimaryImageButton";
import StudioPDF from "/how-to-find-the-studio.pdf";

// Buttons
import ImageOnlineShop from "../assets/Homepage/online-shop.PNG";
import ImageAftercare from "../assets/Homepage/aftercare.PNG";
import ImageStudioGuide from "../assets/Homepage/studio-guide.PNG";
import ImageReview from "../assets/Homepage/review.PNG";
import ImageBookNow from "../assets/Homepage/book-now.PNG";

const Homepage = () => {
  const booksOpen = true;

  return (
    <div>
      <div className={buttonGroupTailwind}>
        <PrimaryImageButton
          imageSource={ImageOnlineShop}
          url="https://qwqr9e-6b.myshopify.com/"
          openNewTab
          ariaLabel="Online shop button"
          testId="online-shop-button"
        />
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
            imageSource={ImageBookNow}
            url="/booking"
            ariaLabel="Book now button"
            testId="book-now-button"
          />
        ) : (
          <PrimaryImageButton
            imageSource={ImageReview}
            url="https://www.google.com/search?q=Esoteric+Tattoo+Everton+Park+QLD+4053&ludocid=13533067620571183157#lrd=0x6b91574e9dc6310f:0xbb685c7fa8c17fb5,1,,,"
            openNewTab
            ariaLabel="Review button"
            testId="review-button"
          />
        )}
      </div>
    </div>
  );
};

const buttonGroupTailwind = "flex flex-row gap-5 p-5 mb-5";

export default Homepage;
