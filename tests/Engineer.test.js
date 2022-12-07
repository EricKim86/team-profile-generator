const Engineer = require("../lib/engineer");

describe("getGithub", () => {
  it("should return a string representation of the engineer's name provided by the user",
  () => {
    const engName = "Jason"; 
    const engineer1 = new Engineer("Jason", "1", "jason@gmail.com", "JasonGit")

    expect(engineer1.name).toEqual(engName)

  });
});

describe("getGithub", () => {
  it("should return a string representation of the engineer's employee ID provided by the user",
  () => {
    const engID = "1"; 
    const engineer1 = new Engineer("Jason", "1", "jason@gmail.com", "JasonGit")

    expect(engineer1.id).toEqual(engID)

  });
});

describe("getGithub", () => {
  it("should return a string representation of the engineer's email provided by the user",
  () => {
    const engEmail = "jason@gmail.com"; 
    const engineer1 = new Engineer("Jason", "1", "jason@gmail.com", "JasonGit")

    expect(engineer1.email).toEqual(engEmail)

  });
});


describe("getGithub", () => {
  it("should return a string representation of the engineer's GitHub username provided by the user",
  () => {
    const engGit = "JasonGit"; 
    const engineer1 = new Engineer("Jason", "1", "jason@gmail.com", "JasonGit")

    expect(engineer1.github).toEqual(engGit)

  });
});