const { test, expect } = require('@playwright/test');
const locators = require('./locators');
const testData = require('./loginData.json');

test('@regression Invalid Login - Wrong Credentials', async ({ page }) => {
  const { email, password } = testData.invalidLogin;

  await page.goto('https://ecommerce-admin.azureedge.net/login');
  await page.getByTestId(locators.emailInput).fill(email);
  await page.getByTestId(locators.passwordInput).fill(password);
  await page.getByTestId(locators.submitButton).click();

  // Assertion: Error message should be visible
  const toast = page.locator('text="Invalid User ID."');
  await expect(toast).toBeVisible();
});
