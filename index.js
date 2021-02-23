    const inquirer = require('inquirer');
    const fs = require('fs');
    const path = require('path');
    const Manager = require('./lib/Manager.js');
    const Engineer = require('./lib/Engineer.js');
    const Intern = require('./lib/Intern.js');
    const OUTPUT_DIR = path.resolve(__dirname, "output");
    const outPutPath = path.join(OUTPUT_DIR, "team.html");
    const render = require('./src/pageTemplate.js');
    const teamMembers = [];
    const idArray = [];

    // const writeFileAsync = path.promisify(fs.writeFile);



function appMenu() {


    function createManager() {
        console.log("Fill out the following form to create your team.")
        inquirer.prompt([
            {
                type: 'input',
                name: 'managerName',
                message: 'Enter Manager Name:',
                validate: answer => {
                    if (answer !== "") {
                        return true
                    };
                    return "please enter a name"
                }
              },
              {
                type: 'input',
                name: 'managerID',
                message: 'Enter Manager ID:',
                // validate: answer => {
                //     if (answer !== "") {
                //         return true
                //     };
                //     return "please enter a name"
                // }
              },
            {
                type: 'input',
                name: 'managerEmail',
                message: 'Enter Manager Email:',
                // validate: answer => {
                //     if (answer !== "") {
                //         return true
                //     };
                //     return "please enter a name"
                // }
              },
              {
                type: 'input',
                name: 'officeNumber',
                message: 'Enter Managers office number:',
              }
        ]).then(answers => {
            console.log(answers);
            const manager = new Manager(answers.managerName, answers.managerID, answers.managerEmail, answers.officeNumber);
            teamMembers.push(manager);
            idArray.push(answers.managerID);
            createTeam()
        })
    }
    function createTeam() {
        inquirer.prompt([
            {
                type: 'list',
                name: 'memberChoice',
                choices: ["Engineer", "Intern", "I don't want to add any more team members"],
                message: 'What type of Team Member would you like to add?'
            }
        ]).then(userChoice => {
            switch (userChoice.memberChoice) {
                case "Engineer":
                    addEngineer();
                break;
                case "Intern":
                    addIntern();
                break;
                default:
                    buildTeam();
            }
        })
    }

    function buildTeam() {
        if (!fs.existsSync(OUTPUT_DIR)) {
            fs.mkdirSync(OUTPUT_DIR)
        };
        fs.writeFileSync(outPutPath, render(teamMembers), "utf-8");
    }

    createManager()
};

appMenu();