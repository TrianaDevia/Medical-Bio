const btnLeft = document.querySelector(".btn-left"),
      btnRight = document.querySelector(".btn-right"),
      slider = document.querySelector("#sliders"),
      sliderSection = document.querySelectorAll(".slider");


btnLeft.addEventListener("click", e => moveToLeft())
btnRight.addEventListener("click", e => moveToRight())

setInterval(() => {
    moveToRight()
}, 5000);


let operacion = 0,
    counter = 0,
    widthImg = 100 / sliderSection.length;

function moveToRight() {
    if (counter >= sliderSection.length-1) {
        counter = 0;
        operacion = 0;
        slider.style.transform = `translate(-${operacion}%)`;
        slider.style.transition = "none";
        return;
    } 
    counter++;
    operacion = operacion + widthImg;
    slider.style.transform = `translate(-${operacion}%)`;
    slider.style.transition = "all ease .6s"
    
}  

function moveToLeft() {
    counter--;
    if (counter < 0 ) {
        counter = sliderSection.length-1;
        operacion = widthImg * (sliderSection.length-1)
        slider.style.transform = `translate(-${operacion}%)`;
        slider.style.transition = "none";
        return;
    } 
    operacion = operacion - widthImg;
    slider.style.transform = `translate(-${operacion}%)`;
    slider.style.transition = "all ease .6s"
    
    
}   
//CARRUSEL
/*const sliders = document.querySelectorAll('.slider');
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
  document.querySelector('.sliders').style.transform = `translateX(${translateX}%)`;
}

setInterval(moveToNextSlide, 5000);

function moveToNextSlide() {
  currentIndex = (currentIndex + 1) % sliders.length;
  updateSliderPosition();
}*/

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