  
const generateHtml = require('../src/htmlgen');
const Manager = require('./Manager');
const inquirer = require('inquirer');
const Engineer = require('./Engineer');
const Intern = require('./Intern');
const { registerPrompt } = require('inquirer');
let welcome = false;

class Team {
    constructor() {
    this.team = [];
    }

    
//========== create employee, starting with manager by default/begin ================//
    createEmployee(position, roleSpecific) {

        if (welcome) {
            console.log(`
            ===================
            Adding New ${position}
            ===================
        `)
            ;
        } else {
            welcome = true;
            console.log(`
            ===============================
            Welcome! Let's Build Your Team!
            ===============================
        `)
        }

        inquirer.prompt([{
                type: 'input',
                name: 'name',
                message: `Enter ${position} name:`,
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log('Please enter your name');
                        return false;
                    }
                }
            }, 
            {
                type: 'input',
                name: 'id',
                message: `Enter Employee ID:`,
                validate: idInput => {
                    if (idInput) {
                        return true;
                    } else {
                        return false;
                    }
                }
            }, 
            {
                type: 'input',
                name: 'email',
                message: `Enter ${position} email:`,
                validate: emailInput => {
                    if (emailInput) {
                        return true;
                    } else {
                        console.log('Please enter a valid email address');
                        return false;
                    }
                }
            }, 
            {
                type: 'input',
                name: 'office',
                message: `Enter ${position} ${roleSpecific}:`,
                validate: officeInput => {
                    if (officeInput) {
                        return true;
                    } else {
                        console.log(`Please enter ${roleSpecific}`);
                        return false;
                    }
                }
            }])
            .then(answers => {
                const {name,id,email,office} = answers;
                console.log(position)
//================== check position of employee ========================//
                if (position === 'Manager') {
                    let newEmployee = new Manager(name, id, email, office);
                    return newEmployee;
                } else if (position === 'Intern') {
                let newEmployee = new Intern(name, id, email, office);
                return newEmployee;
                } else {
                    let newEmployee = new Engineer(name, id, email, office);
                return newEmployee;
                }
            }).then(newEmployee => {
                this.team.push(newEmployee);
//================= check if adding more employees =======================//
                return this.addToTeam();
            })
            .catch(error => {
                console.log(error);
            });
    }
// =============== check if user wants to add more employees=====================//
    addToTeam() {
        inquirer.prompt({
            type: 'list',
            name: 'roleSelect',
            message: 'Would you like to add another employee?',
            choices: ["Engineer", "Intern", "No more team members"]
        }).then(answer => {
            const {roleSelect} = answer;
            if (roleSelect === 'Engineer') {
                return this.createEmployee('Engineer', 'GitHub Username');
            } else if (roleSelect === 'Intern') {
                return this.createEmployee('Intern', 'school');
            } else {
                return generateHtml(this.team);
            }
        });
    };
};

module.exports = Team;