const { test, expect } = require('@playwright/test');
const locators = require('./locators');
const testData = require('./loginData.json'); // Importing test data from a JSON file

//Using Page Object Model and test data from JSON file
test('@regression Login Test with data from JSON', async ({ page }) => {
  const { email, password } = testData.validLogin;

  await page.goto('https://ecommerce-admin.azureedge.net/login');
  
  await page.getByTestId(locators.emailInput).click();
  await page.getByTestId(locators.emailInput).fill(email);
  await page.getByTestId(locators.passwordInput).fill(password);
  await page.getByTestId(locators.submitButton).click();
  // Assertion: Check if the URL contains 'dashboard'
  
  await expect(page).toHaveURL(/.*dashboard/); 
  await page.waitForTimeout(3000);

});

