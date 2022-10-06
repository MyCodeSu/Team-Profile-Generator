const Employee = require('../lib/Employee');

test('Create new intern', () => {
    const employee = new Intern('Gender Neutral Name', 246, 'someone@email.com', 'school');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
    expect(employee.school).toEqual(expect.any(String));
})

test('Checks every method in the Intern class', () => {
    const employee = new Intern('Gender Neutral Name', 246, 'someone@email.com', 'school');

    expect(employee.getName()).toBe(employee.name);
    expect(employee.getId()).toBe(employee.id);
    expect(employee.getEmail()).toBe(employee.email);
    expect(employee.getSchool()).toBe(employee.school);
    expect(employee.getRole()).toBe('Intern');
})