//constructor for employee
class Employee {
    constructor (name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
//returns input name 
    getName() {
        return this.name;
    }
//returns input ID
    getID() {
        return this.id;
    }
//returns input email
    getEmail() {
        return this.email;
    }
//returns input position 
    getRole() {
        return "Employee";
    }
};

//exports
module.exports = Employee;



