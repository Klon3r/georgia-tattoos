import { divContainer, linkStyle } from "./Tailwind";

const HealingWithSecondSkin = () => {
  const textHeaderStyle = "text-lg font-bold";

  return (
    <div className={divContainer}>
      <div>
        <h1 className={textHeaderStyle}>What to Expect</h1>
        <p>
          Over the next 24 hours, your second skin is likely to fill up with
          some reddish/brownish fluid, this is totally normal so don't stress!
        </p>
        <p>
          It's just a build up of blood & plasma, which your body naturally
          excretes in order to heal wounds.
        </p>
      </div>
      <div>
        <h1 className={textHeaderStyle}>When to Remove Second Skin</h1>
        <p>
          However if that fluid leaks out anywhere, you will need to remove the
          second skin as soon as possible, as it is no longer sterile. <br />
          <i>(see instructions below for how to remove second skin)</i>
        </p>
        <p>
          Once removed follow the instructions above for{" "}
          <strong>"HEALING WITH CREAM"</strong>, minus the part about removing
          the cling wrap.
        </p>
      </div>
      <div>
        <h1 className={textHeaderStyle}>How Long to Keep Second Skin On</h1>
        <p>
          If the second skin doesn't leak or cause an allergic reaction (look
          for a red, itchy rash around the outside of the second skin) it is
          safe to keep it on for 5-6 days in total. If it begins to irritate
          you, you can take it off sooner but I recommend leaving it on for the
          full 6 days as this will give you the best end result as it diminishes
          the risk of infection & fallout.
        </p>
      </div>
      <div>
        <h1 className={textHeaderStyle}>Itching</h1>

        <p>
          Your tattoo will likely get quite itchy around the 3-4 day mark, this
          is normal so long as no rash is present and it's a sign your tattoo is
          healing. Feel free to give it a good slap a few times to relieve the
          itchiness.
        </p>
      </div>
      <div>
        <h1 className={textHeaderStyle}>How to Remove Second Skin</h1>
        <p>
          Once you're ready to <strong>remove the second skin</strong>, it is
          best to do so at the end of a hot shower, as this will help to loosen
          the adhesive. Start by peeling away a corner and use this to slowly
          peel it off. If it gets stuck, you can use some soapy water to help.
          You might notice a perfect imprint of your tattoo on the second skin
          as you remove it, <strong>DO NOT</strong> worry, your tattoo isn't
          coming off, it's just dried onto the second skin.
        </p>
        <p>
          Once you've removed it, give it a good wash a few times with soap (I
          recommend something like the dettol foam handwash). Once it's clean
          you can hop out of the shower, pat it dry with paper towel and apply a
          thin layer of your preferred aftercare cream (please find section
          below for recommended products).
        </p>
      </div>
      <div>
        <h1 className={textHeaderStyle}>After Removal</h1>
        <p>
          Over the next few days after removing the second skin, your tattoo
          will begin to lightly peel away the dead skin, this is totally normal,
          just let it flake away naturally, don't pick at it or rub it to remove
          the skin faster.
        </p>
        <p>
          During the peeling stage you will need to keep your tattoo clean &
          moisturized by applying a thin layer of aftercare cream, twice a day.
        </p>
        <p>
          Once the peeling has finished, please note that your tattoo will have
          a milky appearance for a couple of weeks as your skin continues to
          turn over (think of how your skin goes white once a scab has come
          off).
        </p>
      </div>
      <div>
        <h1 className={textHeaderStyle}>Touch Ups</h1>
        <p>
          After a month of having your tattoo, you will be able to see if it
          needs a touch up. If you suspect that it does, please don't hesitate
          to contact me to book in for a free touch up.
        </p>
      </div>
      <div>
        <h1 className={textHeaderStyle}>Additionally</h1>
        <p>
          If the first piece of second skin comes off early and you'd like to
          continue healing with second skin you can either drop back into the
          studio the next day so that I can apply a second piece, or you can
          pick up a roll of it from{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            className={linkStyle}
            href="https://www.chemistwarehouse.com.au/buy/64566/opsite-flexfix-10cmx1m-roll"
          >
            Chemist Warehouse
          </a>{" "}
          and apply it yourself at home. Just please make sure the area is clean
          & dry before applying and follow the instructions included.
        </p>
      </div>
    </div>
  );
};

export default HealingWithSecondSkin;
