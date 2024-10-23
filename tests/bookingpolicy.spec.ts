import { test, expect } from "@playwright/test";

const bookingPolicy = "localhost:5173#booking-policy";

// Check Title
test("Check Hash Routing", async ({ page }) => {
  await page.goto(bookingPolicy);
  await expect(page).toHaveURL(/.*#booking-policy/);
});

// Check instagram link
test("Check instagram link", async ({ page }) => {
  await page.goto(bookingPolicy);
  await page.getByText("@georgia.tattoos").click();
  await expect(page).toHaveURL(/.* georgia.tattoos/);
});

// Check headings
test("Check headings", async ({ page }) => {
  await page.goto(bookingPolicy);

  const heading1 = page.getByTestId("non-refundable");
  const heading2 = page.getByTestId("deposits");
  const heading3 = page.getByTestId("reschedules");
  const heading4 = page.getByTestId("booking-policy");

  await expect(heading1).toHaveText("Deposits are non-refundable");
  await expect(heading2).toHaveText("Deposits");
  await expect(heading3).toHaveText("Reschedules");
  await expect(heading4).toHaveText("Full Day Booking Policy");
});
