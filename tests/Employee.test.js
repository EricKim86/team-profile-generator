const Employee = require("../lib/employee");

describe("getName", () => {
  it("should return a string representation of the associate's name provided by the user",
  () => {
    const empName = "Jason"; 
    const employee1 = new Employee("Jason", "1", "jason@gmail.com")

    expect(employee1.name).toEqual(empName)

  });
});

describe("getID", () => {
  it("should return a string representation of the associate's employee ID provided by the user",
  () => {
    const empID = "1"; 
    const employee1 = new Employee("Jason", "1", "jason@gmail.com")

    expect(employee1.id).toEqual(empID)

  });
});

describe("getEmail", () => {
  it("should return a string representation of the associate's email provided by the user",
  () => {
    const empEmail = "jason@gmail.com"; 
    const employee1 = new Employee("Jason", "1", "jason@gmail.com")

    expect(employee1.email).toEqual(empEmail)

  });
});
