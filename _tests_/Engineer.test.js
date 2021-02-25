const Employee = require("../lib/Employee");
const Engineer = require('../lib/Engineer');

describe("Engineer", () => {
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

    test('Is an Engineer', () => {
        const role = "Engineer";
        const engineer = new Engineer()
        expect(engineer.getRole()).toBe(role);
    });

    test('Has GitHub URL', () => {
        const name = "Rob Sullivan";
        const id = 50;
        const email = "robocop@gmail.com";
        const gitHub = "http://github.com/RobSullivan"
        const engineer = new Engineer(name, id, email, gitHub)
        expect(engineer.getGithub(gitHub)).toBe(gitHub);
    })
});