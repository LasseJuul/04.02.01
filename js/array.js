const body = document.querySelector("body");
const ul = document.querySelector("ul");
const button = document.querySelector("button");
const input = document.querySelector("input");

button.addEventListener("click", addItemToList);

function addItemToList(){
    const newLi = document.createElement("li");
    console.log(newLi);
    newLi.textContent=input.value;
    newLi.addEventListener("click", markIt);
    ul.appendChild(newLi);
}

let counter = 0;

function markIt(){
    counter++;
    this.removeEventListener('click', markIt);
    console.log(counter);
    if(counter == 2){
        ul.classList.add("change")
    }
    this.classList.add("mark")
}




