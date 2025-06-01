import { test, expect } from "@playwright/test";

const homepage = "localhost:5173";

// Check Title
test("Check Title", async ({ page }) => {
  await page.goto(homepage);
  await expect(page).toHaveTitle("Georgia Tattoos");
});

// Studio Guide Button
test("Check Studio Guide Button", async ({ page }) => {
  await page.goto(homepage);
  const button = page.getByTestId("studio-guide-button");
  await expect(button).toBeVisible();
  await expect(button).toBeEnabled();
});

// Aftercare Button
test("Check Aftercare Button", async ({ page }) => {
  await page.goto(homepage);
  const button = page.getByTestId("aftercare-button");
  await expect(button).toBeVisible();
  await expect(button).toBeEnabled();
  await button.click({ force: true });
  await expect(page).toHaveURL(/.*aftercare/);
});

// Online Shop Button
test("Check Online Shop Button", async ({ page }) => {
  await page.goto(homepage);
  const button = page.getByTestId("online-shop-button");
  await expect(button).toBeVisible();
  await expect(button).toBeEnabled();

  const [newPage] = await Promise.all([
    page.context().waitForEvent("page"),
    button.click({ force: true }),
  ]);

  await newPage.waitForLoadState();
  await expect(newPage).toHaveURL(/.*qwqr9e-6b.myshopify.com/);
});

// Review Button
test("Check Review Button", async ({ page }) => {
  await page.goto(homepage);
  const button = page.getByTestId("review-button");
  await expect(button).toBeVisible();
  await expect(button).toBeEnabled();

  const [newPage] = await Promise.all([
    page.context().waitForEvent("page"),
    button.click({ force: true }),
  ]);

  await newPage.waitForLoadState();
  await expect(newPage).toHaveURL(/.*google.com\/search/);
});
