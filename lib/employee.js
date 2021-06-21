class Employee {
    constructor(name, email, id, role) {
        this.name = name;
        this.email = email;
        this.role = role;
        this.id = id;
    }

    name() {
        return this.name;
    }

    email() {
        return this.email;
    }

    role() {
        return this.role;
    }

    id() {
        return this.id;
    }
}

module.exports = Employee;