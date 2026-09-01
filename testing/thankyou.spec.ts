import { test, expect } from "@playwright/test";

const thankYouPage = "localhost:5173/thank-you";

test("Check thank-you routing", async ({ page }) => {
  await page.goto(thankYouPage);
  await expect(page).toHaveURL(/. *thank-you/);
});

test("Check 'thank you' text", async ({ page }) => {
  await page.goto(thankYouPage);
  await expect(
    page.getByText(
      "Thank so much, for you interest in getting tattooed by me! Keep an eye on your emails (including spam/junk) for a response from me.",
    ),
  ).toBeVisible();
});

test("Check Homepage button", async ({ page }) => {
  await page.goto(thankYouPage);
  const homepageButton = page.getByTestId("homepage-button");
  await expect(homepageButton).toBeVisible();

  await homepageButton.click({ force: true });
  await expect(page).toHaveURL("http://localhost:5173");
});
