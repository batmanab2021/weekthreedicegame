const input = document.getElementById("input");
const button = document.getElementById("submit");

/*from previous ex*/
button.addEventListener('click', () => {
    let listItem = document.createElement('li');
    let list = document.getElementsByTagName('ul')[0];
    listItem.textContent = input.value;
   
    list.appendChild(listItem);
    input.value = '';
   })

   node.removeChild(childElement);
   li:last-child;
   const removeBtn = document.getElementById('remove');
   removeBtn.addEventListener('click', () => {
    let lastItem = document.querySelector('li:last-child');
    let list = document.getElementsByTagName('ul')[0];
    list.removeChild(lastItem);
   })

const theList = document.getElementById("list");
const remove = document.getElementById("remove");
let list = document.getElementsByTagName("ul")[0];
button.addEventListener("click", () => {
    if (input.value != "") {
        // create li element in memory
        let listItem = document.createElement("li");
        // adjust the li element properties
        listItem.textContent = input.value;
       
        // add the new li element to the array from reference
        list.appendChild(listItem);

        // assign a new blank value to input.value i.e. clear the field
        input.value = "";
    }
});

remove.addEventListener("click", ()=>{
    let.removechild(document.querySelector("li: last-child"));
    
});