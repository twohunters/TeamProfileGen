const fs = require("fs");
const inquirer = require("inquirer");

const Manager = require("./lib/Manager");
const Employee = require("./lib/Employee")
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

function userPrompt() {
    return inquirer.prompt([{
        type: "input",
        name: "employeeName",
        message: "What is your name?",
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
        message: "What is your email address?",
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
        message: "What is your Employee ID?",
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
        message: "What is your role?",
        choices: ["Manager", "Engineer", "Intern"],
    }])
    .then({

    })
}

userPrompt();