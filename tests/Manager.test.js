const Manager = require("../lib/manager");

describe("getName", () => {
    it("should return a string representation of the manager's name provided by the user",
    () => {
      const mgrName = "Jason"; 
      const manager1 = new Manager("Jason", "1", "jason@gmail.com", "1")
  
      expect(manager1.name).toEqual(mgrName)
  
    });
  });
  
  describe("getID", () => {
    it("should return a string representation of the manager's employee ID provided by the user",
    () => {
      const mgrID = "1"; 
      const manager1 = new Manager("Jason", "1", "jason@gmail.com", "1")
  
      expect(manager1.id).toEqual(mgrID)
  
    });
  });
  
  describe("getEmail", () => {
    it("should return a string representation of the manager's email provided by the user",
    () => {
      const mgrEmail = "jason@gmail.com"; 
      const manager1 = new Manager("Jason", "1", "jason@gmail.com", "1")
  
      expect(manager1.email).toEqual(mgrEmail)
  
    });
  });


describe("getOfficeNumber", () => {
  it("should return a string representation of the manager's officer number provided by the user",
  () => {
    const mgrON = "1"; 
    const manager1 = new Manager("Jason", "1", "jason@gmail.com", "1")

    expect(manager1.officeNumber).toEqual(mgrON)

  });
});
