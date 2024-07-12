//CARRUSEL
const sliders = document.querySelectorAll('.slider');
let currentIndex = 0;

function goToSlide(index) {
  currentIndex = index;
  updateSliderPosition();
  const slides = document.querySelectorAll('.slider__text');
    slides.forEach((slider__text, i) => {
        slider__text.classList.toggle('active', i === currentIndex);
      });
}

function updateSliderPosition() {
  const translateX = -currentIndex * 100;
  document.querySelector('.slider-container').style.transform = `translateX(${translateX}%)`;
}

setInterval(moveToNextSlide, 5000);

function moveToNextSlide() {
  currentIndex = (currentIndex + 1) % sliders.length;
  updateSliderPosition();
}

//ANIMACION DE TEXTO BANNER


// MENU HAMBURGUESA

const menu = document.querySelector("#menu");
const openMenu = document.querySelector("#openMenu");
const closeMenu = document.querySelector("#closeMenu");

openMenu.addEventListener("click", () => {
    menu.classList.add("visible");
})

closeMenu.addEventListener("click", () => {
    menu.classList.remove("visible");
})