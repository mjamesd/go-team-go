// Employee class

class Employee {
    constructor(id, employeeName, email) {
        this.id = id;
        this.name = employeeName;
        this.email = email;
    }

    getId() {}

    getName() {}

    getEmail() {}

    getRole() {
        return `Employee`;
    }
}