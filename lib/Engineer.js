//import constructor
const Employee = require("./lib/Employee");

//extending class 
class Engineer extends Employee {
    constructor (name, id, email, github) {
        super (name, id, email);
        this.github = github;
    }
    //returns github
    getGithub() {
        return this.github;
    }
    
    getRole() {
        return "Engineer";
    }
}

//to export
module.exports = Engineer;