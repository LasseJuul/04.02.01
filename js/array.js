const listElements = document.querySelectorAll("li");

listElements.forEach(displayIT); /*sets the forEach loop for 'each'*/

function displayIT(element) {
    element.addEventListener("click", markIT);
}

function markIT(){
    console.log("clicked");
    this.classList.toggle("mark")
}
