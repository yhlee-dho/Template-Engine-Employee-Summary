const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, id, email, school) {
        this.school = school;
        super(name, id, email);
    }

    getSchool() {
        return this.github;
    }
    getRole() {
        return "Intern";
    }
}

module.exports = Intern;