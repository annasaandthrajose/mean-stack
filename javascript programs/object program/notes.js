var exp={
    jan:25000,
    feb:26000,
    mar:27000,
    apr:30000,
}
console.log(exp["mar"]);
exp["may"]=36000;

exp["feb"]+=1000;
console.log(exp);