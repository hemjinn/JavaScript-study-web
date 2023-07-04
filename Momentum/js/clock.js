const clock = document.querySelector("#clock");

function handleTime() {
    let date = new Date();
    let seconds = date.getSeconds();
    let minutes = date.getMinutes();
    let hours = date.getHours();

    clock.innerText = `${hours} : ${minutes} : ${seconds}`;
}

handleTime();
setInterval(handleTime, 1000);