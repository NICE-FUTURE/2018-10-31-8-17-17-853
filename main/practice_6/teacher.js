import Person from "./person.js";

class Teacher extends Person {
    constructor(name, age, klass) {
        super(name, age);
        this.klass = klass;
    }
    introduce() {
        var s = super.introduce() + ' I am a Teacher. ';
        if (this.klass == null) s += 'I teach No Class.';
        else s += `I teach Class ${this.klass}.`;
        return s;
    }
}

module.exports = Teacher;