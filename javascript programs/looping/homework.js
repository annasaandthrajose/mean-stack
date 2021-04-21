var i=371;
var j=0;
var k=0;
while(i!==0)
{
    j=i%10;
    k=j*j*j+k;
    i=Math.floor(i/10);
}
console.log(k);