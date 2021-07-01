const Manager = require("../lib/Manager");

test("Create new manager", () => {
    const office = 123;
    const manager = new Manager("Dave", 40, "dave@email.com", office);
    expect(manager.office).toBe(office);
});

test("Create manager's office", () => {
    const office = 123;
    const manager = new Manager("Dave", 40, "dave@email.com", office);
    expect(manager.getOffice()).toBe(office);
});

test("Create manager role", () => {
    const newManager = "Manager";
    const manager = new Manager("Dave", 40, "dave@email.com", "123");
    expect(manager.getRole()).toBe(newManager);
});