const Engineer = require("../lib/Engineer");

const engineer = new Engineer("Dave", 40, "dave@email.com", "gitDave");

test("Create new engineer", () => {
    expect(engineer.github).toEqual(expect.any(String));
});

test("Create engineer's GitHub", () => {
    expect(engineer.github()).toEqual(expect.any(String));
});

test("Create engineer role", () => {
    expect(engineer.role()).toEqual("Engineer");
});