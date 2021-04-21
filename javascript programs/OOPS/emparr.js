class Employee{
    constructor(id,name,desig,salary)
    {
        this.id=id;
        this.name=name;
        this.desig=desig;
        this.salary=salary

    }
}
var obj1=new Employee(100,"ajay","developer",25000);
var obj2=new Employee(101,"ram","developer",26000);
var obj3=new Employee(102,"raj","qa",26000);
var obj4=new Employee(103,"ramu","qa",27000);
var employee=[];

employee.push(obj1)
employee.push(obj2)
employee.push(obj3)
employee.push(obj4)

enames=employee.map(emp=>emp.name.toUpperCase())
console.log(enames);

edevelop=employee.filter(emp=>emp.desig=="developer")

.forEach(o=>console.log(o.name))
esal=employee.map(emp=>emp.salary).reduce((emp1,emp2)=>emp1.salary>emp2.salary?emp1:emp2)
console.log(esal);
esort=employee.sort((emp1,emp2)=>emp1.salary>emp2.salary?-1:1).forEach(emp=>console.log(emp.name))
console.log(esort);













