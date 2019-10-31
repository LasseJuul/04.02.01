const user_login = document.querySelector("#login");
const user_id = document.querySelector("#pw");
const submit_user_input = document.querySelector("#submit");
const message_to_user = document.querySelector("#msg");
const mypage = document.querySelector("body");

let attempts = 0;

submit_user_input.addEventListener("click", validateUserInput);

function validateUserInput () {
    if ((user_login.value == "MrVeryCool") && (user_id.value == "x")) {
        message_to_user.textContent = "Welcome back" + user_login.value;
    }
    else {
        message_to_user.textContent = "The login password combination you have provided cannot be recognized";
        attempts++;

        if (attempts > 3) {
            message_to_user.textContent = "DANGER! DANGER! you have used too many attempts!"
            mypage.classList.add("warning");
            setTimeout(function)(
            {window.location.replace("https://watchyourhack.com/")}, 4000;)
        }
    }
}
