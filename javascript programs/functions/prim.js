function prime(l, u) 
{
    
    for (var i = l; i <= u; i++)
    
    {
        var flag=0;
    
        for (var j = 2; j < i; j++) 
        {
            if (i % j == 0) 
            {
                flag = 1;
                break;
            }
        }
        if (flag == 0) 
        {
            console.log(i);
        }
    }



}
prime(5,30);

