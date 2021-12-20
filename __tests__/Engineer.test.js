const Engineer = require('../lib/Engineer.js');

const engineer = new Engineer('Owen', '8725', 'Owen@email.com', 'owen-github');

test('creates an Engineer object', () => {

    expect(engineer.name).toBe('Owen');
    expect(engineer.id).toBe('8725');
    expect(engineer.email).toBe('Owen@email.com');
    expect(engineer.github).toBe('owen-github');
});

test("gets engineer's name", () => {
    expect(engineer.getName()).toEqual(expect.stringContaining(engineer.name));

});

test("gets engineer's id", () => {
    expect(engineer.getId()).toEqual(expect.stringContaining(engineer.id));
});

test("gets engineer's email", () => {
    expect(engineer.getEmail()).toEqual(expect.stringContaining(engineer.email));

});

test("gets engineer's github username", () => {
    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github));

});

test("gets engineer's Role", () => {
    expect(engineer.getRole()).toEqual('Engineer');

});