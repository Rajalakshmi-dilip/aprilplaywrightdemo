const { chromium } = require('playwright'); // Importing Playwright's chromium module
const { test, expect } = require('@playwright/test');
// Using Codegen to generate the test code
test('test', async ({ page }) => {
  await page.goto('https://ecommerce-admin.azureedge.net/login');
  await page.getByTestId('email-input').click();
  await page.getByTestId('email-input').fill('ecommerceadmin@yopmail.com');
  await page.getByTestId('password-input').fill('Test@123');
  await page.getByTestId('submit').click();
});