const Employee = require('./Employee');

class Manager extends Employee {
    constructor() {
        super();

        this.officeNumber;
    }


    getRole() {
        return 'Manager';
    }
}

module.exports = Manager;