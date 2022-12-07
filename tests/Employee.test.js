const Employee = require("../lib/engineer");

describe("getName", () => {
  it("should return a string representation of the associate's name provided by the user",
  () => {
    const empName1 = "Jason"; 
    const employee1 = new Employee("Jason", "1", "jason@gmail.com")

    expect(employee1.name).toEqual(empName1)

  });
});

describe("getID", () => {
  it("should return a string representation of the associate's employee ID provided by the user",
  () => {
    const empID1 = "1"; 
    const employee1 = new Employee("Jason", "1", "jason@gmail.com")

    expect(employee1.id).toEqual(empID1)

  });
});

describe("getEmail", () => {
  it("should return a string representation of the associate's email provided by the user",
  () => {
    const empEmail1 = "jason@gmail.com"; 
    const employee1 = new Employee("Jason", "1", "jason@gmail.com")

    expect(employee1.email).toEqual(empEmail1)

  });
});
