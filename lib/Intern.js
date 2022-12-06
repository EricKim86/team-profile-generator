const Employee = require("./Employee")

class Intern extends Employee {
    constructor(name, id, email, username) {
        super(name, id, email);
        this.username = username;
    }

    getSchool() {
        return this.school
    }

    getRole() {
        return "Intern"
    }
}

module.exports = Intern;