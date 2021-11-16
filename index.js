// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Author: Mark Drummond
// Date: 20-Nov-2021
// Assignment: Team Profile Generator
// See README.md for more information
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// INCLUDES
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const scripts = require('./lib/scripts');
const inquirer = require('./node_modules/inquirer');
// Add 'loop' type to Inquirer
inquirer.registerPrompt('recursive', require('inquirer-recursive'));
const chalk = require('./node_modules/chalk');
const fs = require('fs');

// Inquirer questions
// There is a bug in inquirer-recursive so that you can't make other types of questions after you ask a recursive one
const questions = [
    {
        type: list,
        name: employeeType,
        message: `What type of employee would you like to add?`,
        choices: [`Engineer`,`Intern`,`Manager`,`Other`],
        loop: true
    },
];