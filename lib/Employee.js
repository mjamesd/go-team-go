// Employee class

class Employee {
    constructor(id, employeeName, email) {
        this.id = id;
        this.name = employeeName;
        this.email = email;
        // this.email = validateEmail(email);
    }

    getId() { }

    getName() { }

    getEmail() { }

    getRole() {
        return `Employee`;
    }

    // From https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
    // tests here: http://jsfiddle.net/ghvj4gy9/embedded/result,js/
    validate(email) {
        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    validateEmail() {
        if (validate(this.email)) {
            console.info(chalk.white.bgGreen(`${this.email} is valid!`));
            return true;
        }
        console.info(chalk.white.bgRed(`${this.email} is not valid.`));
        return false;
    }
}

module.exports = Employee;