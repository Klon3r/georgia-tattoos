import { expect, test } from "@playwright/test";

const error403Page = "localhost:5173/random-fake-page";

test("Check error title", async ({ page }) => {
  await page.goto(error403Page);
  await expect(page.getByRole("heading", { name: "403" })).toBeVisible();
});

test("Check error text", async ({ page }) => {
  await page.goto(error403Page);
  await expect(
    page.getByText("That page doesn't exist, please go back to the homepage."),
  ).toBeVisible();
});

test("Check button routes back to homepage", async ({ page }) => {
  await page.goto(error403Page);
  await page.getByRole("button", { name: /Homepage/i }).click();
  await expect(page).toHaveURL(/.*/);
});

test("Check Homepage button", async ({ page }) => {
  await page.goto(error403Page);
  const homepageButton = page.getByTestId("homepage-button");
  await expect(homepageButton).toBeVisible();

  await homepageButton.click({ force: true });
  await expect(page).toHaveURL("http://localhost:5173");
});
