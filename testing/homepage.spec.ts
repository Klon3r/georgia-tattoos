import { test, expect } from "@playwright/test";

const homepage = "localhost:5173";

test.describe("Checks", () => {
  test("Check Title", async ({ page }) => {
    await page.goto(homepage);
    await expect(page).toHaveTitle("Georgia Tattoos");
  });

  test("Check Studio Guide Button", async ({ page }) => {
    await page.goto(homepage);
    const button = page.getByTestId("studio-guide-button");
    await expect(button).toBeVisible();
    await expect(button).toBeEnabled();
  });

  test("Check Aftercare Button", async ({ page }) => {
    await page.goto(homepage);
    const button = page.getByTestId("aftercare-button");
    await expect(button).toBeVisible();
    await expect(button).toBeEnabled();
    await button.click({ force: true });
    await expect(page).toHaveURL(/.*aftercare/);
  });

  test("Check Online Shop Button", async ({ page }) => {
    await page.goto(homepage);
    const button = page.getByTestId("online-shop-button");
    await expect(button).toBeVisible();
    await expect(button).toBeEnabled();

    const [newPage] = await Promise.all([
      page.context().waitForEvent("page"),
      button.click({ force: true }),
    ]);

    await newPage.waitForLoadState();
    await expect(newPage).toHaveURL(/.*georgiatattoos.store/);
  });
});

test.describe("Feature Flags", () => {
  [true, false].forEach((isBookingFormEnabled) => {
    test(`Check booking button when feature is ${isBookingFormEnabled}`, async ({
      page,
    }) => {
      // Mock FeatureFlag API
      await page.route("**/api/featureFlag", async (route) => {
        const json = {
          booking_form: isBookingFormEnabled,
          early_access: false,
        };
        await route.fulfill({ json });
      });

      await page.goto(homepage);

      const bookingButton = page.getByTestId("book-now-button");
      const waitListButton = page.getByTestId("waitlist-button");

      if (isBookingFormEnabled) {
        await expect(bookingButton).toBeVisible();
        await expect(waitListButton).not.toBeVisible();
      } else {
        await expect(bookingButton).not.toBeVisible();
        await expect(waitListButton).toBeVisible();
      }
    });
  });
});
