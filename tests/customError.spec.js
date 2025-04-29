const { chromium } = require('playwright'); // Importing Playwright's chromium module
const { test, expect } = require('@playwright/test');

test('Login Test with All Error Reporting', async ({ page }) => {
  const errors = [];

  await page.goto('https://ecommerce-admin.azureedge.net/login');

  // Email input
  try {
    await page.getByTestId('email-input').click();
    await page.getByTestId('email-iput').fill('ecommerceadmin@yopmail.com');
  } catch (err) {
    errors.push('❌ Failed to interact with the Email input field');
  }

  // Password input
  try {
    await page.getByTestId('password-iput').fill('Test@123');
  } catch (err) {
    errors.push('❌ Failed to fill in the Password field');
  }

  // Submit button
  try {
    await page.getByTestId('submt').click();
  } catch (err) {
    errors.push('❌ Failed to click the Submit button');
  }

  // URL assertion
  try {
    await expect(page).toHaveURL(/.*dashboard/);
  } catch (err) {
    errors.push('❌ Login failed: Did not redirect to dashboard');
  }

  // Final check
  if (errors.length > 0) {
    throw new Error('Test Failed:\n' + errors.join('\n'));
  }
});
