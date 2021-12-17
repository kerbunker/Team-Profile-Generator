const Employee = require('../lib/Employee.js');

const employee = new Employee('Laura', 5526, 'Laura@email.com');

test('creates an Employee object', () => {
    //const employee = new Employee('Laura', 5526, 'Laura@email.com');

    expect(employee.name).toBe('Laura');
    expect(employee.id).toEqual(5526);
    expect(employee.email).toBe('Laura@email.com');
});

test("gets employee's name", () => {
    expect(employee.getName()).toEqual(expect.stringContaining(employee.name));

});

test("gets employee's id", () => {
    expect(employee.getId()).toEqual(expect.stringContaining(employee.id.toString()));
});

test("gets employee's email", () => {
    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email));

});

test("gets employee's Role", () => {
    expect(employee.getName()).toEqual('Employee');

});