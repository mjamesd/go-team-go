// Engineer class

class Engineer extends Employee {
    constructor(id, employeeName, email, github) {
        super(id, employeeName, email);
        this.github = github;
    }

    getGithub() {}

    getRole() {
        return `Engineer`;
    }
}

module.exports = Engineer;