class Parent{
    phone()
    {
        console.log("have a nokia phone");
    }
}
class Child extends Parent{
    phone()
    
    {
        super.phone();
        console.log("i phone");
    }

}
var ch=new Child();
ch.phone();
