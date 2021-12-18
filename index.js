const inquirer = require('inquirer');
const Engineer = require('./lib/Engineer.js');
const Employee = require('./lib/Employee.js');
const Manager = require('./lib/Manager.js');
const Intern = require('./lib/Intern.js');

//Array for team mamber objects
const team = [];

// Ask the user for manager info
const promptManager = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'managerName',
            message: "What is the team manager's name? (Required)",
            validate: managerNameInput => {
                if (managerNameInput) {
                    return true;
                } else {
                    console.log("Please enter the team manager's name.");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'managerId',
            message: "What is the manager's Id? (Required)",
            validate: managerId => {
                if (managerId) {
                    return true;
                } else {
                    console.log("Please enter the manager Id");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'managerEmail',
            message: "What is the manager's email? (Required)",
            validate: managerEmail => {
                if (managerEmail) {
                    return true;
                } else {
                    console.log("Please enter the email");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'officeNum',
            message: "What is the manager's office number? (Required)",
            validate: managerOffice => {
                if(managerOffice) {
                    return true;
                } else {
                    console.log("Please enter the office number");
                    return false;
                }
            } 
        }
    ])
    .then(({name, id, email, officeNum}) => {
        const manager = new Manager(name, id, email, officeNum);

        team.push(manager);

        showMenu();
    })
};

const showMenu = () => {
    return inquirer.prompt(
        {
            type: 'confirm',
            name: 'confirmAdd',
            message: "Do you want to add another employee?",
            default: true
        }
    )
    .then (answer => {
        if (answer.confirmAdd) {
            console.log("Another employee is being added");
            addEmployee();
        } else {
            console.log('Team page generated');
            createPage();
        }
    })
};

const addEmployee = () => {
    return inquirer.prompt(
        {
            type: 'list',
            name: 'employeeType',
            message: "What type of employee would you like to add?",
            choices: ['Engineer', 'Intern', 'None']
        }
    )
    .then(response => {
        if (response.employeeType === 'Engineer') {
            addEngineer();
        } else if (response.employeeType === 'Intern') {
            addIntern();
        } else {
            showMenu();
        }
    });
};

const addEngineer = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'engineerName',
            message: "What is the Engineer's name? (Required)",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter the engineer's name.");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'engineerId',
            message: "What is the engineer's Id? (Required)",
            validate: engineerId => {
                if (engineerId) {
                    return true;
                } else {
                    console.log("Please enter the engineer's Id");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'engineerEmail',
            message: "What is the engineer's email? (Required)",
            validate: engineerEmail => {
                if (engineerEmail) {
                    return true;
                } else {
                    console.log("Please enter the email");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: "What is the engineer's github username? (Required)",
            validate: github => {
                if(github) {
                    return true;
                } else {
                    console.log("Please enter the github username");
                    return false;
                }
            } 
        }
    ])
    .then(({name, id, email, github}) => {
        const engineer = new engineer(name, id, email, github);

        team.push(engineer);

        showMenu();
    })
};
