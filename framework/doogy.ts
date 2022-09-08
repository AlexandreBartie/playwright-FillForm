// example.spec.ts
import { expect, Page, Locator } from '@playwright/test';

class AssertWeb
{

  readonly page: Page;

  constructor(page: Page) 
  {
    this.page = page;
  }

  public async toHaveTitle(title : string)
  {
    return expect(this.page).toHaveTitle(title);
  }

}

export class Web //extends AssertWeb
{

  readonly page: Page;

  constructor(page: Page) 
  {
    this.page = page;
  }

  async goto(url : string)
  {
    await this.page.goto(url)
  }

  locator(mask : string) : WebElement
    { return new WebElement(this, mask)}

  async toHaveTitle(title : string)
  {
    return expect(this.page).toHaveTitle(title);
  }

}

export class WebOptions
{

  readonly web: Web;

  constructor(web: Web)
  {
    this.web = web;
  }

  async Select(mask : string, list : string[])
  {

    var locator = this.web.locator('select[name="expectation"]');

    locator.selectOption(list);

  }

}


export class WebElement
{

    readonly web: Web;

    readonly mask: string = "";

    private Locator() : Locator { return this.web.page.locator(this.mask) }

    constructor(web: Web, mask: string)
    {
      this.web = web;

      this.mask = mask;
    }

    async check()
    {
      this.Locator;
    }

    async selectOption()
    {
      this.locator.s
    }

}
/*
export class TextBox implements Element
{

    readonly page: Page;

    constructor(page: Page)
    {
      this.page = page;
    }

}
*/
