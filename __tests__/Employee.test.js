// Employee test suite

// const { expect } = require('@jest/globals');
// const { it } = require('jest-circus');
// const { describe } = require('yargs');
const { expect, describe, it } = require('@jest/globals');
const Employee = require('../lib/Employee');
const Employee = require('../lib/Employee');

describe('Employee', () => {
    // Test for initializing a new Employee object
    describe('Initialization', () => {
        it("Should create an object with ID, name, and email address if provided valid arguments", () => {
            const mark = new Employee(439, `Mark`, `mjamesd@gmail.com`);

            // Verify that the new object has the correct properties
            expect(mark.id).toEqual(439);
            expect(mark.name).toEqual(`Mark`);
            expect(mark.email).toEqual(`mjamesd@gmail.com`);
        });

        it("Should throw an error if provide no arguments", () => {
            // Wrap the object initialization in a callback function that Jest will run
            const cb = () = new Employee();

            // Verify that an error was thrown in the callback function
            expect(cb).toThrow();
        });

        it.skip("Should throw an error if employee ID is not given", () => {
            
        });

        it.skip("Should throw an error if employee ID is not a number", () => {});

        it.skip("Should throw an error if employee ID is not a number between 1 and 999", () => {});

        it.skip("Should throw an error if employee name is not given", () => {});

        it.skip("Should throw an error if employee name is not a string", () => {});

        it.skip("Should throw an error if employee email is not given", () => {});

        it.skip("Should throw an error if employee email is not a string", () => {});

        it.skip("Should throw an error if employee email does not begin with \"@\"", () => {});

        it.skip("Should throw an error if employee email does not contain an \"@\" symbol and at least one \".\"", () => {});

        it("Should throw an error if employee name is validated based on regex", () => {
            const mark = new Employee(439, `Mark`, `mjamesd@gmail.com`);
            const hilary = new Employee(440, `Hilary`, `ahilarygmailcom`);

            expect(mark.validateEmail()).toBe(true);
            expect(hilary.validateEmail()).toBe(false);
        });

        // it.skip("Should throw an error if employee name is not a string", () => {});
    });
    
    // Test the class methods
    describe('Class Methods', () => {
        it("Should return the employee's ID", () => {});

        it("Should return the employee's name", () => {});

        it("Should return the employee's email address", () => {});

        it("Should return the employee's role", () => {});
    });
});