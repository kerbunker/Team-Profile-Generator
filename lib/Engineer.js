const Employee = require('./Employee');

// Class for teh Engineer, which extends the Employee class
class Engineer extends Employee {
    // Engineer constructor function
    constructor(name, id, email, github) {
        // Calls the Employee super class constructor
        super(name, id, email);

        this.github = github;
    }

    // Returns the engineer's github username
    getGithub() {
        return this.github;
    }

    // Returns the engineer's role
    getRole() {
        return 'Engineer';
    }
}

module.exports = Engineer;