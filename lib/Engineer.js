// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Author: Mark Drummond
// Date: 20-Nov-2021
// Project Title: Go, Team, Go!
// Assignment: Team Profile Generator
// See README.md for more information
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Engineer class
const Employee = require(`./Employee`)

class Engineer extends Employee {
    constructor(id, employeeName, email, github) {
        super(id, employeeName, email);
        if (!github) {
            throw new Error(`Invalid GitHub parameter`);
        }
        this._github = github;
    }

    getGitHub() {
        return this._github;
    }

    getRole() {
        return `Engineer`;
    }
}

module.exports = Engineer;