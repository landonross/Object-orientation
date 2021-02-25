const Employee = require("../lib/Employee.js");

describe("Employee", () => {
    
        test('Has ID', () => {
            const name = "Rob Sullivan";
            const id = 50;
            const employee = new Employee(name, id);
            expect(employee.getId(id)).toBe(id);
        });
    
        test('Has email', () => {
            const name = "Rob Sullivan";
            const id = 50;
            const email = "robocop@gmail.com";
            const employee = new Employee(name, id, email);
            expect(employee.getEmail(email)).toBe(email);
        });
    
        test('Is employee', () => {
            const role = "Employee";
            const employee = new Employee()
            expect(employee.getRole()).toBe(role);
        });
});