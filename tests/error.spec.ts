import { expect, test } from "@playwright/test";

const errorPage = "localhost:5173/error";

// Check error hash
test("Check Error Routing", async ({ page }) => {
  await page.goto(errorPage);
  await expect(page).toHaveURL(/. *error/);
});

// Check error title
test("Check error title", async ({ page }) => {
  await page.goto(errorPage);
  await expect(page.getByRole("heading", { name: "ERROR" })).toBeVisible();
});

// Check text
test("Check error text", async ({ page }) => {
  await page.goto(errorPage);
  await expect(
    page.getByText("There has been an error please try again.")
  ).toBeVisible();
});

// Check Button
test("Check button routes back to homepage", async ({ page }) => {
  await page.goto(errorPage);
  await page.getByRole("button", { name: /Homepage/i }).click();
  await expect(page).toHaveURL(/. */);
});
