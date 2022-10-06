const { getRandomValues } = require("crypto");
const Employee = require("./Employee");

const managerQuestions = [
    {
        type: 'input',
        name: 'name',
        message: "What is this Manager's name?"
    },
    {
        type: 'input',
        name: 'id',
        message: "What is this Manager's ID?"
    },
    {
        type: 'input',
        name: 'email',
        message: "What is this Manager's email?"
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: "What is this Manager's office number?"
    },
]

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    getRole() {
        return 'Manager';
    }

    getOfficeNumber() {
        return this.officeNumber;
    }
}

module.exports = {Manager, managerQuestions};