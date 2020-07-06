const Engineer = require('../lib/Engineer.js');

test('creates an engineer object', () => {
    const engineer = new Engineer('Bob', "111", "test@gmail.com", "Engineer", "test123");

    expect(engineer.name).toBe('Bob');
    expect(engineer.id).toBe("111");
    expect(engineer.email).toBe("test@gmail.com");
    expect(engineer.role).toBe("Engineer");
    expect(engineer.github).toBe("test123");
    expect(engineer.getName()).toBe('Bob');
    expect(engineer.getId()).toBe('111');
    expect(engineer.getEmail()).toBe('test@gmail.com');
    expect(engineer.getGithub()).toBe('test123');
    expect(engineer.getRole()).toBe('Engineer');
});