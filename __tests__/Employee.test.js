// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Author: Mark Drummond
// Date: 20-Nov-2021
// Assignment: Team Profile Generator
// See README.md for more information
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Employee test suite
const Employee = require(`../lib/Employee`)

describe(`Employee`, () => {
    // Test for initializing a new Employee object
    describe(`Employee Class Initialization`, () => {
        it(`Should create an object with ID, name, and email address if provided valid arguments`, () => {
            const mark = new Employee(439, `Mark`, `mjamesd@gmail.com`);

            // Verify that the new object has the correct properties
            expect(mark._id).toEqual(439);
            expect(mark._name).toEqual(`Mark`);
            expect(mark._email).toEqual(`mjamesd@gmail.com`);
        });

        it(`Should throw an error if provide no arguments`, () => {
            const err = new Error(`Invalid parameters`);

            // Wrap the object initialization in a callback function that Jest will run
            const cb = () => new Employee();

            // Verify that an error was thrown in the callback function
            expect(cb).toThrowError(err);
        });

        it(`Should throw an error if employee email is validated based on regex`, () => {
            const err = new Error(`Invalid parameters`);
            const mark = () => new Employee(439, `Mark`, `mjamesd@gmail.com`);
            const hilary = () => new Employee(440, `Hilary`, `ahilarygmailcom`);

            expect(mark).not.toThrowError(err);
            expect(hilary).toThrowError(err);
        });
    });
    
    // Test the class methods
    describe(`Employee Class Methods`, () => {
        const mark = new Employee(439,`Mark`,`mjamesd@gmail.com`);
        it(`Should return the employee's ID`, () => {
            expect(mark.getId()).toEqual(439);
        });

        it(`Should return the employee's name`, () => {
            expect(mark.getName()).toEqual(`Mark`);
        });

        it(`Should return the employee's email address`, () => {
            expect(mark.getEmail()).toEqual(`mjamesd@gmail.com`);
        });

        it(`Should return the employee's role`, () => {
            expect(mark.getRole()).toEqual(`Employee`);
        });
    });
});