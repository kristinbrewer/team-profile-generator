const inquirer = require('inquirer');
const fs = require('fs');

//calls scripts from library
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");




//initial propmts to manager info
function managerInput (managerInfo) {
    return inquirer.prompt ([
            {
                name: 'name',
                message: 'For managers: What is your name?',
                type: 'input',
            },
            {
                name: 'employeeId',
                message: 'What is your employee ID?',
                type: 'input',
            },
            {
                name: 'email',
                message: 'What is your employee email?',
                type: 'input',
            },
            {
                name: 'officeNum',
                message: 'What is your office number?',
                type: 'input',
            },
        ])
        .then(managerInfo => {
            let {
                name,
                employeeId,
                email,
                officeNum,
            } = managerInfo;
            console.log(managerInfo);
        })
    };


        
        //initializes app order
function init() {
    managerInput()
    //.then
 }
 //calls function
 init();