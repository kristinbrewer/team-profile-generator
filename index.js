//node mods
const inquirer = require('inquirer');
const fs = require('fs');

//generates HTML page
const generateHTML = require('./src/generateHTML')

//calls scripts from library
//const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

//array for input
const inputData = [];




//initial propmts to manager info
function managerInput () {
    return inquirer.prompt ([
            {
                name: 'name',
                message: 'For managers: What is your name?',
                type: 'input',
            },
            {
                name: 'id',
                message: 'What is your employee ID?',
                type: 'input',
            },
            {
                name: 'email',
                message: 'What is your employee email?',
                type: 'input',
            },
            {
                name: 'officeNumber',
                message: 'What is your office number?',
                type: 'input',
            },
        ])
        .then(managerInfo => {
            let {
                name,
                id,
                email,
                officeNumber,
            } = managerInfo;
            let manager = new Manager (name, id, email, officeNumber,)
            inputData.push(manager)
            console.log(manager);
        })
    };
//providing menu for engineer/intern 
const newEmployeeInfo = () => {
    return inquirer.prompt ([
           { name: 'jobTitle',
            message: 'For managers: What is your name?',
            type: 'list',
            choices: ["Engineer", "Intern"], 
        },

        {
            name: 'name',
            message: 'What is the name of your employee?',
            type: 'input',
        },
        {
            name: 'id',
            message: 'What is their employee ID?',
            type: 'input',
        },
        {
            name: 'email',
            message: 'What is their employee email?',
            type: 'input',
        },
        //adding information for engineer
        {
            when: (input) => input.jobTitle === "Engineer",
            name: 'github',
            message: 'What is their GitHub username?',
            type: 'input',
        },
        //adding information for intern
        {
            when: (input) => input.jobTitle === "Intern",
            name: 'school',
            message: 'What is the name of their school?',
            type: 'input',
        },
        {
            name: 'addAnother',
            message: 'Do you want to add another employee?',
            type: 'confirm',
            default: false
        },
         ])

        .then(employeeInfo => {
            let {
                name,
                id,
                email,
                jobTitle,
                officeNumber,
                github,
                school,
                addAnother,
            } = employeeInfo;
            var employee;

            if (jobTitle === "Engineer") {
                employee = new Engineer (name, id, email, github);
                console.log(employee);
            } else if (jobTitle === "Intern") {
                employee = new Intern (name, id, email, school);
                console.log(employee);
            }
            inputData.push(employee);
            if (addAnother) {
                return newEmployeeInfo(inputData);
            } else {
                return inputData;
            }
            
        })
        };


//call to write file
function writeFile(html) {
    fs.writeFile('./dist/index.html', html, (err) => {
       err 
       ? console.error(err)
       : console.log('done');
    });
}
        
//initializes app order

managerInput()
    .then (newEmployeeInfo)
    .then (inputData => {
        return generateHTML (inputData);
    })
    .then (pageHTML => {
        return writeFile(pageHTML)
    })
    .catch (err => {
        console.log(err);
    
    });
 
