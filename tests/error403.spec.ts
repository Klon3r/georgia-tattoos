import { expect, test } from "@playwright/test";

// go to a fake page that doesn't exist
const error403Page = "localhost:5173/random-fake-page";

// Check error title
test("Check error title", async ({ page }) => {
  await page.goto(error403Page);
  await expect(
    page.getByRole("heading", { name: "403 Not Found" })
  ).toBeVisible();
});

// Check text
test("Check error text", async ({ page }) => {
  await page.goto(error403Page);
  await expect(
    page.getByText("That page doesn't exist, please go back to the homepage.")
  ).toBeVisible();
});

// Check Button
test("Check button routes back to homepage", async ({ page }) => {
  await page.goto(error403Page);
  await page.getByRole("button", { name: /Homepage/i }).click();
  await expect(page).toHaveURL(/.*/);
});
