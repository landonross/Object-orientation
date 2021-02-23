const Employee = require("../index.js");

describe("Employee class", () => {
  it("When the name is entered, it will save it for the page", () => {
    const employee = new Employee();
      const example = "Landon";
      expect(employee.employeeName(example)).toBe(example);
    });
  });