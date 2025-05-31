import PrimaryButton from "./components/PrimaryButton/PrimaryButton";
import StudioPDF from "/how-to-find-the-studio.pdf";

const Homepage = () => {
  return (
    <div>
      <PrimaryButton
        name="SHOP NOW"
        location="https://qwqr9e-6b.myshopify.com/"
      />
      <PrimaryButton name="AFTERCARE" location="aftercare" />
      <PrimaryButton name="STUDIO GUIDE" location={StudioPDF} />
      <PrimaryButton
        name="TIKTOK"
        location="https://www.tiktok.com/@georgia.tattoos"
        openNewTab
      />
    </div>
  );
};

export default Homepage;
