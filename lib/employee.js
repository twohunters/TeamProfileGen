class Employee {
    constructor(name, email, id, role) {
        this.name = name;
        this.email = email;
        this.role = role;
        this.id = id;
    }

    getName() {
        return this.name;
    }

    getEmail() {
        return this.email;
    }

    getRole() {
        return this.role;
    }

    getID() {
        return this.id;
    }
}

module.exports = Employee;