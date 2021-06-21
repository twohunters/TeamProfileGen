const Employee = require("./Employee");

class Intern extends Employee {
    constructor (name, email, role, id, school) {
        super(name, email, role, id);
        this.school = school;
    }
    school() {
        return this.school;
    }
}

module.exports = Intern;