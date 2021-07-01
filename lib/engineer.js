const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, email, role, id, github) {
        super(name, email, role, id);
        this.github = github;
    }

    getRole() {
        return "Engineer";
    }

    getGithub() {
        return this.github;
    }
}

module.exports = Engineer;