class Class {
    constructor(number) {
        this.number = number;
        Class.prototype.leader = null;
    }
    getDisplayName() {
        return "Class " + this.number;
    }
    assignLeader(student) {
        if (student.klass.number === this.number) Class.prototype.leader = student;
    }
}

module.exports = Class;