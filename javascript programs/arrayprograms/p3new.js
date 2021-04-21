ar1=[10,11,13,14,15];
ar2=[8,9,10,11,16];
var p1=0;
var p2=0;
while((p1<ar1.length)&(p2<ar2.length))
{
    if(ar1[p1]==ar2[p2])
    {
    console.log(ar1[p1]);
    p1=p1+1;
    }
    else if(ar1[p1]>ar2[p2])
    {
        p2=p2+1;
    }
else{
    p1=p1+1;
}
}
