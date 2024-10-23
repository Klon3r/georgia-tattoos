import { test, expect } from "@playwright/test";

const homepage = "localhost:5173";

// Check Title
test("Check Title", async ({ page }) => {
  await page.goto(homepage); // Change later for Vercel
  await expect(page).toHaveTitle("Georgia Tattoos");
});

// Booking Form
test("Check Booking Button", async ({ page }) => {
  await page.goto(homepage);
  await page
    .getByRole("button", { name: "BOOKING FORM" })
    .click({ force: true });
  await expect(page).toHaveURL(/.*#booking/);
});

// Etsy
// test("Check Esty Store Button", async ({ page }) => {
//   await page.goto(homepage);
//   await page.getByRole("button", { name: "ETSY STORE" }).click({ force: true });
//   await expect(page).toHaveURL("https://www.etsy.com/au/shop/georgiatattoos");
// });

// Instagram
test("Check Instagram Button", async ({ page }) => {
  await page.goto(homepage);
  await page.getByRole("button", { name: "INSTAGRAM" }).click({ force: true });
  await expect(page).toHaveURL(/.*georgia.tattoos*/);
});

// Facebook
test("Check Facebook Button", async ({ page }) => {
  await page.goto(homepage);
  await page.getByRole("button", { name: "FACEBOOK" }).click({ force: true });
  await expect(page).toHaveURL(/.*georgiamtattoos*/);
});

// Tiktok
test("Check Tiktok Button", async ({ page }) => {
  await page.goto(homepage);
  await page.getByRole("button", { name: "TIKTOK" }).click({ force: true });
  await expect(page).toHaveURL(/.*georgia.tattoos*/);
});

// Aftercare
test("Check Aftercare Button", async ({ page }) => {
  await page.goto(homepage);
  await page.getByRole("button", { name: "AFTERCARE" }).click({ force: true });
  await expect(page).toHaveURL(/.*aftercare/);
});
