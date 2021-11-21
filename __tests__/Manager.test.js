// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Author: Mark Drummond
// Date: 20-Nov-2021
// Project Title: Go, Team, Go!
// Assignment: Team Profile Generator
// See README.md for more information
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Manager test suite

const Manager = require('../lib/Manager');

describe(`Manager`, () => {
    // Test for initializing a new Manager object
    describe(`Manager Initialization`, () => {
        it(`Should create an Manager object with ID, name, email address, and office number if provided valid arguments`, () => {
            const mark = new Manager(439, `Mark`, `mjamesd@gmail.com`, 1162);

            // Verify that the new object has the correct properties
            expect(mark._id).toEqual(439);
            expect(mark._name).toEqual(`Mark`);
            expect(mark._email).toEqual(`mjamesd@gmail.com`);
            expect(mark._officeNumber).toEqual(1162);
        });

        it(`Should throw an error if no office number is provided`, () => {
            const err = new Error(`Invalid office number parameter`);
            const cb = () => new Manager(439, `Mark`, `mjamesd@gmail.com`);

            expect(cb).toThrowError(err);
        });

        it(`Should throw an error if provide no arguments`, () => {
            const err = new Error(`Invalid parameters`);

            // Wrap the object initialization in a callback function that Jest will run
            const cb = () => new Manager();

            // Verify that an error was thrown in the callback function
            expect(cb).toThrowError(err);
        });
    });
    
    // Test the class methods
    describe(`Manager Class Methods`, () => {
        const mark = new Manager(439,`Mark`,`mjamesd@gmail.com`,1162);

        it(`Should return the employee's ID`, () => {
            expect(mark.getId()).toEqual(439);
        });

        it(`Should return the employee's name`, () => {
            expect(mark.getName()).toEqual(`Mark`);
        });

        it(`Should return the employee's email address`, () => {
            expect(mark.getEmail()).toEqual(`mjamesd@gmail.com`);
        });

        it(`Should return the employee's office number`, () => {
            expect(mark.getOfficeNumber()).toEqual(1162);
        });

        it(`Should return the employee's role`, () => {
            expect(mark.getRole()).toEqual(`Manager`);
        });
    });
});