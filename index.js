const inquirer = require('inquirer');
const template = require('./src/template.js');
const writeFile = require('./src/write-file');

// requiring constructor classes and question objects to each class
const { Manager, managerQuestions } = require('./lib/Manager.js');
const { Engineer, engineerQuestions } = require('./lib/Engineer.js');
const { Intern, internQuestions } = require('./lib/Intern.js');
// Array to be used for file creation
let employeesObjectArray = [];


const init = () => { promptManagerQuestions() }
// prompts questions from manager class then creates answer object based on user inputs.
const promptManagerQuestions = () => {
    inquirer.prompt(managerQuestions)
        .then((answers) => {
            answers = new Manager(answers.name, answers.id, answers.email, answers.officeNumber)
            employeesObjectArray.push(answers);
            return questionPrompt();
        })
}

// prompts questions from engineer class then creates answer object based on user inputs.
const promptEngineerQuestions = () => {
    inquirer.prompt(engineerQuestions)
        .then((answers) => {
            answers = new Engineer(answers.name, answers.id, answers.email, answers.github)
            employeesObjectArray.push(answers);
            return questionPrompt();
        })
}

// prompts questions from intern class then creates answer object based on user inputs.
const promptInternQuestions = () => {
    inquirer.prompt(internQuestions)
        .then((answers) => {
            answers = new Intern(answers.name, answers.id, answers.email, answers.school)
            employeesObjectArray.push(answers);
            return questionPrompt();
        })
}

// prompts handler
const questionPrompt = () => {
    inquirer.prompt([{
        type: "list",
        name: 'employeeType',
        message: "What job position would you like to add?",
        choices: [
            { name: 'Engineer', value: "addEngineer" },
            { name: 'Intern', value: "addIntern" },
            { name: 'Done', value: "done" }
        ]
    }])
        .then(positionAddition => {
            // Manager's selected new job position will correspond with respective question set.
            if (positionAddition.employeeType === 'addEngineer') { promptEngineerQuestions(); };
            if (positionAddition.employeeType === 'addIntern') { promptInternQuestions(); };
            if (positionAddition.employeeType === 'done') {
                // use all user inputs stored into employeeObjectArray and create an Html file.
                let html = template(employeesObjectArray)
                writeFile(html);
            }
        })
}

init();