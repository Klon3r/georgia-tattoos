import { expect, test } from "@playwright/test";

const errorPage = "localhost:5173#error";

// Check error hash
test("Check Error Hash", async ({ page }) => {
  await page.goto(errorPage);
  await expect(page).toHaveURL(/. *#error/);
});

// Check text
test("Check error text", async ({ page }) => {
  await page.goto(errorPage);
  await expect(
    page.getByText("There has been an error please go back and try again.")
  ).toBeVisible();
  await expect(page.getByRole("heading", { name: "ERROR" })).toBeVisible();
});
