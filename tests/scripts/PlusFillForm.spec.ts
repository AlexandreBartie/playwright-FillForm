// example.spec.ts
import { test, expect } from '@playwright/test';
import { FillForm } from '../classes/classPageFillForm';

test('fill all informations', async ({ page }) => {

  const Page = new FillForm(page);
  
  await Page.View();

  await Page.firstName.fill('ALEXANDRE');

  await Page.lastName.fill('BARTIE');

  await Page.gender.select('Male');

  await Page.dob.press(String.fromCharCode(13));

  await Page.dob.fill('06-05-1971');

  await Page.address.fill('R. Purus, 165, Centro, Diadema, SP, Brazil');

  await Page.email.fill('bartie.devops@outlook.com');

  await Page.password.fill('devops2022');

  await Page.company.fill('YDUQS EDUCACAO');

  await Page.expectation.select(['High salary', 'Good teamwork']);

  await Page.development.select(['Read books', 'Join tech cons']);

  await Page.comment.fill('DSDFSA');

  await Page.submit.click();

  await expect(Page.message).toBeVisible;
  await expect(Page.message).toHaveText('Successfully submitted!');

});
