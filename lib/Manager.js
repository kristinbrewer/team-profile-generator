const inquirer = require('inquirer');

//employee constroctor 
const Employee = require("./lib/Employee");


//extending employee constructure
 class Manager extends Employee {
    constructor (name, id, email, officeNum){
        super (name, id, email);
        this.officeNum = officeNum;
    }

    getRole () {
    return "Manager";
   }
}

//exports module
    module.exports = Manager;