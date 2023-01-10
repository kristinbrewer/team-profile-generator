const inquirer = require('inquirer');

//employee constroctor 
const Employee = require("./lib/Employee");


//extending employee constructure
 class Manager extends Employee {
    constructor (name, id, email, officeNumber){
        super (name, id, email);
        this.officeNumber = officeNumber;
    }

    getRole () {
    return "Manager";
   }
}

//exports module
    module.exports = Manager;