const listElements = document.querySelectorAll("img");
const body = document.querySelector("body")

listElements.forEach(displayIt);

function displayIt(element) {
    element.addEventListener("click", markIt);
}

let counter = 0;
/*let img1Counter = 0;
let img2Counter = 0;*/

function markIt(){
    counter++;
    console.log(counter);
    if(counter == 2){
        body.classList.add("change")
    }
    this.classList.add("mark")
    this.removeEventListener('click', markIt, false);
}




