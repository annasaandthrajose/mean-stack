class Maths
{
    add(num)
    {
        console.log("inside one argument method");
    }
    add(num1,num2)
    {
        console.log("inside 2 argument method");
    }
    add(num1,num2,num3)
    {
        console.log("inside three argument method");
    }
}
var obj=new Maths();
obj.add(10,20)