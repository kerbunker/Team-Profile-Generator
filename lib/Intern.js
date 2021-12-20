const Employee = require('./Employee');

// Class for the Intern object which extends the Employee class
class Intern extends Employee {
    // Constructor for the Intern
    constructor(name, id, email, school) {
        // Calls the Employee super class
        super(name, id, email);

        this.school = school;
    }

    // Returns the school of the intern
    getSchool() {
        return this.school;
    }

    // Returns the intern's role
    getRole() {
        return 'Intern';
    }
}

module.exports = Intern;