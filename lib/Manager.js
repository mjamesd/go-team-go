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