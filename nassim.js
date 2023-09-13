const srcs = ["./imgs/football.png", "./imgs/jeuvideo.png", "./imgs/voyage.png"];
const img = document.querySelector('.caroussel');
let currentIndex = 0;

function nextSlide() {
    img.style.opacity = 0;

    setTimeout(() => {
        currentIndex = (currentIndex + 1) % srcs.length;
        img.setAttribute('src', srcs[currentIndex]);
        img.style.opacity = 1;
    }, 1000);
}

setInterval(nextSlide, 4000);