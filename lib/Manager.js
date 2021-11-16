// Manager class

class Manager extends Employee {
    constructor(id, employeeName, email, officeNumber) {
        super(id, employeeName, email);
        this.officeNumber = officeNumber;
    }
    
    getOfficeNumber() {}

    getRole() {
        return `Manager`;
    }
}

module.exports = Manager;