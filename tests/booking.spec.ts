import { test, expect } from "@playwright/test";

const booking = "localhost:5173/booking";

// Check Title
test.skip("Check Booking Routing", async ({ page }) => {
  await page.goto(booking);
  await expect(page).toHaveURL(/.*booking/);
});

// Check inputs exist
test.skip("Check Inputs Exist", async ({ page }) => {
  await page.goto(booking);

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
