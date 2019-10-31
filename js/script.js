const button = document.querySelector("#change");
const boxElement = document.querySelector(".box");
const name ="Lasse";

button.addEventListener("click", displayName);

function displayName(){
    console.log(name);
    boxElement.textContent = name;
    boxElement.classList.toggle("change");
}
