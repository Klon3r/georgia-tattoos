import { test, expect } from "@playwright/test";

const aftercare = "localhost:5173/aftercare";

// Check Title
test("Check Routing", async ({ page }) => {
  await page.goto(aftercare);
  await expect(page).toHaveURL(/.*aftercare/);
});

// Check Button Names
test("Check button names", async ({ page }) => {
  await page.goto(aftercare);
  await expect(
    page.getByRole("button", { name: "HEALING WITH CREAM" })
  ).toBeVisible();
  await expect(
    page.getByRole("button", { name: "HEALING WITH SECOND SKIN" })
  ).toBeVisible();
  await expect(
    page.getByRole("button", { name: "PRODUCT RECOMMENDATIONS" })
  ).toBeVisible();
});

// Check home button
test("Check home Button", async ({ page }) => {
  await page.goto(aftercare);
  await page.getByRole("button", { name: "Homepage" }).click({ force: true });
  await expect(page).toHaveURL(/.*/);
});
