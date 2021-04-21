class Bank{
    constructor(acno,pname,minbal)
    {
        this.acno=acno;
        this.pname=pname;
        this.minbal=minbal;
    }
deposit(amount)
{
    this.minbal+=amount;
    console.log("account credited with"+amount,"avail bal"+this.minbal);
}
withdraw(amount)
{
if(amount>this.minbal)
{
    console.log("insufficiet balance");
}
else
{
    this.bal-=amount
    console.log("ccount debited with" +amount,"avail bal"+this.bal );
}


}
balanceEnq(){


console.log(this.bal);
}

}
var obj1=new Bank(100,"rama",3000);
console.log(obj1.pname);