const body = document.querySelector("body");
const ul = document.querySelector("ul");
const button = document.querySelector("button");
const input = document.querySelector("input");

button.addEventListener("click", addItemToList);

function addItemToList(){
    if (input.value) {
        const newLi = document.createElement("li");
        newLi.textContent=input.value;
        newLi.addEventListener("click", markIt);
        ul.appendChild(newLi);
        /*shotSnd.play();*/
        input.value=null;
    }
}

let counter = 0;

function markIt(){
    counter++;
    this.removeEventListener('click', markIt);
    /*this.style.cursor="default";*/
    if(counter == 2){
        ul.classList.add("change")
    }
    this.classList.add("mark")
    /*spawnSnd.play();*/
}




