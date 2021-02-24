    const inquirer = require('inquirer');
    const fs = require('fs');
    const path = require('path');
    const Manager = require('./lib/Manager.js');
    const Engineer = require('./lib/Engineer.js');
    const Intern = require('./lib/Intern.js');
    // const OUTPUT_DIR = path.resolve(__dirname, "output");
    // const outPutPath = path.join(OUTPUT_DIR, "team.html");
    const filePath = "./output/team.html";
    // const teamMembers = [];
    // const idArray = [];

    // const writeFileAsync = path.promisify(fs.writeFile);



function appMenu() {

// HTML templates for page
    const managerHTML = (manager) =>
`
<!doctype html>
<html lang="en">
<head>
    <title>Engeneering Team</title>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
</head>
<body class= "bg-secondary">
    <div class="jumbotron jumbotron-fluid mb-0" style="background-image: url('https://www.mybusiness.com.au/images/resize/modern-workplace-myb_fb77.jpg');">
        <div class="container">
        <h1 class="display-3" style="text-align: center;background-color: rgba(255,255,255,0.5); color: black;">${manager.name}'s Engineering Team</h1>
            <hr class="my-2">
        </div>
    </div>
    <div class="container-fluid bg-secondary mt-2 mb-2">
        <div id="cards" class="card-columns">
            <div id="manager" class="card">
            <div class="card-body badge-dark">
                    <div class="card-header bg-info">
                    <h2 class="card-text" style="text-align: center;">Manager</h5>
                    <h4 class="card-title" style="text-align: center;">Name: ${manager.name}</h4>
                    </div>
                    <div>
                        <p class="card-text">ID: ${manager.id}</p>
                        <p class="card-text">Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
                        <p class="card-text">Office Number: ${manager.officeNumber}</p>
                    </div>
                </div>
            </div>
            
`;

const engineerHTML = (engineer) =>
`
            <div id="engineer" class="card">
            <div class="card-body badge-dark">
                <div class="card-header bg-info">
                <h2 class="card-text" style="text-align: center;">Engineer</h5>
                <h4 class="card-title" style="text-align: center;">Name: ${engineer.name}</h4>
                </div>
                <div>
                    <p class="card-text">ID: ${engineer.id}</p>
                    <p class="card-text">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
                    <p class="card-text">GitHub: <a href="https://github.com/${engineer.gitHub}" target="_blank">GitHub Profile</a></p>
                </div>
            </div>
            </div>
`;

const internHTML = (intern) =>
`
            <div id="intern" class="card">
            <div class="card-body badge-dark">
                <div class="card-header bg-info">
                <h2 class="card-text" style="text-align: center;">Intern</h5>
                <h4 class="card-title" style="text-align: center;">Name: ${intern.name}</h4>
                </div>
                <div>
                    <p class="card-text">ID: ${intern.id}</p>
                    <p class="card-text">Email: <a href="mailto:${intern.email}">${intern.email}</a></p>
                    <p class="card-text">School: ${intern.school}</p>
                </div>
            </div>
            </div>
`;

const endOfHTML = () =>
    `
</div>
</div>
<!-- Optional JavaScript -->
<!-- jQuery first, then Popper.js, then Bootstrap JS -->
<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
    integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
    crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
    integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
    crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
    integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
    crossorigin="anonymous"></script>
</body>
</html>
`;

// node prompts that will be taken and input into the HTML/webpage
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
              },
            {
                type: 'input',
                name: 'managerEmail',
                message: 'Enter Manager Email:',
              },
              {
                type: 'input',
                name: 'officeNumber',
                message: 'Enter Managers office number:',
              }
        ]).then(answers => {
            console.table(answers);
            const manager = new Manager(answers.managerName, answers.managerID, answers.managerEmail, answers.officeNumber);
            fs.writeFile(filePath, managerHTML(manager), function (err, result) {
                if (err) console.log('error', err);
            });
            createTeam()
        })
    }
    function addEngineer() {
        console.log("Fill out the following form to create your team.")
        inquirer.prompt([
            {
                type: 'input',
                name: 'engineerName',
                message: 'Enter Engineer Name:',
                validate: answer => {
                    if (answer !== "") {
                        return true
                    };
                    return "please enter a name"
                }
              },
              {
                type: 'input',
                name: 'engineerID',
                message: 'Enter Engineer ID:',
              },
            {
                type: 'input',
                name: 'engineerEmail',
                message: 'Enter Engineer Email:',
              },
              {
                type: 'input',
                name: 'github',
                message: 'Enter Engineer Github username:',
              }
        ]).then(answers => {
            console.log(answers);
            const engineer = new Engineer(answers.engineerName, answers.engineerID, answers.engineerEmail, answers.github);
            fs.appendFile(filePath, engineerHTML(engineer), function (err, result) {
                if (err) console.log('error', err);
            });
            createTeam()
        })
    }
    function addIntern() {
        console.log("Fill out the following form to create your team.")
        inquirer.prompt([
            {
                type: 'input',
                name: 'internName',
                message: 'Enter Intern Name:',
                validate: answer => {
                    if (answer !== "") {
                        return true
                    };
                    return "please enter a name"
                }
              },
              {
                type: 'input',
                name: 'internID',
                message: 'Enter Intern ID:',
              },
            {
                type: 'input',
                name: 'internEmail',
                message: 'Enter Intern Email:',
              },
              {
                type: 'input',
                name: 'school',
                message: 'Enter Interns school:',
              }
        ]).then(answers => {
            const intern = new Intern(answers.internName, answers.internID, answers.internEmail, answers.school);
            fs.appendFile(filePath, internHTML(intern), function (err, result) {
                if (err) console.log('error', err);
            });
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
                    fs.appendFile(filePath, endOfHTML(), function (err, result) {
                        if (err) console.log('error', err);
                    });
            }
        })
    }
//This was code my tutor was helping me with, but it was too complicated and not what we learned in class..
    // function buildTeam() {
    //     if (!fs.existsSync(OUTPUT_DIR)) {
    //         fs.mkdirSync(OUTPUT_DIR)
    //     };
    //     console.log(teamMembers);
    //     fs.writeFileSync(outPutPath, render(teamMembers), "utf-8");
    // }

    createManager();
};

appMenu();

