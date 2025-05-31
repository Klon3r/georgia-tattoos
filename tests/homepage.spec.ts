import { test, expect } from "@playwright/test";

const homepage = "localhost:5173";

// Check Title
test("Check Title", async ({ page }) => {
  await page.goto(homepage);
  await expect(page).toHaveTitle("Georgia Tattoos");
});

// Booking Form
test.skip("Check Booking Button", async ({ page }) => {
  await page.goto(homepage);
  await page
    .getByRole("button", { name: "BOOKING FORM" })
    .click({ force: true });
  await expect(page).toHaveURL(/.*#booking/);
});

// Aftercare
test("Check Aftercare Button", async ({ page }) => {
  await page.goto(homepage);
  await page.getByRole("button", { name: "AFTERCARE" }).click({ force: true });
  await expect(page).toHaveURL(/.*aftercare/);
});

// Studio Guide
test("Check Studio Guide Button", async ({ page }) => {
  await page.goto(homepage);

  const button = page.getByRole("button", { name: "STUDIO GUIDE" });
  await expect(button).toBeVisible();
  await expect(button).toBeEnabled();
});

// TIK TOK
test("Check TikTok Button", async ({ page, context }) => {
  await page.goto(homepage);

  const [newPage] = await Promise.all([
    context.waitForEvent("page"),
    page.getByRole("button", { name: "TIKTOK" }).click({ force: true }),
  ]);

  await newPage.waitForLoadState();
  await expect(newPage).toHaveURL(/.*@georgia.tattoos*/);
});
