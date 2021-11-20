// Manager class
const Employee = require('./Employee');

class Manager extends Employee {
    constructor(id, employeeName, email, officeNumber) {
        if (!officeNumber) {
            throw new Error(`Invalid parameters`);
        }
        super(id, employeeName, email);
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