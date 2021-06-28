const Employee = require("../lib/Employee");

const employee = new Employee("Dave", 40, "dave@email.com");

test("Create new employee", () => {
    expect(employee.name).toEqual(expect.any(String));
    expect(employee.email).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
});

test("Create employee name", () => {
    expect(employee.email()).toEqual(expect.any(String));
});

test("Create employee email", () => {
    expect(employee.email()).toEqual(expect.stringContaining("@"));
});

test("Create employee role", () => {
    expect(employee.role()).toEqual("Employee");
});

test("Create employee id", () => {
    expect(employee.id()).toEqual(expect.any(Number));
});