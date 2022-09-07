// example.spec.ts
import { test, expect, Page } from '@playwright/test';


export class Element
{

    readonly page: Page;

    constructor(page: Page)
    {
      this.page = page;
    }

}

export class TextBox implements Element
{

    readonly page: Page;

    constructor(page: Page)
    {
      this.page = page;
    }

}

