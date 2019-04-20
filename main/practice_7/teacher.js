import Person from "./person.js";

class Teacher extends Person {
    constructor(name, age, klass) {
        super(name, age);
        this.klass = klass;
    }
    introduce() {
        var s = super.introduce() + ' I am a Teacher. ';
        if (this.klass == null) s += 'I teach No Class.';
        else s += `I teach Class ${this.klass.number}.`;
        return s;
    }
    introduceWith(student) {
        if (student.klass.number === this.klass.number) {
            return super.introduce() + ` I am a Teacher. I teach ${student.name}.`;
        } else {
            return super.introduce() + ` I am a Teacher. I don't teach ${student.name}.`;
        }
    }
}

module.exports = Teacher;