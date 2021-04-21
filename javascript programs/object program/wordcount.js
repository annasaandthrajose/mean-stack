var text="hai hello hai hello hello hello";
var words=text.split(" ")
console.log(words);
var dic={};
for(let word of words)
{
if(word in dic)
{
dic[word]+=1
}
else{
    dic[word]=1;
}

}
console.log(dic);

//SORTING
var elements=[];
for(key in dic)

{
    elements.push([dic[key],key])
    console.log(elements);
}

elements.sort((o1,o2)=>o2[0]-o1[0])
console.log(elements[0]);