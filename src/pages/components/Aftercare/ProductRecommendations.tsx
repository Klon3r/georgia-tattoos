import dettolImage from "../../../assets/Aftercare/dettol-hand-wash.webp";
import picklesImage from "../../../assets/Aftercare/dr-pickles-tattoo-balm.jpg";
import aveenoImage from "../../../assets/Aftercare/aveeno-moisturizer.avif";
import opsiteImage from "../../../assets/Aftercare/opsite-flex.jpg";
import { divContainer, linkStyle } from "./Tailwind";

const ProductRecommendations = () => {
  return (
    <div className={divContainer}>
      <p>
        Below are some products I highly recommend using throughout your healing
        process, all of which are Vegan friendly.
      </p>
      <p>
        I recommend picking up this{" "}
        <a
          className={linkStyle}
          href="https://www.woolworths.com.au/shop/productdetails/724612"
          target="_blank"
          rel="noopener noreferrer"
        >
          Dettol Foam Handwash
        </a>{" "}
        from your local supermarket as that way you know it's clean every time
        you use it, unlike a bar of soap which is very drying and often harbors
        bad bacteria
      </p>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.woolworths.com.au/shop/productdetails/724612"
      >
        <img
          src={dettolImage}
          alt="Dettol Hand Wash"
          className="w-full max-w-xs mx-auto"
        ></img>
      </a>
      <p>
        If you have an aftercare balm you prefer using please just use that,
        alternately I would recommend picking up a tube of{" "}
        <a
          className={linkStyle}
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.woolworths.com.au/shop/productdetails/440479"
        >
          Dr Pickles Tattoo Balm
        </a>{" "}
        from your local Woolworths and using this as your primary aftercare
        cream, until your tattoo has finished healing.
      </p>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.woolworths.com.au/shop/productdetails/440479"
      >
        <img
          src={picklesImage}
          alt="Doctor Pickles Tattoo Balm"
          className="rounded-xl w-full max-w-xs mx-auto"
        />
      </a>
      <p>
        Once your tattoo has finished healing, I recommend using a good daily{" "}
        <a
          className={linkStyle}
          href="https://www.woolworths.com.au/shop/productdetails/276040/aveeno-daily-moisturising-lotion-for-normal-to-dry-skin"
        >
          moisturizer
        </a>
        , to keep your tattoo looking good well into the future. This is just an
        example, but whatever is suited to your needs will work fine.
      </p>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.woolworths.com.au/shop/productdetails/276040/aveeno-daily-moisturising-lotion-for-normal-to-dry-skin"
      >
        <img
          src={aveenoImage}
          alt="Aveeno moisturizer"
          className="max-w-90 m-auto"
        ></img>
      </a>
      <p>
        If you have a leak in your second skin and need to replace it, I
        recommend picking up a roll of{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          className={linkStyle}
          href="https://www.chemistwarehouse.com.au/buy/64566/opsite-flexfix-10cmx1m-roll"
        >
          this
        </a>{" "}
        from Chemist Warehouse and getting someone to help you apply it. Make
        sure your tattoo is clean and dry and whoever reapplies the second skin
        has clean and dry hands.
      </p>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.chemistwarehouse.com.au/buy/64566/opsite-flexfix-10cmx1m-roll"
      >
        <img
          src={opsiteImage}
          alt="Opsite Flexfix"
          className="rounded-xl w-full max-w-xs mx-auto"
        ></img>
      </a>
      <p>
        Don't forget to use a good SPF when you're having fun in the sun! Your
        tattoo lives under the surface of your skin, so the healthier your skin
        is, the better your tattoo looks.
      </p>
      <p>
        If you've made it to here, well done for taking your tattoo aftercare
        seriously! If you have any questions or concerns throughout the process,
        don't hesitate to send me a message. If you suspect you have an
        infection, you can always drop into the studio and get it checked out or
        send me a photo so I can assess it. Happy healing & I hope to see you
        again!
      </p>
    </div>
  );
};

export default ProductRecommendations;
