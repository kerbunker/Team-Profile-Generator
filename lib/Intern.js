const Employee = require('./Employee');

class Intern extends Employee {
    constructor() {
        super();

        this.school;
    }

    getSchool() {

    }

    getRole() {
        return 'Intern';
    }
}

module.exports = Intern;