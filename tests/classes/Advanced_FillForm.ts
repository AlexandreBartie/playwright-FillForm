// playwright-dev-web.ts
import { Web, WebOptions, WebElement } from '../../framework/doogy'

export class FillForm
{
  readonly web: Web;
     
  readonly firstName: WebElement;
  readonly lastName: WebElement;
  readonly gender: Gender;
  readonly dob: WebElement;

  readonly address: WebElement;
  readonly email: WebElement;
  readonly password: WebElement;

  readonly company: WebElement;
  readonly role: WebElement;

  readonly expectation: JobExpectation;
  readonly development: WaysDevelopment;
  readonly comment: WebElement;

  readonly submit: WebElement;
  readonly message: WebElement;

  constructor(web: Web)
  {

    this.web = web;

    this.gender = new Gender(web);
    this.expectation = new JobExpectation(web);
    this.development = new WaysDevelopment(web);

    this.firstName = web.locator('input[name="firstName"]');
    this.lastName = web.locator('input[name="lastName"]');

    this.dob = web.locator('input[name="dob"]');

    this.address = web.locator('input[name="address"]');
    this.email = web.locator('input[name="email"]');
    this.password = web.locator('input[name="password"]');

    this.company = web.locator('input[name="company"]');  
    this.role = web.locator('input[name="role"]');

    this.comment = web.locator('textarea[name="comment"]');

    this.submit = web.locator('button:has-text("Submit")');
    this.message = web.locator('text=Successfully submitted!');

  }

  async View() 
  {
    await this.web.goto('https://katalon-test.s3.amazonaws.com/aut/html/form.html');
    
    await this.web.toHaveTitle('/Demo AUT/');
  }  

}

class Gender extends WebOptions
{
  
  readonly male: WebElement = this.web.locator('text=Male >> nth=0');
  readonly female: WebElement = this.web.locator('text=Female >> input[name="gender"]');
  readonly between: WebElement = this.web.locator('text=In Between  >> input[name="gender"]'); 
  
  constructor(web: Web)
  {
    super(web); 
  }

  async select(gender: string)
  {
 
    switch (gender)
    {
      case 'Male':
        await this.male.check();
        break;

      case 'Female':
        await this.female.check();
        break;

      case 'Between':
        await this.between.check();
        break;

    }

  }

}

class JobExpectation extends WebOptions
{
  
  constructor(web: Web)
  {
    super(web);
  }

  async select(list: string[])
  {
    
    var options = this.getOptions(list);

    //var locator = this.web.locator('select[name="expectation"]');

    //locator.selectOption(options);
    
    super.Select('select[name="expectation"]', options)

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

class WaysDevelopment extends WebOptions
{
  constructor(web: Web)
  {
    super(web);
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
    
    await this.web.locator(selector).check();
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

