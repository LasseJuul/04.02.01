/*let login = "hejsa";
let pw = "nejtak";

if (pw == "nejtak") {
    console.log("you're in");
}

else {
    console.log("you're out")
}*/

const on_off_switch = document.querySelector("#myswitch"); /*Makes button refers to id in html #myswitch*/
on_off_switch.addEventListener("click", changeSrc); /*names it, adds click, function recall for later*/

let softpen_image = document.querySelector("#mysoftpen"); /*variable softpen image added. Looks in document for id*/

function changeSrc (){ /*makes function*/
    console.log("function to change image.src"); /*actually not nessecary, make so we can check log for what happens */
    if (softpen_image.getAttribute('src') == "softpen_stopped.gif") { /*if statement. Names it, finds attribute 'src' and names it softpen_image */
        softpen_image.src = "softpen_active.gif"; /*changes the 'src' which changes the image*/
        on_off_switch.textContent="turn it off";  /*changes text of button*/
    }
    else {
        softpen_image.src ="softpen_stopped.gif"; /*changes back to stopped gif*/
        on_off_switch.textContent="turn the gif on"; /*changes text of button*/
    }
}
