var arr=[1,2,3,4];var num=6;
var res=[];
for(let i=0;i<arr.length;i++)
{
    for(let j=1;j<arr.length;j++)
    {
        if(arr[i]+arr[j]==num)
        {
console.log(arr[i],arr[j]);
        }
        
    }
    
}
