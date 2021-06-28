const Manager = require("../lib/Manager");

const manager = new Manager("Dave", 40, "dave@email.com", 1);

test("Create new manager", () => {
    expect(manager.office).toEqual(expect.any(Number));
});

test("Create manager's office", () => {
    expect(manager.office()).toEqual(expect.any(Number));
});

test("Create manager role", () => {
    expect(manager.role()).toEqual("Manager");
});