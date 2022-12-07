const Intern = require("../lib/intern");

describe("getSchool", () => {
  it("should return a string representation of the Intern's name provided by the user",
  () => {
    const intName = "Jason"; 
    const intern1 = new Intern("Jason", "1", "jason@gmail.com", "UVA")

    expect(intern1.name).toEqual(intName)

  });
});

describe("getSchool", () => {
  it("should return a string representation of the Intern's employee ID provided by the user",
  () => {
    const intID = "1"; 
    const intern1 = new Intern("Jason", "1", "jason@gmail.com", "UVA")

    expect(intern1.id).toEqual(intID)

  });
});

describe("getSchool", () => {
  it("should return a string representation of the Intern's email provided by the user",
  () => {
    const intEmail = "jason@gmail.com"; 
    const intern1 = new Intern("Jason", "1", "jason@gmail.com", "UVA")

    expect(intern1.email).toEqual(intEmail)

  });
});

describe("getSchool", () => {
  it("should return a string representation of the Intern's school provided by the user",
  () => {
    const intSchool = "UVA"; 
    const intern1 = new Intern("Jason", "1", "jason@gmail.com", "UVA")

    expect(intern1.school).toEqual(intSchool)

  });
});