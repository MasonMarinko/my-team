const Employee = require('../lib/Employee.js');

test('creates an employee object', () => {
    const employee = new Employee('Bob', "111", "test@gmail.com", "Intern");

    expect(employee.name).toBe('Bob');
    expect(employee.id).toBe("111");
    expect(employee.email).toBe("test@gmail.com");
    expect(employee.role).toBe("Intern");
    expect(employee.getName()).toBe('Bob');
    expect(employee.getId()).toBe('111');
    expect(employee.getEmail()).toBe('test@gmail.com');
    expect(employee.getRole()).toBe('Intern');
});