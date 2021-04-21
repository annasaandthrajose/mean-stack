class Student {
    static college = "luminar"
    constructor(rollno, name, course) {
        this.rollno = rollno;
        this.name = name;
        this.course = course;
        
    }
    printStudent() {
        console.log(this.rollno+ this.name+ this.course + Student.college)
    }
}
        var stud = new Student(100, "ram", "bca")

        var stud1 = new Student(101, "raj", "mca")
        stud.printStudent();
        stud1.printStudent();
        console.log(stud.name);
        console.log(Student.college);
    
