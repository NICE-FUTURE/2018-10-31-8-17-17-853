import Person from "./person.js";

class Teacher extends Person {
    constructor(id, name, age, klasses=null) {
        super(id, name, age);
        this.klasses = klasses;
    }
    introduce() {
        var s = super.introduce() + ' I am a Teacher. ';
        if (this.klasses === null) s += 'I teach No Class.';
        else {
            s += `I teach Class ${this.klasses[0].number}`;
            for (let index=1; index<this.klasses.length; index++) {
                s += `, ${this.klasses[index].number}`;
            }
            s += '.';
        }
        return s;
    }
    introduceWith(student) {
        if (student.klass.number === this.klass.number) {
            return super.introduce() + ` I am a Teacher. I teach ${student.name}.`;
        } else {
            return super.introduce() + ` I am a Teacher. I don't teach ${student.name}.`;
        }
    }
    isTeaching(student) {
        for (klass of this.klasses) {
            if (!klass.isIn(student)) return false;
        }
        return true;
    }
}

module.exports = Teacher;