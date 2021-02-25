const Employee = require('../lib/Employee');
const Intern = require('../lib/Intern');

describe("Intern", () => {
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

    test('Is an Intern', () => {
        const role = "Intern";
        const intern = new Intern()
        expect(intern.getRole()).toBe(role);
    });

    test('Has school name', () => {
        const name = "Rob Sullivan";
        const id = 50;
        const email = "robocop@gmail.com";
        const school = "University of Utah"
        const intern = new Intern(name, id, email, school)
        expect(intern.getSchool(school)).toBe(school);
    })
});