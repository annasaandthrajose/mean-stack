var arr=[3,4,5];
var p=0;var ne=[];
for(let i=0;i<arr.length;i++)
{
p=p+arr[i];

}
for(i=0;i<arr.length;i++)
{

ne.push(p-arr[i]);

}
console.log(ne);