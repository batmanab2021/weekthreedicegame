const input = document.getElementById("input");
const button = document.getElementById("submit");

button.addEventListener("click", ()=> {
    let listItem = document.createElement("li");
    listItem.textContent = input.value;
 //console.log(listItem);
})

const input = document.getElementById("input");
const button = document.getElementById("submit");
let list = document.getElementsByTagName("ul")[0];
button.addEventListener("click", ()=> {
 let listItem = document.createElement("li");
 listItem.textContent = input.value;
 list.appendChild(listItem);
 //console.log(listItem);
})




const theList = document.getElementById("list");
const showhidebtn=document.getElementById("showhide-btn");

showhidebtn.addEventListener("click", () => {
    let list = document.getElementsByTagName("ul")[0];
    if(list.style.display == "none") {
    list.style.display = "block";
    showhidebtn.textContent = "hide";
    } else {
    list.style.display = "none";
    showhidebtn.textContent = "show";           
    }
   })

   const input = document.getElementById('input');
   const button = document.getElementById('submit');
   const showhidebtn = document.getElementById("showhide-btn");

   button.addEventListener("click", () => {
    if (input.value != "") {
        // create li element in memory
        let listItem = document.createElement("li");
        // adjust the li element properties
        listItem.textContent = input.value;

        // create an array from a specified ul, acts similar to a parent node
        let list = document.getElementsByTagName("ul")[0];
        // add the new li element to the array from reference
        list.appendChild(listItem);

        // assign a new blank value to input.value i.e. clear the field
        input.value = "";
    }
});

showhidebtn.addEventListener("click", () => {
    let list = document.getElementsByTagName('ul')[0];
    if(list.style.display == 'none') {
    list.style.display = 'block';
    showhidebtn.textContent = 'hide';
    } else {
    list.style.display = 'none';
    showhidebtn.textContent = 'show';
    }
   })