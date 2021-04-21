var cl=document.querySelector("#clk");
cl.addEventListener("click",()=>{
    cl.style.color="green";
    cl.textContent="clicked"
})
var dl=document.querySelector("#dbclk")
dl.addEventListener("dblclick",()=>{
    dl.style.color="red"
    dl.textContent="double clicked"
})
var ov=document.querySelector("#over")
ov.addEventListener("mouseover",()=>{
ov.style.color="cyan"
ov.textContent="mouse over me"
})
var ot=document.querySelector("#over")
ot.addEventListener("mouseout",()=>{
ot.style.color="pink"
ot.textContent="mouse out me"
})