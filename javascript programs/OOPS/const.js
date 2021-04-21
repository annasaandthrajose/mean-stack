class Person{
    constructor(name,age,gender)
    {
        this.name=name;
        this.age=age;
        this.gender=gender;
    }

printPerson()
{
    console.log(this.name);
    console.log(this.age);
    console.log(this.gender);
}

}
var obj=new Person("annie",55,"female");
console.log(obj.name);

