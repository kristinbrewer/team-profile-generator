//import constructor
const Employee = require("./Employee");

//extending class 
class Intern extends Employee {
    constructor (name, id, email, school) {
        super (name, id, email);
        this.school = school;
    }
    //returns school
    getSchool() {
        return this.school;
    }
    
    getRole() {
        return "Intern";
    }
}

//to export
module.exports = Intern;