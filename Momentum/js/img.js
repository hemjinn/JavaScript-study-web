const image = ["0.jpg", "1.jpg", "2.jpg", "3.jpg"];
const body = document.querySelector("body");

function pickImage() {
    let num = Math.floor(Math.random() * image.length);
    const backgroundImage = `url('image/${image[num]}')`;
    body.style.backgroundImage = backgroundImage;
}

pickImage();