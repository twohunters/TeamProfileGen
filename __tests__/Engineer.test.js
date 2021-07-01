const Engineer = require("../lib/Engineer");

test("Create new engineer", () => {
    const github = "github";
    const engineer = new Engineer("Dave", 40, "dave@email.com", github);
    expect(engineer.github).toBe(github);
});

test("Create engineer's GitHub", () => {
    const github = "github";
    const engineer = new Engineer("Dave", 40, "dave@email.com", github);
    expect(engineer.getGithub()).toBe(github);
});

test("Create engineer role", () => {
    const newEngineer = "Engineer";
    const engineer = new Engineer("Dave", 40, "dave@email.com", "gitDave");
    expect(engineer.getRole()).toBe(newEngineer);
});