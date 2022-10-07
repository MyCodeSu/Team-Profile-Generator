const {Manager} = require('../lib/Manager');

test('Create new Manager', () => {
    const employee = new Manager('Gender Neutral Name', 246, 'someone@email.com', 1234567890);

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
    expect(employee.officeNumber).toEqual(expect.any(Number));
})

test('Checks every method in the Manager class', () => {
    const employee = new Manager('Gender Neutral Name', 246, 'someone@email.com', 1234567890);

    expect(employee.getName()).toBe(employee.name);
    expect(employee.getId()).toBe(employee.id);
    expect(employee.getEmail()).toBe(employee.email);
    expect(employee.getOfficeNumber()).toBe(employee.officeNumber);
    expect(employee.getRole()).toBe('Manager');
})