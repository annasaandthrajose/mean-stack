var i=123;
var j=0;
var res="";
while(i!==0)
{
    j=i%10;
    res=res+String(j);
    i=Math.floor(i/10);
    
}
console.log(res);