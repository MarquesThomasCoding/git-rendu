const srcs = ["./imgs/football.png", "./imgs/jeuvideo.png", "./imgs/voyage.png"];
const descriptions = [
    "Sa passion la plus évidente est le football.",
    "Les jeux vidéo constituent une autre de ses grandes passions.",
    "En dehors du football et des jeux vidéo, Nassim apprécie beaucoup le voyage. Il rêve de découvrir de nouveaux horizons, de plonger dans des cultures étrangères et d'explorer des pays lointains. Chaque opportunité de voyage est pour lui une aventure à ne pas manquer."];
const img = document.querySelector('.caroussel');
let currentIndex = 0;

function nextSlide() {
    img.style.opacity = 0;

    setTimeout(() => {
        currentIndex = (currentIndex + 1) % srcs.length;
        img.setAttribute('src', srcs[currentIndex]);
        document.querySelector('.img-description').innerHTML = descriptions[currentIndex];
        img.style.opacity = 1;
    }, 1000);
}

setInterval(nextSlide, 4000);