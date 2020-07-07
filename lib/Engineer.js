
const Employee = require('../lib/Employee');

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);

        this.roleInfo = `<p="https://github.com/${github}" target="_blank">${github}</p>`;
        this.role = 'Engineer';
        this.roleInfoType = 'GitHub'
        this.roleIcon = '<i class="fa fa-cogs"></i>';
    }

    getRole() {
        return 'Engineer';
    }
}

module.exports = Engineer;