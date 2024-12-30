import { test, expect } from "@playwright/test";

const thankYouPage = "localhost:5173/thank-you";

// Thank you page
test("Check for thank-you hash", async ({ page }) => {
  await page.goto(thankYouPage);
  await expect(page).toHaveURL(/. *thank-you/);
});

// Check thank you text
test("Check 'thank you' text", async ({ page }) => {
  await page.goto(thankYouPage);

  await expect(page.getByText("Your booking is now submitted.")).toBeVisible();
  await expect(
    page.getByText(
      "Keep an eye on your emails including your junk folder for a response.",
    ),
  ).toBeVisible();
  await expect(
    page.getByText("Looking forward to working with you!"),
  ).toBeVisible();
  await expect(page.getByText("THANK YOU!")).toBeVisible();
});
