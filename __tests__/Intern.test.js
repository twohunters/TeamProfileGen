const Intern = require("../lib/Intern");

test("Create new intern", () => {
    const school = "UofO";
    const intern = new Intern("Dave", 40, "dave@email.com", school);
    expect(intern.school).toBe(school);
});

test("Create intern's school", () => {
    const school = "UofO";
    const intern = new Intern("Dave", 40, "dave@email.com", school);
    expect(intern.getSchool()).toBe(school);
});

test("Create intern role", () => {
    const newIntern = "Intern"
    const intern = new Intern("Dave", 40, "dave@email.com", "UofO");
    expect(intern.getRole()).toBe(newIntern);
});