// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Author: Mark Drummond
// Date: 20-Nov-2021
// Project Title: Go, Team, Go!
// Assignment: Team Profile Generator
// See README.md for more information
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// REQUIRES
const Employee = require(`./lib/Employee`);
const Engineer = require(`./lib/Engineer`);
const Intern = require(`./lib/Intern`);
const Manager = require(`./lib/Manager`);
const { renderHtml } = require(`./lib/scripts`);
const inquirer = require(`./node_modules/inquirer`);
// Add `loop` type to Inquirer
inquirer.registerPrompt(`recursive`, require(`inquirer-recursive`));
const chalk = require(`./node_modules/chalk`);
const fs = require(`fs`);

// Inquirer questions
// There is a bug in inquirer-recursive so that you can`t make other types of questions after you ask a recursive one
let employeeTypes = [`Engineer`,`Intern`,`Other`];

const managerQuestions = [
    {
        name: `managerId`,
        type: `number`,
        message: `What is the manager's employee ID number?`
    },
    {
        name: `managerName`,
        type: `input`,
        message: `What is the manager's name?`
    },
    {
        name: `managerEmail`,
        type: `input`,
        message: `What is the manager's email address?`
    },
    {
        name: `managerOfficeNumber`,
        type: `number`,
        message: `What is the manager's office number?`
    },
    
];

const employeeQuestions = [
    {
        name: `anotherEmployee`,
        type: `recursive`,
        message: `Would you like to add another employee?`,
        prompts: [
        {
            name: `employeeType`,
            type: `list`,
            message: `What type of employee would you like to add?`,
            choices: employeeTypes,
            loop: false
        },
        {
            name: `employeeId`,
            type: `number`,
            message: `What is the employee's employee ID number?`
            
        },
        {
            name: `employeeName`,
            type: `input`,
            message: `What is the employee's name?`
        },
        {
            name: `employeeEmail`,
            type: `input`,
            message: `What is the employee's email address?`
        },
        {
            name: `employeeGitHub`,
            type: `input`,
            message: `What is the Engineer's GitHub profile name?`,
            when: (curAnswers) => curAnswers.employeeType === `Engineer`
        },
        {
            name: `employeeSchool`,
            type: `input`,
            message: `What is the Intern's school name?`,
            when: (curAnswers) => curAnswers.employeeType === `Intern`
        }
    ]}
];

// 1. Print welcome message.
console.info(chalk.bold.yellow.bgGreen(`  ~*~ WELCOME  Go, Team, Go!  WELCOME ~*~  `));
console.info(chalk.italic(`Add employees to make a team roster webpage. You can edit it later, just use this to make the initial structure of the file.`));

// 2. Declare allStaff variable as an array. We will fill this array with objects.
let allStaff = [];

// 3. Run inquirer questions. Manager questions first, then for each employee.
console.log(chalk.bold.bgCyanBright(`  Enter the manager's information first:  `));
inquirer
    .prompt(managerQuestions)
    .then((managerAnswers) => {
        const manager = new Manager(managerAnswers.managerId, managerAnswers.managerName, managerAnswers.managerEmail, managerAnswers.managerOfficeNumber);
        allStaff.push(manager);
        inquirer
            .prompt(employeeQuestions)
            .then((employeeAnswers) => {
                employeeAnswers.anotherEmployee.forEach(employee => {
                    if (employee.employeeType === `Engineer`) {
                        allStaff.push(new Engineer(employee.employeeId, employee.employeeName, employee.employeeEmail, employee.employeeGitHub));
                    } else if (employee.employeeType === `Intern`) {
                        allStaff.push(new Intern(employee.employeeId, employee.employeeName, employee.employeeEmail, employee.employeeSchool));
                    } else {
                        allStaff.push(new Employee(employee.employeeId, employee.employeeName, employee.employeeEmail));
                    }
                });
                // 4. Render cards
                // console.log(allStaff);
                const cards = renderHtml(allStaff);
            });
    }
);