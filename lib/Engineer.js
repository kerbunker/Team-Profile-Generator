const Employee = require('./Employee');

class Engineer extends Employee {
    constructor() {
        super();

        this.github;
    }

    getGithub() {

    }

    getRole() {
        return 'Engineer';
    }
}