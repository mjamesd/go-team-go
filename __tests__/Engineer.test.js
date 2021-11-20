// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Author: Mark Drummond
// Date: 20-Nov-2021
// Assignment: Team Profile Generator
// See README.md for more information
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Engineer test suite

const Engineer = require('../lib/Engineer');

describe(`Engineer`, () => {
    // Test for initializing a new Engineer object
    describe(`Engineer Initialization`, () => {
        it(`Should create an Engineer object with ID, name, email address, and GitHub profile name if provided valid arguments`, () => {
            const mark = new Engineer(439, `Mark`, `mjamesd@gmail.com`, `mjamesd`);

            // Verify that the new object has the correct properties
            expect(mark._id).toEqual(439);
            expect(mark._name).toEqual(`Mark`);
            expect(mark._email).toEqual(`mjamesd@gmail.com`);
            expect(mark._github).toEqual(`mjamesd`);
        });

        it(`Should throw an error if no GitHub profile is provided`, () => {
            const err = new Error(`Invalid GitHub parameter`);
            const cb = () => new Engineer(439, `Mark`, `mjamesd@gmail.com`);

            expect(cb).toThrowError(err);
        });

        it(`Should throw an error if provide no arguments`, () => {
            const err = new Error(`Invalid parameters`);

            // Wrap the object initialization in a callback function that Jest will run
            const cb = () => new Engineer();

            // Verify that an error was thrown in the callback function
            expect(cb).toThrowError(err);
        });
    });
    
    // Test the class methods
    describe(`Engineer Class Methods`, () => {
        const mark = new Engineer(439,`Mark`,`mjamesd@gmail.com`,`mjamesd`);

        it(`Should return the employee's ID`, () => {
            expect(mark.getId()).toEqual(439);
        });

        it(`Should return the employee's name`, () => {
            expect(mark.getName()).toEqual(`Mark`);
        });

        it(`Should return the employee's email address`, () => {
            expect(mark.getEmail()).toEqual(`mjamesd@gmail.com`);
        });

        it(`Should return the employee's GitHub profile`, () => {
            expect(mark.getGitHub()).toEqual(`mjamesd`);
        });

        it(`Should return the employee's role`, () => {
            expect(mark.getRole()).toEqual(`Engineer`);
        });
    });
});