// Allows the use for the inquirer and fs packages
const inquirer = require('inquirer');
const fs = require('fs');

// Requires the Classes for each employee type
const Engineer = require('./lib/Engineer.js');
const Employee = require('./lib/Employee.js');
const Manager = require('./lib/Manager.js');
const Intern = require('./lib/Intern.js');

// Allows the use of the script file to generate the html
const generatePage = require('./src/generatePage');


//Array for team member objects
const team = [];

// Ask the user for manager info
const promptManager = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'managerName',
            message: "What is the team manager's name? (Required)",
            validate: managerName => {
                if (managerName) {
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
            validate: officeNum => {
                if(officeNum) {
                    return true;
                } else {
                    console.log("Please enter the office number");
                    return false;
                }
            } 
        }
    ])
    .then(({managerName, managerId, managerEmail, officeNum}) => {
        // Creates a new manager object
        const manager = new Manager(managerName, managerId, managerEmail, officeNum);
        // pushes the new manager onto the team array
        team.push(manager);
        // calls the function to show the menu
        showMenu();
    })
};

// Function to show the menu of options
const showMenu = () => {
    // Asks user if they want to add another employee or just show the gnerated team page
    return inquirer.prompt(
        {
            type: 'confirm',
            name: 'confirmAdd',
            message: "Do you want to add another employee?",
            default: true
        }
    )
    .then (answer => {
        // if the answer is yes, the function to add another employee is called
        if (answer.confirmAdd) {
            addEmployee();
        } else {
            // if the answer is no, the team page html is generated
            createPage();
        }
    })
};

// Asks the user what type of employee they want to add
const addEmployee = () => {
    // Allows the user to chose from Engineer or Intern
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
            // If the response is engineer, the function to create an engineer object is called
            addEngineer();
        } else if (response.employeeType === 'Intern') {
            // If the option to add an intern is selected, the function to create an intern object is called
            addIntern();
        } else {
            // if none is selected, the menu is displayed again
            showMenu();
        }
    });
};

// Function to add an engineer to the team
const addEngineer = () => {

    // Asks the user for the engineer's info
    return inquirer.prompt([
        {
            type: 'input',
            name: 'engineerName',
            message: "What is the Engineer's name? (Required)",
            validate: engineerName => {
                if (engineerName) {
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
    .then(({engineerName, engineerId, engineerEmail, github}) => {
        // Creates a new engineer object with the given info
        const engineer = new Engineer(engineerName, engineerId, engineerEmail, github);
        // adds the engineer to the team array
        team.push(engineer);
        // goes back to the menu option to ask what the user wants to do next
        showMenu();
    })
};

// Function to add an intern to the team
const addIntern = () => {
    // Asks the user for the intern info
    return inquirer.prompt([
        {
            type: 'input',
            name: 'internName',
            message: "What is the Intern's name? (Required)",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter the intern's name.");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'internId',
            message: "What is the intern's Id? (Required)",
            validate: internId => {
                if (internId) {
                    return true;
                } else {
                    console.log("Please enter the intern's Id");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'internEmail',
            message: "What is the intern's email? (Required)",
            validate: internEmail => {
                if (internEmail) {
                    return true;
                } else {
                    console.log("Please enter the email");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'internSchool',
            message: "What is the intern's school? (Required)",
            validate: schoolInput => {
                if(schoolInput) {
                    return true;
                } else {
                    console.log("Please enter the intern's school");
                    return false;
                }
            } 
        }
    ])
    .then(({internName, internId, internEmail, internSchool}) => {
        // Creates a new object with the given info
        const intern = new Intern(internName, internId, internEmail, internSchool);
        // adds the intern to the team
        team.push(intern);
        // shows the menu options again
        showMenu();
    })
};

// Creates the html to show the team page
const createPage = () => {
    console.log("Team page created");
    const teamPage = generatePage(team);

    fs.writeFile('./dist/index.html', teamPage, err => {
        if (err) {
            console.log(err);
            return;
        }
    })
};

// Calls the function to start the user prompts
promptManager();
