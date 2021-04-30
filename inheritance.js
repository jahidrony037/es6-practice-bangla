class Parent {
    constructor() {
        this.fatherName = "GodFather";
    }
    properties() {
        return this.area = 14;
    }
}

class Child extends Parent {
    constructor(name) {
        super();
        this.name = name;

    }

    getFullName() {
        return this.fatherName + " " + this.name;
    }


}

const baby1 = new Child('arnold');
const baby2 = new Child('justin');
const fatherName = baby2.getFullName();
console.log(baby1.properties(), baby2.properties());
console.log(fatherName);