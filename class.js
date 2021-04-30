class Student {
    constructor(sID, sName) {
        this.name = sName;
        this.id = sID;
        this.college = "Holy Land College";

    }

}

const student1 = new Student(162, "rony");
const student2 = new Student(118, "rimu");
console.log(student1, student2);