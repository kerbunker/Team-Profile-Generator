// Super class for all the employee roles
class Employee {
    // Constructor for all employees
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;

    }

    // Returns the employee's name
    getName() {
        return this.name;
    }

    // Returns the employee's id
    getId() {
        return this.id;
    }

    // Returns the employee's email
    getEmail() {
        return this.email;
    }

    // returns the employee's role
    getRole() {
        return 'Employee';
    }
}

module.exports = Employee;