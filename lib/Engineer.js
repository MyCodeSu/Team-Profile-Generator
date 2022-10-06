const Employee = require("./Employee");

const engineerQuestions = [
    {
        type: 'input',
        name: 'name',
        message: "What is this Engineer's name?"
    },
    {
        type: 'input',
        name: 'id',
        message: "What is this Engineer's ID?"
    },
    {
        type: 'input',
        name: 'email',
        message: "What is this Engineer's email address?"
    },
    {
        type: 'input',
        name: 'github',
        message: "What is this Engineer's github username?"
    },
]

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }

    getRole() {
        return 'Engineer';
    }
    getGithub() {
        return this.github;
    }
}

module.exports = {Engineer, engineerQuestions};