import { expect, test } from "@playwright/test";

const errorPage = "localhost:5173/error";

test("Check Error Routing", async ({ page }) => {
  await page.goto(errorPage);
  await expect(page).toHaveURL(/. *error/);
});

test("Check error title", async ({ page }) => {
  await page.goto(errorPage);
  await expect(page.getByRole("heading", { name: "ERROR" })).toBeVisible();
});

test("Check error text", async ({ page }) => {
  await page.goto(errorPage);
  await expect(
    page.getByText("Something went wrong! Please try again later"),
  ).toBeVisible();
});

test("Check button routes back to homepage", async ({ page }) => {
  await page.goto(errorPage);
  await page.getByRole("button", { name: /Homepage/i }).click();
  await expect(page).toHaveURL(/. */);
});
