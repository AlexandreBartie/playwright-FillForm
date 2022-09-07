
class TestFactory
{

    readonly key: FillForm;

    readonly Tests = new Set<TestCase>()

    constructor(key: FillForm)
    {
      this.key = key;
    }

    Add(name: string, data: {})
    {
      this.Tests.add ( new TestCase(name, data))
   }

}

class TestCase
{

    readonly name: string;

    readonly flow: FillForm;

    constructor(name: string, data: {})
    {
      
      this.name = name;

      this.flow = new FillForm(data)

    }

}


class FillForm
{
    firstName: string = "ALEXANDRE";
    lastName: string = "BARTIE";
    gender: string = "Male";
    dob: string = "06-05-1971";
    address: string = "R. Purus, 165, Centro, Diadema, SP, Brazil";
    email: string = "bartie.devops@outlook.com";
    password: string = "devops2022";
    company: string = "YDUQS EDUCATION";
    role: string = "QA";
    expectation: string = "['High salary', 'Good teamwork']";
    development: string = "['Read books', 'Join tech cons']";
    comment: string = "All right!";
    submit: string = "";
    message: string = "Successfully submitted!";

    constructor(data: {})
    {
      
      //this = {}

    }

}

