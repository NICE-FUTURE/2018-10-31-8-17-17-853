class Class {
    constructor(number) {
        this.number = number;
        this.teacher = null;
        Class.prototype.leader = null;
    }
    getDisplayName() {
        return "Class " + this.number;
    }
    assignLeader(student) {
        if (student.klass.number === this.number) {
            Class.prototype.leader = student;
            if (this.teacher !== null) this.teacher.assignLeaderListener(student, this.number);
        }
        else console.log("It is not one of us.");
    }
    appendMember(student) {
        student.klass = this;
        if (this.teacher !== null) this.teacher.joinListener(student, this.number);
    }
    isIn(student) {
        if (student.klass.number === this.number) return true;
        else return false;
    }
    registerAssignLeaderListener(teacher) {
        this.teacher = teacher;
    }
    registerJoinListener(teacher) {
        this.teacher = teacher;
    }
}

module.exports = Class;