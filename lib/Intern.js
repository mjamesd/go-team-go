// Intern class
const Employee = require('./Employee');

class Intern extends Employee {
    constructor(id, employeeName, email, school) {
        super(id, employeeName, email);
        if (!school) {
            throw new Error(`Invalid school parameter`);
        }
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