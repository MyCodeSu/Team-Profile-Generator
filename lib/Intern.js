const Employee = require("./Employee");

const internQuestions = [
    {
        type: 'input',
        name: 'name',
        message: "What is this Intern's name?"
    },
    {
        type: 'input',
        name: 'id',
        message: "What is this Intern's ID?"
    },
    {
        type: 'input',
        name: 'email',
        message: "What is this Intern's email?"
    },
    {
        type: 'input',
        name: 'school',
        message: "What is this Intern's school?"
    }
]

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }
    getSchool() {
        return this.school;
    }
    getRole() {
        return 'Intern';
    }
}

module.exports = {Intern, internQuestions};