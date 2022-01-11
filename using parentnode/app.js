let paragraph = document.getElementById("myParagraph");
let parent = paragraph.parentNode;
parent.removeChild(paragraph);

list.addEventListener("click", (event) => {
    const li = event.target;
       const ul = li.parentNode;
       ul.removeChild(li);
   });
   const input = document.getElementById('input');
   const button = document.getElementById('submit');
   const removeBtn = document.getElementById('remove');
   const listItem = document.getElementsByTagName('li');
   const list = document.getElementById('list');
   button.addEventListener('click', () => {
    let listItem = document.createElement('li');
    let list = document.getElementsByTagName('ul')[0];
    listItem.textContent = input.value;
    list.appendChild(listItem);
    input.value = '';
   })
   list.addEventListener('click', (event) => {
    const li = event.target;
    const ul = li.parentNode;
    ul.removeChild(li);
   });

const cashmachine = document.getElementById("cashmachine");
const cyberpet = document.getElementById("cyber pet");
const toptrump = document.getElementById("toptrump");
const higherorlower = document.getElementById("higherorlower");
const portfolio = document.getElementById("portfolio");
button.addEventListener("click", ()=> {
    let higherorlower = document.createElement("li");
    let portfolio = document.getElementsByTagName("ul")[0];
    higherorlower.textcontent = input.value;
    portfolio.appendChild(higherorlower);
    input.value = "";
})
portfolio.addEventListener("click", (event)=>{
    const li = event.target;
    const ul = li.parentNode;
    ul.removeChild(li);
});
