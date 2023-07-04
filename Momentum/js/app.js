const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

const h1 = document.querySelector("#title");

const HIDDEN_CLASS = "hidden";

function handleSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASS)
    const username = loginInput.value;
    localStorage.setItem("username", username);
    paintTitle(username);
}

loginForm.addEventListener("submit", handleSubmit);

function paintTitle(username) {
    h1.classList.remove(HIDDEN_CLASS);
    h1.innerText = `안녕하세요 주니어 개발자 ${username} 입니다.`
}

const saveUsername = localStorage.getItem("username");
if (saveUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASS);
} else {
    paintTitle(saveUsername);
}