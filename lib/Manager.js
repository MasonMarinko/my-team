const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, officeNum) {
        super(name, id, email);

        this.roleInfo = `<p"${officeNum}">${officeNum}</p>`;
        this.role = 'Manager';
        this.roleInfoType = 'Office Number';
        this.roleIcon = '<i class="fa fa-line-chart"></i>';
    }
    getRole() {
        return 'Manager';
    }
}

module.exports = Manager;