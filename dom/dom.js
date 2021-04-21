var tag=document.getElementsByTagName("h1")
for(let hd of tag)
{
    hd.style.color="red"
}
var lst=document.getElementsByTagName("li")
for(let item of lst)
{
    item.style.color="yellow"
}
var ht=document.getElementById("hone")
ht.style.color="green"
var litem=document.getElementsByClassName("lone")
for(let item of litem)
{
    item.style.color="pink"
}



var hea=document.querySelectorAll("h1")
for(let hd of hea)
{
    hd.style.color="blue"
}
var ho=document.querySelector("#hone")
ho.style.color="red"
var po=document.querySelectorAll(".lone")
for(let pt of po)
{
    pt.style.color="orange"
}