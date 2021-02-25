const Employee = require("../lib/Employee");
const Manager = require('../lib/Manager');

describe("Manager", () => {
    describe("Employee", () => {
        
        test('Has ID', () => {
            const name = "Rob Sullivan";
            const id = 50;
            const employee = new Employee(name, id);
            expect(employee.id).toBe(id);

        });

        test('Has email', () => {
            const name = "Rob Sullivan";
            const id = 50;
            const email = "robocop@gmail.com";
            const employee = new Employee(name, id, email);
            expect(employee.getEmail(email)).toBe(email);
        });

    });


    test('Is an Manager', () => {
        const role = "Manager";
        const manager = new Manager()
        expect(manager.getRole()).toBe(role);
    });

    test('Has office number', () => {
        const name = "Rob Sullivan";
        const id = 50;
        const email = "robocop@gmail.com";
        const office = "1600"
        const manager = new Manager(name, id, email, office)
        expect(manager.getOfficeNumber(office)).toBe(office);
    })
});