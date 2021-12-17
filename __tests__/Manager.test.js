const Manager = require('../lib/Manager.js');

const manager = new Manager('Diane', 3257, 'Diane@email.com', 15);

test('creates a Manager object', () => {

    expect(manager.name).toBe('Diane');
    expect(manager.id).toEqual(3257);
    expect(manager.email).toBe('Diane@email.com');
    expect(manager.officeNumber).toEqual(15);
});

test("gets Manager's name", () => {
    expect(manager.getName()).toEqual(expect.stringContaining(manager.name));

});

test("gets Manager's id", () => {
    expect(manager.getId()).toEqual(expect.stringContaining(manager.id.toString()));
});

test("gets Manager's email", () => {
    expect(manager.getEmail()).toEqual(expect.stringContaining(manager.email));

});


test("gets Manager's Role", () => {
    expect(manager.getRole()).toEqual('Manager');

});