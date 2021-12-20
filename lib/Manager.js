const Employee = require('./Employee');

// Class For the manager that extends Employee class
class Manager extends Employee {
    // Manager constructor
    constructor(name, id, email, office) {
        // Calls the Employee super class constructor
        super(name, id, email);

        this.officeNumber = office;
    }
    // Returns the employee's role
    getRole() {
        return 'Manager';
    }
}

module.exports = Manager;