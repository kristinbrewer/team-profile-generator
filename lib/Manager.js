const inquirer = require('inquirer');
//const fs = require('fs');

//initial propmts to manager info
function managerInput () {
    return inquirer.prompt ([
            {
                type: 'input',
                name: 'managerName',
                message: 'For managers: What is the your name?',
            },
            {
                type: 'input',
                name: 'managerId',
                message: 'What is your employee ID?',
            },
            {
                type: 'input',
                name: 'managerEmail',
                message: 'What is your employee email?',
            },
            {
                type: 'input',
                name: 'managerOfficenNum',
                message: 'What is your office number?',
            },
        ])};
        

function init() {
   managerInput()
   //.then

}
init();