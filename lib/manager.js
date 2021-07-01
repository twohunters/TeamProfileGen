const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, email, role, id, office) {
        super(name, email, role, id);
        this.office = office;
    }

    getRole() {
        return "Manager";
    }

    getOffice() {
        return this.office;
    }
}

module.exports = Manager;