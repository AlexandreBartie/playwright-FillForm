import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => 
{
  await page.goto('https://katalon-test.s3.amazonaws.com/aut/html/form.html');
});  

test('homepage has Playwright in title and get started link linking to the intro page', async ({ page }) => 
{ 
  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Demo AUT/);

  // Fill input[name="firstName"]
  await page.locator('input[name="firstName"]').fill('ALEXANDRE');

  // Fill input[name="lastName"]
  await page.locator('input[name="lastName"]').fill('BARTIE');

  // Check text=Female >> input[name="gender"]
  await page.locator('text=Female >> input[name="gender"]').check();

  // Check text=In Between >> input[name="gender"]
  await page.locator('text=In Between >> input[name="gender"]').check();

  // Check text=Male >> input[name="gender"]
  await page.locator('text=Male >> nth=0').check();

  // Select input[name="dob"]
  await page.locator('input[name="dob"]').click()

   // Select input[name="dob"]
   await page.locator('input[name="address"]').click()
  
  // Fill input[name="dob"]
  await page.locator('input[name="dob"]').fill('06-05-1971');

  // Fill input[name="address"]
  await page.locator('input[name="address"]').fill('R. Purus, 165, Centro, Diadema, SP, Brazil');

  // Fill input[name="email"]
  await page.locator('input[name="email"]').fill('bartie.devops@outlook.com');

  // Fill input[name="password"]
  await page.locator('input[name="password"]').fill('devops2022');

  // Fill input[name="company"]
  await page.locator('input[name="company"]').fill('YDUQS EDUCACAO');

  // Select QA
  await page.locator('select[name="role"]').selectOption('QA');

  // Click select[name="expectation"]
  await page.locator('select[name="expectation"]').click();

  // Check text=Read books >> input[type="checkbox"]
  await page.locator('text=Read books >> input[type="checkbox"]').check();

  // Check text=Take online courses >> input[type="checkbox"]
  await page.locator('text=Take online courses >> input[type="checkbox"]').check();

  // Check text=Contribute to opensource projects >> input[type="checkbox"]
  await page.locator('text=Contribute to opensource projects >> input[type="checkbox"]').check();

  // Click text=Join tech cons
  await page.locator('text=Join tech cons').click();

  // Check text=Read tech blogs >> input[type="checkbox"]
  await page.locator('text=Read tech blogs >> input[type="checkbox"]').check();

  // Click text=Via discovery and experiment
  await page.locator('text=Via discovery and experiment').click();

  // Click textarea[name="comment"]
  await page.locator('textarea[name="comment"]').click();

  // Fill textarea[name="comment"]
  await page.locator('textarea[name="comment"]').fill('DSDFSA');

  // Click button:has-text("Submit")
  await page.locator('button:has-text("Submit")').click();

  // Click text=Successfully submitted!
  await page.locator('text=Successfully submitted!').click();

  // Double click text=Successfully submitted!
  await page.locator('text=Successfully submitted!').dblclick();

});
