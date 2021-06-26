const fs = require("fs");
const inquirer = require("inquirer");

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const generateHTML = require("./src/generateHTML");
const employees = [];

const userPrompt = () => {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Enter the employee's name: ",
            validate: name => {
                if (name) {
                    return true;
                } else {
                    console.log("You must enter a name.");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "email",
            message: "Enter the employee's email address: ",
            validate: email => {
                if (email) {
                    return true;
                } else {
                    console.log("You must enter an email address.");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "id",
            message: "Enter the employee ID: ",
            validate: idNumber => {
                if (!isNaN(parseInt(idNumber))) {
                    return true;
                } else {
                    console.log("You must enter a number.");
                    return false;
                }
            }
        },
        {
            type: "list",
            name: "role",
            message: "Select the employee's role: ",
            choices: ["Manager", "Engineer", "Intern"],
        }
    ])
        .then(select => {
            if (select.role === "Manager") {
                inquirer.prompt([
                    {
                        type: "input",
                        name: "office",
                        message: "Enter the Manager's office number: ",
                        validate: office => {
                            if (office) {
                                return true;
                            } else {
                                return "You must enter an office number"
                            }
                        }
                    }
                ])
                    .then(res => {
                        console.log(res.office);

                        const manager = new Manager(select.name, select.email, select.id, select.role, select.office)

                        team.push(manager);
                        newEmployee()
                    })
            } else if (select.role === "Engineer") {
                inquirer.prompt([
                    {
                        type: "input",
                        name: "github",
                        message: "Enter the Engineer's GitHub username: ",
                        validate: github => {
                            if (github) {
                                return true;
                            } else {
                                return "You must a GitHub username"
                            }
                        }
                    }
                ])
                    .then(res => {
                        console.log(res.github);

                        const engineer = new Engineer(select.name, select.email, select.id, select.role, select.github)

                        team.push(engineer);
                        newEmployee()
                    })
            } else if (select.role === "Intern") {
                inquirer.prompt([
                    {
                        type: "input",
                        name: "school",
                        message: "Enter the name of the Intern's school: ",
                        validate: school => {
                            if (school) {
                                return true;
                            } else {
                                return "You must enter the name of a school"
                            }
                        }
                    }
                ])
                    .then(res => {
                        console.log(res.school);

                        const intern = new Intern(select.name, select.email, select.id, select.role, select.school);

                        team.push(intern);
                        newEmployee()
                    })
            }

            function buildTeam() {
                fs.writeFileSync("./dist/team.html", generateHTML(employees), err=> {
                    if (err) {
                        console.log(err);
                        return
                    }
                })
            }

            function newEmployee() {
                inquirer.createPromptModule([
                    {
                        type: "confirm",
                        name: "newEmployee",
                        name: "Would you like to add a new employee?"
                    }
                ])
                .then(res => {
                    if(res.newEmployee === true) {
                        userPrompt();
                    } else {
                        buildTeam();
                    }
                })
            }
        })
}

userPrompt();