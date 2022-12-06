const inquirer = require("inquirer")
const fs = require("fs")
const Employee = require('./lib/Employee')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
const Manager = require('./lib/Manager')

// const managerQuestions;

// const engineerQuestions;

// const internQuestions;


inquirer
    .prompt([
        {
            type: 'input',
            message: `What is the employee's name?`,
            name: 'name',
        },
        {
            type: 'input',
            message: `What is the employee's id?`,
            name: 'id',
        },
        {
            type: 'input',
            message: `What is the employee's email?`,
            name: 'email',
        },
        {
            type: 'input',
            message: `What is the Manager's office number?`,
            name: 'officeNumber',
        },
        {
            type: 'input',
            message: `What is the employee's GitHub username?`,
            name: 'username',
        },
        {
            type: 'input',
            message: `What is the Intern's school?`,
            name: 'school',
        },
        {
            type: 'list',
            message: `Do you want to add another associate?`,
            name: 'associate',
            choices: ['Employee', 'Engineer', 'Intern']
        },
    ])

    .then((response) => {
        let EmployeeText = Employee(response);
        fs.writeFile('index.html', EmployeeText, (err) =>
            err ? console.error(err) : console.log('Success!')
        );
    })
