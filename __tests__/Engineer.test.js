const {Engineer} = require('../lib/Engineer');

test('Create new engineer', () => {
    const employee = new Engineer('Gender Neutral Name', 246, 'someone@email.com', 'username');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
    expect(employee.github).toEqual(expect.any(String));
})

test('Checks every method in the Engineer class', () => {
    const employee = new Engineer('Gender Neutral Name', 246, 'someone@email.com', 'username');

    expect(employee.getName()).toBe(employee.name);
    expect(employee.getId()).toBe(employee.id);
    expect(employee.getEmail()).toBe(employee.email);
    expect(employee.getGithub()).toBe(employee.github);
    expect(employee.getRole()).toBe('Engineer');
})