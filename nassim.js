const caroussel1 = document.querySelector('#caroussel-1');
const caroussel2 = document.querySelector('#caroussel-2');

const srcsCaroussel1 = [
    './imgs/soccer.jpg',
    './imgs/puteaux.jpg',
]
const srcsCaroussel2 = [
    './imgs/fortnite.png',
    './imgs/gta5.jpg',
]

let indexCaroussel1 = 0;
let indexCaroussel2 = 0;

setInterval(() => {
    caroussel1.style.opacity = '0';
    setTimeout(() => {
        caroussel1.setAttribute('src', srcsCaroussel1[indexCaroussel1]);
        caroussel1.style.opacity = '1';
    }, 1000);
    indexCaroussel1++;
    if (indexCaroussel1 >= srcsCaroussel1.length) indexCaroussel1 = 0;
}, 4000);

setInterval(() => {
    caroussel2.style.opacity = '0';
    setTimeout(() => {
        caroussel2.setAttribute('src', srcsCaroussel2[indexCaroussel2]);
        caroussel2.style.opacity = '1';
    }, 1000);
    indexCaroussel2++;
    if (indexCaroussel2 >= srcsCaroussel2.length) indexCaroussel2 = 0;
}, 4000);