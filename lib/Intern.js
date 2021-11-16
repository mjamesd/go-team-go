// Intern class

class Intern extends Employee {
    constructor(id, employeeName, email, school) {
        super(id, employeeName, email);
        this.school = school;
    }

    getSchool() {}

    getRole() {
        return `Intern`;
    }
}

module.exports = Intern;