// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Author: Mark Drummond
// Date: 20-Nov-2021
// Project Title: Go, Team, Go!
// Assignment: Team Profile Generator
// See README.md for more information
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Manager class
const Employee = require('./Employee');

class Manager extends Employee {
    constructor(id, employeeName, email, officeNumber) {
        super(id, employeeName, email);
        if (!officeNumber) {
            throw new Error(`Invalid office number parameter`);
        }
        this._officeNumber = officeNumber;
    }
    
    getOfficeNumber() {
        return this._officeNumber;
    }

    getRole() {
        return `Manager`;
    }
}

module.exports = Manager;