 const heading = document.getelemetnbyid("heading");
 const input =document.getElementById("input");
 const button = document.getElementById("button");

 button.addEventListener("click", ()=>{
 let usercolor=input.value;
     heading.style.color=input.value;
 });