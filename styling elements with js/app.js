const image=document.querySelector("cat");
const button=document.querySelector("cat");

let flag =true;
button.addEventListener("click",()=>{
    if(flag)
    image.style.display="none";
} else {
    button.textContent="show";
});
