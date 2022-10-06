const Employee = require('../lib/Employee');

test('Create new employee', () => {
    const employee = new Employee('Gender Neutral Name', 246, 'someone@email.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
})

test('Checks every method in the Employee class', () => {
    const employee = new Employee('Gender Neutral Name', 246, 'someone@email.com');

    expect(employee.getName()).toBe(employee.name);
    expect(employee.getId()).toBe(employee.id);
    expect(employee.getEmail()).toBe(employee.email);
    expect(employee.getRole()).toBe('Employee');
})