const { test, expect } = require('@playwright/test');

test.describe.parallel('Login Scenarios', () => {
    test('Valid Login', async ({ page }) => {
        await page.goto('https://ecommerce-admin.azureedge.net/login');
        await page.getByTestId('email-input').click();
        await page.getByTestId('email-input').fill('ecommerceadmin@yopmail.com');
        await page.getByTestId('password-input').fill('Test@123');
        await page.getByTestId('submit').click();
      });
      

  test('Invalid Login', async ({ page }) => {
        await page.goto('https://ecommerce-admin.azureedge.net/login');
        await page.getByTestId('email-input').click();
        await page.getByTestId('email-input').fill('ecommerceadmin@yopmail.com');
        await page.getByTestId('password-input').fill('Test123'); // Invalid password
        await page.getByTestId('submit').click();
        
      });
});
