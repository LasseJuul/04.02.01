//Buttons
const leaf = document.querySelector("#leaf");
const btnRotate = document.querySelector("#btnRotate");
const btnWave = document.querySelector("#btnWave");
const btnMove = document.querySelector("#btnMove");
const btnInvis = document.querySelector("#btnInvis");
const btnSpin = document.querySelector("#btnSpin");


//Sound
const clickSound = document.querySelector("#clickSound");
const play1 = document.querySelector(".allButtons");

play1.addEventListener("click", playOneSound);
document.addEventListener("keydown", keyStroked);

function playOneSound() {
    if (this.id == ".allButtons") {
        theSound.play();
    }
}

function keyStroked(e) {
    if (e.key == "1") {
        theSound.play();
    }
}


//Button one - rotate
btnRotate.addEventListener("click", rotate);

function rotate() {
    /*leaf.classList="";*/
    /*buttonStop.classList="";*/
    /*buttonOne.classList="";*/
    leaf.classList.toggle("rotate");
    clickSound.play();
}


//Button two - wave
btnWave.addEventListener("click", wave);

function wave() {
    leaf.classList.toggle("wave");
    clickSound.play();
}

//Button three - move
btnMove.addEventListener("click", move);

function move() {
    leaf.classList.toggle("move");
    clickSound.play();
}

//Button four - invis
btnInvis.addEventListener("click", invis);

function invis() {
    leaf.classList.toggle("invis");
    clickSound.play();
}

//Button five - spin
btnSpin.addEventListener("click", spin);

function spin() {
    leaf.classList.toggle("spin");
    clickSound.play();
}
