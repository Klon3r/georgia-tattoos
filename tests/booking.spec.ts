import { test, expect } from "@playwright/test";

const booking = "localhost:5173/booking";
const homepage = "localhost:5173";

test.beforeEach(async ({ page }) => {
  await page.goto(booking);
});

test("Check Booking Routing", async ({ page }) => {
  await expect(page).toHaveURL(/.*booking/);
});

test("Check Homepage Link", async ({ page }) => {
  await page.goto(homepage);

  const bookingLink = page.getByTestId("book-now-button");
  expect(bookingLink).toBeVisible();

  await bookingLink.click();
  await expect(page).toHaveURL(/.*booking/);
});

test("Check Dropdowns", async ({ page }) => {
  // Pronouns
  const pronouns = page.getByTitle("pronouns");
  await expect(pronouns.locator("option", { hasText: "She/Her" })).toHaveCount(
    1,
  );
  await expect(pronouns.locator("option", { hasText: "He/Him" })).toHaveCount(
    1,
  );
  await expect(
    pronouns.locator("option", { hasText: "They/Them" }),
  ).toHaveCount(1);

  // Colour Option
  const colourOption = page.getByTitle("tattooColour");
  await expect(
    colourOption.locator("option", { hasText: "Black & Grey" }),
  ).toHaveCount(1);
  await expect(
    colourOption.locator("option", { hasText: "Colour" }),
  ).toHaveCount(1);

  // Work Around
  const workAround = page.getByTitle("workAround");
  await expect(
    workAround.locator("option", { hasText: "Working around other tattoos" }),
  ).toHaveCount(1);
  await expect(
    workAround.locator("option", { hasText: "Filling a gap" }),
  ).toHaveCount(1);
  await expect(workAround.locator("option", { hasText: "Both" })).toHaveCount(
    1,
  );
  await expect(
    workAround.locator("option", { hasText: "Neither" }),
  ).toHaveCount(1);
});

test("Check ScarCoverup Inputs", async ({ page }) => {
  // Scar Coverup
  const scarCoverup = page.getByTitle("scarCoverup");
  await expect(scarCoverup.locator("option", { hasText: "Yes" })).toHaveCount(
    1,
  );
  await expect(scarCoverup.locator("option", { hasText: "No" })).toHaveCount(1);

  await scarCoverup.selectOption("Yes");

  // Scar Metal Plating
  const scarMetalPlating = page.getByTitle("scarMetalPlating");
  await expect(
    scarMetalPlating.locator("option", { hasText: "Yes" }),
  ).toHaveCount(1);
  await expect(
    scarMetalPlating.locator("option", { hasText: "No" }),
  ).toHaveCount(1);

  // Scar Age
  const scarAge = page.getByTestId("scarAge");
  await expect(scarAge).toBeVisible();
});

test("Check Inputs Exist", async ({ page }) => {
  const firstName = page.getByTitle("First Name");
  const lastName = page.getByTitle("Last Name");
  const preferredName = page.getByTitle("Preferred Name");
  const pronouns = page.getByTitle("pronouns");

  const email = page.getByTitle("email");
  const number = page.getByTitle("Enter your 10-digit phone number");
  const instagram = page.getByTitle("Please enter you instagram username");

  const description = page.getByTitle("tattooDescription");
  const location = page.getByTitle("locationOnBody");
  const sizeTattoo = page.getByTitle("eg. 10-20cm");
  const tattooColor = page.getByTitle("tattooColour");

  const monday = page.getByTitle("monday");
  const tuesday = page.getByTitle("tuesday");
  const friday = page.getByTitle("friday");
  const saturday = page.getByTitle("saturday");

  await expect(firstName).toHaveId("firstName");
  await expect(lastName).toHaveId("lastName");
  await expect(preferredName).toHaveId("preferredName");
  await expect(pronouns).toHaveId("pronouns");
  await expect(email).toHaveId("email");
  await expect(number).toHaveId("number");
  await expect(instagram).toHaveId("instagram");
  await expect(description).toHaveId("tattooDescription");
  await expect(location).toHaveId("locationOnBody");
  await expect(sizeTattoo).toHaveId("sizeTattoo");
  await expect(tattooColor).toHaveId("tattooColour");

  await expect(monday).toHaveId("monday");
  await expect(tuesday).toHaveId("tuesday");
  await expect(friday).toHaveId("friday");
  await expect(saturday).toHaveId("saturday");
});
