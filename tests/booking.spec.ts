import { test, expect } from "@playwright/test";

const booking = "localhost:5173/booking";

// Check Title
test.skip("Check Hash Routing", async ({ page }) => {
  await page.goto(booking);
  await expect(page).toHaveURL(/.*booking/);
});

// Check inputs exist
test.skip("Check Inputs Exist", async ({ page }) => {
  await page.goto(booking);

  const fName = page.getByTitle("first-name");
  const lName = page.getByTitle("last-name");
  const pName = page.getByTitle("preferred-name");
  const pronouns = page.getByTitle("pronouns");
  const email = page.getByTitle("email");
  const number = page.getByTitle("number");
  const instagram = page.getByTitle("instagram");
  const description = page.getByTitle("description");
  const monday = page.getByTitle("monday");
  const tuesday = page.getByTitle("tuesday");
  const friday = page.getByTitle("friday");
  const saturday = page.getByTitle("saturday");
  const tattooColor = page.getByTitle("tattooColor");
  const workAround = page.getByTitle("workAround");

  await expect(fName).toHaveId("fname");
  await expect(lName).toHaveId("lname");
  await expect(pName).toHaveId("pname");
  await expect(pronouns).toHaveId("pronouns");
  await expect(email).toHaveId("email");
  await expect(number).toHaveId("number");
  await expect(instagram).toHaveId("instagram");
  await expect(description).toHaveId("descTattoo");
  await expect(monday).toHaveId("monday");
  await expect(tuesday).toHaveId("tuesday");
  await expect(friday).toHaveId("friday");
  await expect(saturday).toHaveId("saturday");
  await expect(tattooColor).toHaveId("tattooColor");
  await expect(workAround).toHaveId("workAround");
});

test.skip("Check values stay on reload", async ({ page }) => {
  await page.goto(booking);

  const fName = page.getByTitle("first-name");
  const lName = page.getByTitle("last-name");
  const pName = page.getByTitle("preferred-name");
  const pronouns = page.getByTitle("pronouns");
  const email = page.getByTitle("email");
  const number = page.getByTitle("number");
  const instagram = page.getByTitle("instagram");
  const description = page.getByTitle("description");
  const monday = page.getByTitle("monday");
  const tuesday = page.getByTitle("tuesday");
  const friday = page.getByTitle("friday");
  const saturday = page.getByTitle("saturday");
  const tattooColor = page.getByTitle("tattooColor");
  const workAround = page.getByTitle("workAround");

  // Fill all the values
  await fName.fill("Georgia");
  await lName.fill("Test");
  await pName.fill("Georgia");
  await pronouns.selectOption("She/Her");
  await email.fill("test@test.com");
  await number.fill("0400000000");
  await instagram.fill("test_");
  await description.fill("I want this tattoo");
  await monday.click({ force: true });
  await tuesday.click({ force: true });
  await friday.click({ force: true });
  await saturday.click({ force: true });
  await tattooColor.selectOption("Black & Grey");
  await workAround.selectOption("No");

  // Refresh page and check the localStorage
  await page.goto(booking);
  await expect(fName).toHaveValue("Georgia");
  await expect(lName).toHaveValue("Test");
  await expect(pName).toHaveValue("Georgia");
  await expect(pronouns).toHaveValue("She/Her");
  await expect(email).toHaveValue("test@test.com");
  await expect(number).toHaveValue("0400000000");
  await expect(instagram).toHaveValue("@test_");
  await expect(description).toHaveValue("I want this tattoo");
  await expect(monday).toBeChecked();
  await expect(tuesday).toBeChecked();
  await expect(friday).toBeChecked();
  await expect(saturday).toBeChecked();
  await expect(tattooColor).toHaveValue("Black & Grey");
  await expect(workAround).toHaveValue("No");
});
