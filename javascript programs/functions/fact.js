function fact(num1)
{
    var p=1;
    for(i=1;i<=num1;i++)
    {
        p=p*i
    }
    return p;

}
var data= fact(4);
console.log(data);