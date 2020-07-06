  
const Manager = require('../lib/Manager');

test('Creates manager object', () => {
    const manager = new Manager('Manager', 30302, 'manager@manage.com');

    expect(manager.name).toBe('Manager');
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.roleInfoType).toEqual(expect.any(String));
    expect(manager.getRole()).toEqual(expect.any(String));
    
});