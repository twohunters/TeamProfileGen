const Employee = require("./Employee");

class Manager extends Employee {
    constructor (name, email, role, id, office) {
        super(name, email, role, id);
        this.office = office;
    }
    office() {
        return this.office;
    }
}

module.exports = Manager;