const Intern = require("../lib/Intern");

const intern = new Intern("Dave", 40, "dave@email.com", "UofO");

test("Create new intern", () => {
    expect(intern.school).toEqual(expect.any(String));
});

test("Create intern's school", () => {
    expect(intern.school()).toEqual(expect.any(String));
});

test("Create intern role", () => {
    expect(intern.role()).toEqual("Intern");
});