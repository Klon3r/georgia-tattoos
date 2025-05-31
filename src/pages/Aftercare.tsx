import HeaderText from "./components/HeaderText/HeaderText";
import { headerTailwindStyle } from "./components/HeaderText/HeaderTextTailwind";
import AftercareButton from "./components/Aftercare/AftercareButton/AftercareButton";
import downChevronIcon from "../assets/down-chevron.png";
import { useEffect, useState } from "react";
import ProductRecommendations from "./components/Aftercare/ProductRecommendations";
import clsx from "clsx";
import PrimaryButton from "./components/PrimaryButton/PrimaryButton";
import HealingWithSecondSkin from "./components/Aftercare/HealingWithSecondSkin";
import HealingWithCream from "./components/Aftercare/HealingWithCream";

const Aftercare = () => {
  const [isProductRecommendationsClicked, setIsProductRecommendationsClicked] =
    useState(false);
  const [isHealingWithSecondSkinClicked, setIsHealingWithSecondSkinClicked] =
    useState(false);
  const [isHealingWithCreamClicked, setIsHealingWithCreamClicked] =
    useState(false);

  const [windowDimensions, setWindowDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const [desktopMode, setDesktopMode] = useState(window.innerWidth > 600);

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setDesktopMode(windowDimensions.width > 600);
  }, [windowDimensions.width]);

  return (
    <>
      <div>
        <HeaderText
          headerSize={2}
          text={"Aftercare"}
          className={headerTailwindStyle}
        />
      </div>

      <div
        className={clsx(
          desktopMode ? mainContainerStyleDesktop : mainContainerStyle
        )}
      >
        <div>
          <AftercareButton
            name="HEALING WITH CREAM"
            icon={
              <img
                src={downChevronIcon}
                alt="Down Chevron"
                className={buttonIconStyle}
              />
            }
            clickFunction={(val) => setIsHealingWithCreamClicked(val)}
            className={clsx(
              buttonStyle,
              isHealingWithCreamClicked ? "rounded-t-xl" : "rounded-xl"
            )}
          />
          {isHealingWithCreamClicked && <HealingWithCream />}
        </div>
        <div>
          <AftercareButton
            name="HEALING WITH SECOND SKIN"
            icon={
              <img
                src={downChevronIcon}
                alt="Down Chevron"
                className={buttonIconStyle}
              />
            }
            className={clsx(
              buttonStyle,
              isHealingWithSecondSkinClicked ? "rounded-t-xl" : "rounded-xl"
            )}
            clickFunction={(val) => setIsHealingWithSecondSkinClicked(val)}
          />
          {isHealingWithSecondSkinClicked && <HealingWithSecondSkin />}
        </div>
        <div>
          <AftercareButton
            name="PRODUCT RECOMMENDATIONS"
            icon={
              <img
                src={downChevronIcon}
                alt="Down Chevron"
                className={buttonIconStyle}
              />
            }
            className={clsx(
              buttonStyle,
              isProductRecommendationsClicked ? "rounded-t-xl" : "rounded-xl"
            )}
            clickFunction={(val: boolean) =>
              setIsProductRecommendationsClicked(val)
            }
          />
          {isProductRecommendationsClicked && <ProductRecommendations />}
        </div>
        <div className="flex justify-center">
          <PrimaryButton name="Homepage" location={"/"} />
        </div>
      </div>
    </>
  );
};

const mainContainerStyle = "flex flex-col gap-10 p-2 w-full min-w-sm";
const mainContainerStyleDesktop = "flex flex-col gap-10 p-2 w-150";

const buttonStyle =
  "w-full flex justify-between items-center bg-white p-3 cursor-pointer font-medium text-base";
const buttonIconStyle = "w-6";

export default Aftercare;
