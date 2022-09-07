import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

  // Go to https://katalon-test.s3.amazonaws.com/aut/html/form.html
  await page.goto('https://katalon-test.s3.amazonaws.com/aut/html/form.html');

  // Check text=Read books >> input[type="checkbox"]
  await page.locator('text=Read books >> input[type="checkbox"]').check();

  // Check text=Join tech cons >> input[type="checkbox"]
  await page.locator('text=Join tech cons >> input[type="checkbox"]').check();

  // Check text=Read tech blogs >> input[type="checkbox"]
  await page.locator('text=Read tech blogs >> input[type="checkbox"]').check();

  // Check text=Take online courses >> input[type="checkbox"]
  await page.locator('text=Take online courses >> input[type="checkbox"]').check();

});