var add=(num1,num2)=>num1+num2;
console.log(add(10,50));

var cube=num1=>num1**3;
console.log(cube(2));

var arr=[2,4,5,6,7,8];
//map
arr.forEach(o=>console.log(o))
var data=arr.map(num1=>num1**2);
console.log(data);


//filter
var data=arr.filter(num1=>num1%2==0)
console.log(data);
//reduce
var sum=arr.reduce((num1,num2)=>num1+num2)
console.log(sum);
var max=arr.reduce((num1,num2)=>num1>num2?num1:num2)
console.log(max);
//sort
var sor=arr.sort((num1,num2)=>num1>num2?-1:1).forEach(num1=>console.log(num1))
console.log(sor);
