const { test, expect } = require('@playwright/test');
const locators = require('./locators');
const loginData = require('./loginData.json');
const { faker } = require('@faker-js/faker'); // Import Faker

test('Login and Create Employee with Faker Data', async ({ page }) => {
  const { email, password } = loginData.validLogin;

  // Generate dynamic data
  const firstName = faker.person.firstName();
  const lastName = faker.person.lastName();
  const randomEmail = faker.internet.email(firstName, lastName);
  const employeePassword = '1234'; 

  await page.goto('https://ecommerce-admin.azureedge.net/login');

  // Login steps
  await page.getByTestId(locators.emailInput).fill(email);
  await page.getByTestId(locators.passwordInput).fill(password);
  await page.getByTestId(locators.submitButton).click();

  await expect(page).toHaveURL(/.*dashboard/);

  // Navigate to Employee creation
  await page.getByRole('tab', { name: ' User Management' }).click();
  await page.getByLabel('User Management').getByRole('link', { name: 'Employees' }).click();
  await page.getByTestId('open-create-modal-btn').click();

  // Fill employee form with random data
  await page.getByTestId('employee-type-dropdown').locator('div').filter({ hasText: 'Employee Type*' }).click();
  await page.getByRole('option', { name: 'Operational Employee' }).click();
  await page.getByTestId('select-operation-type').locator('div').nth(2).click();
  await page.getByRole('listitem', { name: 'Checker' }).click();

  await page.getByTestId('first-name-input').fill(firstName);
  await page.getByTestId('last-name-input').fill(lastName);
  await page.getByTestId('email-input').fill(randomEmail);
  await page.getByTestId('password-input').fill(employeePassword);
  await page.getByTestId('confirm-password-input').fill(employeePassword);

  await page.getByTestId('submit-button').click();
  await page.getByRole('cell', { name: 'Al Bustan Supermarket' }).locator('div').nth(3).click();
  await page.getByTestId('submit-button').click();
});
