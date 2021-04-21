var employee={
    id:105,
    name:"anto",
    desig:"developer",
    salay:25000,
    
    
}
console.log(employee["salay"]);
employee["salay"]+=3000;
employee["gender"]="male"
console.log(employee);
if("gender" in employee)
{
    console.log("exists");
}
else{
    console.log("not exists");
}