// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Author: Mark Drummond
// Date: 20-Nov-2021
// Project Title: Go, Team, Go!
// Assignment: Team Profile Generator
// See README.md for more information
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Intern test suite
const Intern = require('../lib/Intern');

describe(`Intern`, () => {
    // Test for initializing a new Intern object
    describe(`Intern Initialization`, () => {
        it(`Should create an Intern object with ID, name, email address, and school name if provided valid arguments`, () => {
            const mark = new Intern(439, `Mark`, `mjamesd@gmail.com`, `University of Kansas`);

            // Verify that the new object has the correct properties
            expect(mark._id).toEqual(439);
            expect(mark._name).toEqual(`Mark`);
            expect(mark._email).toEqual(`mjamesd@gmail.com`);
            expect(mark._school).toEqual(`University of Kansas`);
        });

        it(`Should throw an error if no school name is provided`, () => {
            const err = new Error(`Invalid school parameter`);
            const cb = () => new Intern(439, `Mark`, `mjamesd@gmail.com`);

            expect(cb).toThrowError(err);
        });

        it(`Should throw an error if provide no arguments`, () => {
            const err = new Error(`Invalid parameters`);

            // Wrap the object initialization in a callback function that Jest will run
            const cb = () => new Intern();

            // Verify that an error was thrown in the callback function
            expect(cb).toThrowError(err);
        });
    });
    
    // Test the class methods
    describe(`Intern Class Methods`, () => {
        const mark = new Intern(439,`Mark`,`mjamesd@gmail.com`,`University of Kansas`);

        it(`Should return the employee's ID`, () => {
            expect(mark.getId()).toEqual(439);
        });

        it(`Should return the employee's name`, () => {
            expect(mark.getName()).toEqual(`Mark`);
        });

        it(`Should return the employee's email address`, () => {
            expect(mark.getEmail()).toEqual(`mjamesd@gmail.com`);
        });

        it(`Should return the employee's school`, () => {
            expect(mark.getSchool()).toEqual(`University of Kansas`);
        });

        it(`Should return the employee's role`, () => {
            expect(mark.getRole()).toEqual(`Intern`);
        });
    });
});