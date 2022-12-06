const inquirer = require("inquirer")
const fs = require("fs")
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
const Manager = require('./lib/Manager')

const teamRoster = [];

const promptManager = () => {
    return inquirer.prompt([
        {
            type: 'input',
            message: `What is the Managers's name?`,
            name: 'name',
        },
        {
            type: 'input',
            message: `What is the Managers's id?`,
            name: 'id',
        },
        {
            type: 'input',
            message: `What is the Managers's email?`,
            name: 'email',
        },
        {
            type: 'input',
            message: `What is the Manager's office number?`,
            name: 'officeNumber',
        },
    ])
        .then(response => {
            console.log(response);
            const manager = new Manager(response.name, response.id, response.email, response.officeNumber)
            teamRoster.push(manager);
            promptSelection();
        })
};

const promptSelection = () => {
    return inquirer.prompt([
        {
            type: 'list',
            message: `Do you want to add a team member?`,
            name: 'selection',
            choices: ['Engineer', 'Intern', 'I do not have any other team members to add']
        },
    ])
        .then(choice => {
            switch (choice.selection) {
                case "Engineer":
                    promptEngineer();
                    break;
                case "Intern":
                    promptIntern();
                    break;
                default:
                    outputTeam();
            }
        });
};

const promptEngineer = () => {
    return inquirer.prompt([
        {
            type: 'input',
            message: `What is the Engineer's name?`,
            name: 'name',
        },
        {
            type: 'input',
            message: `What is the Engineer's id?`,
            name: 'id',
        },
        {
            type: 'input',
            message: `What is the Engineer's email?`,
            name: 'email',
        },
        {
            type: 'input',
            message: `What is the Engineer's GitHub username?`,
            name: 'github',
        },
    ])
        .then(response => {
            console.log(response);
            const engineer = new Engineer(response.name, response.id, response.email, response.github)
            teamRoster.push(engineer);
            promptSelection();
        })
};

const promptIntern = () => {
    return inquirer.prompt([
        {
            type: 'input',
            message: `What is the Intern's name?`,
            name: 'name',
        },
        {
            type: 'input',
            message: `What is the Intern's id?`,
            name: 'id',
        },
        {
            type: 'input',
            message: `What is the Intern's email?`,
            name: 'email',
        },
        {
            type: 'input',
            message: `What school did the Intern attend?`,
            name: 'school',
        },
    ])
        .then(response => {
            console.log(response);
            const intern = new Intern(response.name, response.id, response.email, response.school)
            teamRoster.push(intern);
            promptSelection();
        })
};


const outputTeam = () => {
fs.writeFileSync(outputPath, generatePage(teamRoster), "utf-8");

}

promptManager();