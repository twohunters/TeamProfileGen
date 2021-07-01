const Employee = require("../lib/Employee");

test("Create new employee", () => {
    const employee = new Employee;
    expect(typeof(employee)).toBe("object");
});

test("Create employee name", () => {
    const name = "Dave";
    const employee = new Employee(name);
    expect(employee.name).toBe(name);
});

test("Create employee email", () => {
    const email = "test@email.com";
    const employee = new Employee(email);
    expect(employee.email).toBe(email);
});

test("Create employee id", () => {
    const id = 1;
    const employee = new Employee(id);
    expect(employee.id).toBe(id);
});

test("Create employee name with getName()", () => {
    const name = "Dave";
    const employee = new Employee(name);
    expect(employee.getName()).toBe(name);
});

test("Create employee email with getEmail()", () => {
    const email = "test@email.com";
    const employee = new Employee(email);
    expect(employee.getEmail()).toBe(email);
});

test("Create employee id with getID()", () => {
    const id = 1;
    const employee = new Employee(id);
    expect(employee.getID()).toBe(id);
});

test("Get employee role with getRole()", () => {
    const role = "Employee";
    const employee = new Employee();
    expect(employee.getRole().toBe(role));
})