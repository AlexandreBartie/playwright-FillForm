// playwright-dev-page.ts
import { expect, Locator, Page } from '@playwright/test';

export class FillForm
{
  readonly page: Page;
  
  readonly firstName: Locator;
  readonly lastName: Locator;
  readonly gender: Gender;
  readonly dob: Locator;

  readonly address: Locator;
  readonly email: Locator;
  readonly password: Locator;

  readonly company: Locator;
  readonly role: Locator;

  readonly expectation: JobExpectation;
  readonly development: WaysDevelopment;
  readonly comment: Locator;

  readonly submit: Locator;
  readonly message: Locator;

  constructor(page: Page)
  {

    this.page = page;

    this.gender = new Gender(page);
    this.expectation = new JobExpectation(page);
    this.development = new WaysDevelopment(page);

    this.firstName = page.locator('input[name="firstName"]');
    this.lastName = page.locator('input[name="lastName"]');

    this.dob = page.locator('input[name="dob"]');

    this.address = page.locator('input[name="address"]');
    this.email = page.locator('input[name="email"]');
    this.password = page.locator('input[name="password"]');

    this.company = page.locator('input[name="company"]');  
    this.role = page.locator('input[name="role"]');

    this.comment = page.locator('textarea[name="comment"]');

    this.submit = page.locator('button:has-text("Submit")');
    this.message = page.locator('text=Successfully submitted!');

  }

  async View() 
  {
    await this.page.goto('https://katalon-test.s3.amazonaws.com/aut/html/form.html');
    
    await expect(this.page).toHaveTitle(/Demo AUT/);
  }  

}

class Gender
{

  readonly page: Page;

  constructor(page: Page)
  {
    this.page = page;
  }

  async select(gender: string)
  {
 
    switch (gender)
    {
      case 'Male':
        await this.page.locator('text=Male >> nth=0').check();
        break;

      case 'Female':
        await this.page.locator('text=Female >> input[name="gender"]').check();
        break;

      case 'Between':
        await this.page.locator('text=In Between >> input[name="gender"]').check();
        break;

    }

  }

}

class JobExpectation
{
  readonly page: Page;

  constructor(page: Page)
  {
    this.page = page;
  }

  async select(list: string[])
  {
    
    var locator = this.page.locator('select[name="expectation"]');

    var options = this.getOptions(list);

    locator.selectOption(options);

  }

  private getOptions(list: string[]) : string[]
  {
    
    var ret : string[] = [];
    
    for (var item of list)
    { 

      switch (item.toLowerCase())
      {
        case 'salary':
          ret.push('High salary');
          break;

        case 'leader':
          ret.push('Nice manager/leader');
          break;

        case 'colleagues':
          ret.push('Excellent colleagues');
          break;

        case 'teamwork':
          ret.push('Good teamwork');
          break;

        case 'onsite':
          ret.push('Chance to go onsite');
          break;

        case 'challenge':
          ret.push('Challenging');
          break;

      }

    }
    
    return ret;

  }

}

class WaysDevelopment
{
  readonly page: Page;

  constructor(page: Page)
  {
    this.page = page;
  }

  async select(list: string[])
  {
    for (var item of list)
      await this.click(item);
  }

  async click(expectation: string)
  {
    
    var tag : string = "";

    switch (expectation.toLowerCase())
    {
      case 'books':
        tag = 'Read books';
        break;

      case 'courses':
        tag = 'Take online courses';
        break;

      case 'opensource':
        tag = 'Contribute to opensource projects';
        break;

      case 'techcons':
        tag = 'Join tech cons';
        break;

      case 'techblogs':
        tag = 'Read tech blogs';
        break;

      case 'discovery':
        tag = 'Via discovery and experiment';
        break;

    }
    
    var selector = 'text=' + tag + ' >> input[type="checkbox"]';
    
    await this.page.locator(selector).check();
  }

}

export class Options
{
  readonly list: Option[];

  constructor(list: Option[])
  {
    this.list = list;
  }

  Get(tag: string): string
  {
    this.list.forEach(function (item : Option) 
    {
      if (item.IsMatch(tag))
        return item.text;
    }); 
    return ''
  }
}

export class Option
{
  readonly tag: string;
  readonly text: string;

  constructor(tag: string, text: string)
  {
    this.tag = tag;
    this.text = text;
  }

  IsMatch(tag: string): boolean { return this.tag.includes(tag) }

}
