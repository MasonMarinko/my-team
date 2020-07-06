  
const Engineer = require('../lib/Engineer');

test('Creates Engineer object', () => {
    const engineer = new Engineer('Guy', 55540, 'eng@ineer.com', 'TRemigi');

    expect(engineer.name).toBe('Guy');
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.roleInfoType).toEqual(expect.any(String));
    expect(engineer.getRole()).toEqual(expect.any(String));
    
})