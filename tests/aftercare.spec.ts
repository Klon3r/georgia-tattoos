import { test, expect } from "@playwright/test";

// Change later for Vercel
const aftercare = "localhost:5173#aftercare";

// Check Title
test("Check Hash Routing", async ({ page }) => {
  await page.goto(aftercare);
  await expect(page).toHaveURL(/.*#aftercare/);
});

// Check Heading Names
test("Check heading names", async ({ page }) => {
  await page.goto(aftercare);
  await expect(page.getByTitle("healing-with-second-skin")).toHaveText(
    "HEALING WITH SECOND SKIN",
  );
  await expect(page.getByTitle("healing-with-cream")).toHaveText(
    "HEALING WITH CREAM",
  );
  await expect(page.getByTitle("product-recommendations")).toHaveText(
    "PRODUCT RECOMMENDATIONS",
  );
});

// Check home button
test("Check home Button", async ({ page }) => {
  await page.goto(aftercare);
  await page.getByRole("button", { name: "Homepage" }).click({ force: true });
  await expect(page).toHaveURL(/.*#/);
});

// Check all images

// Check all links
