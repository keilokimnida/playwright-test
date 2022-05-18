import { test, expect } from '@playwright/test';
import 'dotenv/config';

const baseURL = process.env.BASE_URL;
const username = process.env.USERNAME;
const password = process.env.PASSWORD;
const billingAccNo = process.env.BILLING_ACC_NO;
const hashedPassword = process.env.HASHED_PASSWORD;

test.describe('auth.test.ts', () => {
  test('Success|Login', async ({ page }) => {
    // 1. Visit home page
    await page.goto('/');

    // 2. Click on login button
    await page.locator(".sgds-navbar-item button").click();

    // 3. Redirected to login page
    expect(page.url()).toBe(`${baseURL}/login`);

    // 4. Key in Login Credentials
    await page.fill("input[name='username']", username!);
    await page.fill("input[name='password']", password!);

    // 5. Click on login button
    await page.locator(".sgds-card button").click();

    // 6. Successfully logged in
    await expect(page.locator('header')).toHaveText('Overview');
    expect(page.url()).toBe(`${baseURL}/acc/${billingAccNo}/`);
  });

  // test.skip('Success|API Login', async ({ request, page, context }) => {
  //   // 1. Visit home page
  //   await page.goto('/');
    
  //   const response: any = await request.post(`${baseURL}/api/portal-login`, {
  //     data: {
  //       username: username,
  //       password: hashedPassword
  //     }
  //   });

  //   expect(response.ok()).toBeTruthy();
  //   const res = await response.json();
  //   const token = res.message.token;

  //   await page.pause();
  // });
});