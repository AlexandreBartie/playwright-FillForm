import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

  // Go to https://katalon-test.s3.amazonaws.com/aut/html/form.html
  await page.goto('https://katalon-test.s3.amazonaws.com/aut/html/form.html');

});