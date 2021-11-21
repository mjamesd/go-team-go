// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Author: Mark Drummond
// Date: 20-Nov-2021
// Project Title: Go, Team, Go!
// Assignment: Team Profile Generator
// See README.md for more information
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Employee class

class Employee {
    constructor(id, employeeName, email) {
        if (!id || !employeeName || (this.validateEmail(email) === false)) {
            throw new Error(`Invalid parameters`);
        }
        this._id = id;
        this._name = employeeName;
        this._email = email;
    }

    getId() {
        return this._id;
    }

    getName() {
        return this._name;
    }

    getEmail() {
        return this._email;
    }

    getRole() {
        return `Employee`;
    }

    // From https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
    // tests here: http://jsfiddle.net/ghvj4gy9/embedded/result,js/
    validateEmail(testEmail) {
        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (re.test(testEmail)) {
            return true;
        }
        return false;
    }
}

module.exports = Employee;