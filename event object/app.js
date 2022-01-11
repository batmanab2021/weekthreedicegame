document.addEventListener("click", (event) => {
    console.log(Event);
    console.log(Event.target);
});

for (let listItem of listItems) {
    listItem.addEventListener("mouseover", () => {
        listItem.textContent = listItem.textContent.toUpperCase();
 });
    listItem.addEventListener("mouseout", () => {
        listItem.textContent = listItem.textContent.toLowerCase();
 });
}

list.addEventListener("mouseover", (event) => {
    event.target.textContent = event.target.textContent.toUpperCase();
   });
   list.addEventListener("mouseout", (event) => {
    event.target.textContent = event.target.textContent.toLowerCase();
   });
   
