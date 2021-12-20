const Intern = require('../lib/Intern.js');

const intern = new Intern('Ben', '10278', 'Ben.intern@email.com', 'NC State');

test('creates an Intern object', () => {

    expect(intern.name).toBe('Ben');
    expect(intern.id).toBe('10278');
    expect(intern.email).toBe('Ben.intern@email.com');
    expect(intern.school).toBe('NC State');
});

test("gets intern's name", () => {
    expect(intern.getName()).toEqual(expect.stringContaining(intern.name));

});

test("gets intern's id", () => {
    expect(intern.getId()).toEqual(expect.stringContaining(intern.id));
});

test("gets intern's email", () => {
    expect(intern.getEmail()).toEqual(expect.stringContaining(intern.email));

});

test("gets intern's school", () => {
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school));

});

test("gets intern's Role", () => {
    expect(intern.getRole()).toEqual('Intern');

});