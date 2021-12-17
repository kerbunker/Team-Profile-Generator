const Manager = require('../lib/Manager.js');

const manager = new Manager('Diane', 3257, 'Diane@email.com', 15);

test('creates a Manager object', () => {

    expect(Manager.name).toBe('Diane');
    expect(Manager.id).toEqual(3257);
    expect(Manager.email).toBe('Diane@email.com');
    expect(Manager.officeNumber).toEqual(15);
});

test("gets Manager's name", () => {
    expect(Manager.getName()).toEqual(expect.stringContaining(Manager.name));

});

test("gets Manager's id", () => {
    expect(Manager.getId()).toEqual(expect.stringContaining(Manager.id.toString()));
});

test("gets Manager's email", () => {
    expect(Manager.getEmail()).toEqual(expect.stringContaining(Manager.email));

});


test("gets Manager's Role", () => {
    expect(Manager.getName()).toEqual('Manager');

});