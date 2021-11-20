// Intern class
const Employee = require('./Employee');

class Intern extends Employee {
    constructor(id, employeeName, email, school) {
        if (!school) {
            throw new Error(`Invalid parameters`);
        }
        super(id, employeeName, email);
        this._school = school;
    }

    getSchool() {
        return this._school;
    }

    getRole() {
        return `Intern`;
    }
}

module.exports = Intern;