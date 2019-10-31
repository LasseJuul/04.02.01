let hero = document.querySelector("#hero");
hero.addEventListener("click", startAnimation);

function startAnimation(){
    hero.classList.toggle("enable");
}
