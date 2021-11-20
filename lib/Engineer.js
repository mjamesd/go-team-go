// Engineer class
const Employee = require(`./Employee`)

class Engineer extends Employee {
    constructor(id, employeeName, email, github) {
        if (!github) {
            throw new Error(`Invalid parameters`);
        }
        super(id, employeeName, email);
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