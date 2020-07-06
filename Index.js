const Employee = require('./lib/Employee');
const inquirer = require('inquirer');

Employee.prototype.initializeEmployee = function () {
    inquirer
      .prompt([
        {
        type: 'input',
        name: 'name',
        message: 'What is your name?',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter your name!');
            }
        }
        },
        {
            type:'input',
            name: 'id',
            message: 'What is your employee number?',
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log('Please enter a valid employee number!');
                }
            }
        },
        {
            type:'input',
            name: 'email',
            message: 'What is your email address?',
            validate: projectNameInput => {
                if (projectNameInput) {
                    return true;
                } else {
                    console.log('Please enter a valid email address!');
                }
            }
        },        
        ])     
      // destructure name from the prompt object
      .then(({
        name, id, email
      }) => {
        // this.player = new Player(name);
        console.log(name)
        console.log(id)
        console.log(email)
        // this.startNewBattle();
      });
  };

  new Employee().initializeEmployee();