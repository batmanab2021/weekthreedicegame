const placeholder = document.getElementById("placeholder");
const input = document.getElementById("input");
const button = document.getElementById("button");
const list = document.getElementById("list");

button.addEventListener("click", () =>{
    heading.style.color ="goldenrod";
    heading.textContent = input.value;
    list.innerHTML = `<li>${input.value}</li>`;

});