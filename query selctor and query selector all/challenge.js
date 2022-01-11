 const myHeading = document.querySelector("#heading");
 const myList = document.querySelectorAll("li");
const colours = ['red', 'yellow', 'goldenrod', 'lightgreen', 'blue', 'purple'];

const listitemseven=document.querySelectorAll("li:nth-child(even)");
 const listitemsodd=document.querySelectorAll("li:nth-child(even)");

myHeading.addEventListener("click", () => {
     for (let i = 0; i < myList.length; i++) {
              myList[i].style.color = colours[i];
          }
      });
      const colours = ['red', 'yellow', 'goldenrod', 'lightgreen', 'blue', 'purple'];
      const listItems = document.querySelectorAll("li");
      for(let i = 0; i < listItems.length; i++) {
       listItems[i].style.color = colours[i];
      }

 console.log(listitems);
 console.log(listitems.length);
 

myHeading.addEventListener("click", () => {
     for (let i = 0; i < myList.length; i++) {
          if (myList[i].className == "green"){
              myList[i].style.color = "green";
          }
      }
  });

