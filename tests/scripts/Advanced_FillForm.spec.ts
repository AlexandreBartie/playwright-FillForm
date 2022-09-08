// example.spec.ts
import { test, expect } from '@playwright/test';
import { FillForm } from '../classes/Classic_PageFillForm';

test('Fill Form using Page Framework', async ({ page }) => {

  const Page = new FillForm(page);
  
  await ActFillForm(Page);

  await AssertFillForm(Page);

});

async function ActFillForm (Page : FillForm)
{

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

  await Page.expectation.select(['Salary', 'Teamwork']);

  await Page.development.select(['Courses', 'OpenSource', 'TechBlogs', 'Discovery']);

  await Page.comment.fill('Please, call me in the morning. I get out my house after 1pm');

  await Page.submit.click();

}


async function AssertFillForm (Page : FillForm)
{

  await expect(Page.message).toBeVisible;
  await expect(Page.message).toHaveText('Successfully submitted!');

}
