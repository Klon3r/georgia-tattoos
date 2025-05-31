import { divContainer } from "./Tailwind";

const HealingWithCream = () => {
  const textHeaderStyle = "text-lg font-bold";
  const listStyle = "list-disc ml-3";

  return (
    <div className={divContainer}>
      <p>
        Before you left the studio, I applied an aftercare cream to your tattoo
        and wrapped it in cling wrap to keep it safe for the travel home. Please
        remove the cling wrap cover within 2 hours to minimize the risk of
        infection.
      </p>
      <div>
        <h1 className={textHeaderStyle}>What You'll Need</h1>

        <p>
          Before you remove the cling wrap, you want to make sure you have the
          following available to you:
          <br />
          - Clean scissors <br />
          - Soap (preferably dettol foam handwash)
          <br />
          - Paper towel
          <br />
          - Aftercare cream of choice
          <br />
        </p>
      </div>
      <div>
        <h1 className={textHeaderStyle}>Removing the Cling Wrap</h1>
        <p>
          Once you're prepared to remove the cling wrap, make sure to thoroughly
          wash your hands beforehand to avoid potential infection.
        </p>
        <p>
          Start by cutting off the cling wrap, please try to avoid touching the
          scissors to your fresh tattoo because ouch and it could also cause an
          infection.
        </p>
      </div>
      <div>
        <h1 className={textHeaderStyle}>Cleaning Your Tattoo</h1>
        <p>
          Once you've removed the cling wrap, it's best to hop in the shower to
          give the tattoo a thorough wash with warm soapy water (note: it might
          sting a little bit, sorry!) Make sure to wash it until it no longer
          feels slimy.
        </p>
        <p>
          Once you've finished giving it a thorough clean, hop out of the shower
          and pat the tattoo dry with paper towel <strong>only</strong>, as a
          towel could cause infection.
        </p>
      </div>
      <div>
        <h1 className={textHeaderStyle}>Applying Aftercare Cream</h1>
        <p>
          Once the tattoo is completely dry, with clean hands you want to apply
          a <strong>thin layer</strong> of aftercare cream (please find section
          below for recommended products). You just want enough cream to create
          a thin barrier over the tattoo to help prevent an infection if
          something comes into contact with your fresh tattoo.. you don't want
          to smother it with cream as your tattoo still needs oxygen to heal and
          excess moisture = bacteria.
        </p>
      </div>
      <div>
        <h1 className={textHeaderStyle}>Ongoing Care</h1>
        <p>
          For the next 2 weeks you will need to wash your tattoo{" "}
          <strong>at least</strong> twice a day, ideally morning & night and
          follow up with applying a thin layer of aftercare cream, until your
          tattoo is fully healed.
        </p>
        <p>
          Make sure you have clean hands every time you wash or touch your
          tattoo, this will minimize risk of infection. If you think something
          potentially infectious has touched your tattoo, be sure to wash it
          ASAP.
        </p>
        <ul>
          <li className={listStyle}>
            Keep pets away from your fresh tattoo as their hair/fur is full of
            bacteria.
          </li>
          <br />
          <li className={listStyle}>
            Keep your fresh tattoo out of the sun, your healing tattoo is
            extremely sensitive and delicate during the healing process, so
            treat it well.
          </li>
          <br />
          <li className={listStyle}>
            Avoid wearing clothes that are going to excessively rub on it as
            this will cause irritation and may cause scabs to come off
            prematurely.
          </li>
          <br />
          <li className={listStyle}>
            Do not submerge your tattoo in water for 2 weeks (no bathing, no
            swimming, no spas etc, showers are fine)
          </li>
        </ul>
      </div>

      <div>
        <h1 className={textHeaderStyle}>Scabbing & Itching</h1>
        <p>
          As your tattoo heals, it will begin to scab up (this is normal, even
          if it looks a little gnarly) but please do not pick at the scabs, just
          keep taking care of it as I've instructed and they will all come off
          in time. Picking scabs off before they're ready to come off will
          likely lead to infection as well as something we call fall out (this
          is where the tattoo ink hasn't had time to settle into the skin and so
          it comes out with the scab, requiring a touch up to restore).
        </p>
        <p>
          Your tattoo may feel tight and itchy as it's healing. You can relieve
          the tightness by applying a thin layer of aftercare cream to your
          tattoo, which will help restore some moisture to the skin, relaxing
          the scabs. Please don't scratch at your tattoo if it becomes itchy,
          you can however give it a good slap to relieve the itchiness.
        </p>
      </div>
      <div>
        <h1 className={textHeaderStyle}>Optional: Wrapping at Night</h1>
        <p>
          If you would like to, you may wrap your tattoo in cling wrap for the
          first 2 nights to protect it while you sleep but please make sure your
          tattoo is clean and has no cream on it before wrapping it in cling
          wrap. Be prepared for it to be slimey and gross in the morning when
          you take it off and be sure to give it a good clean in the shower
          after.
        </p>
      </div>
    </div>
  );
};

export default HealingWithCream;
