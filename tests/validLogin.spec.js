const { test, expect } = require('@playwright/test');
const locators = require('../utils/locators');
const testData = require('../data/loginData.json'); // Importing test data from a JSON file

//Using Page Object Model and test data from JSON file
test('@regression Login Test with data from JSON', async ({ page }) => {
  const { email, password } = testData.validLogin;

  await page.goto('https://ecommerce-admin.azureedge.net/login');
  
  await page.getByTestId(locators.emailInput).fill(email);
  await page.getByTestId(locators.passwordInput).fill(password);
  await page.getByTestId(locators.submitButton).click();
  

  await page.waitForTimeout(5000);
  console.log('URL after login:', await page.url());
  await page.screenshot({ path: 'loginResult.png', fullPage: true });

// Assertion - Verify that the URL contains 'dashboard' after login
  await expect(page).toHaveURL(/.*dashboard.*/); 
});
