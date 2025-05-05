const { test, expect } = require('@playwright/test');
const locators = require('../utils/locators');
const testData = require('../data/loginData.json'); // Importing test data from a JSON file

//Using Page Object Model and test data from JSON file
test('Login Test with data from JSON', async ({ page }) => {
  const { email, password } = loginData.validLogin;

  await page.goto('https://ecommerce-admin.azureedge.net/login');
  
  await page.getByTestId(locators.emailInput).click();
  await page.getByTestId(locators.emailInput).fill(email); 
  await page.getByTestId(locators.passwordInput).fill(password);
  await page.getByTestId(locators.submitButton).click(); 
  
  // Assertion: Check if the URL contains 'dashboard'
  
  await expect(page).toHaveURL(/.*dashboard/); 
  await page.getByRole('tab', { name: ' User Management' }).click();
  await page.getByLabel('User Management').getByRole('link', { name: 'Employees' }).click();
  await page.getByTestId('open-create-modal-btn').click();
  //Dropdown selection
  await page.getByTestId('employee-type-dropdown').locator('div').filter({ hasText: 'Employee Type*' }).click();
  await page.getByRole('option', { name: 'Operational Employee' }).click();
  await page.getByTestId('select-operation-type').locator('div').nth(2).click();
  await page.getByRole('listitem', { name: 'Checker' }).click();
  await page.getByTestId('first-name-input').click();
  await page.getByTestId('first-name-input').fill('Test'); //Text input
  await page.getByTestId('last-name-input').click();
  await page.getByTestId('last-name-input').fill('D');
  await page.getByTestId('email-input').click();
  await page.getByTestId('email-input').fill('testd@yopmail.com');
  await page.getByTestId('password-input').click();
  await page.getByTestId('password-input').fill('1234');
  await page.getByTestId('confirm-password-input').click();
  await page.getByTestId('confirm-password-input').fill('1234');
  await page.getByTestId('submit-button').click(); //Button click action
  await page.getByRole('cell', { name: 'Al Bustan Supermarket' }).locator('div').nth(3).click(); //checkbox selection
  await page.getByTestId('submit-button').click();

});