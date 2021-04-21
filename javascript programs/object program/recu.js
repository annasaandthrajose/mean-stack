var patt="AABACA";
var dic={}
for(let ch of patt)
{
    if (ch in dic)
    {
        console.log("recursive is" +ch);
        break;
    }
    else{
        dic[ch]=1;
    }

}