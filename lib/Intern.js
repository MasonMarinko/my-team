const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);

        this.roleInfo = school;
        this.role = 'Intern';
        this.roleInfoType = 'School';
        this.roleIcon = '<i class="fa fa-clipboard"></i>';
    }

    getRole() {
        return 'Intern';
    }
}

module.exports = Intern;