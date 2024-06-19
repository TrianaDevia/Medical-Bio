const containerCarrusel = document.getElementById('container__carrusel');
const carrusel = document.getElementById('carrusel');
const buttonLeft = document.getElementById('button__navigation--less');
const buttonRight = document.getElementById('button__navigation--more');

const slider = document.querySelectorAll('.slider');

const rootStyles = document.documentElement.style;

let slideCounter = 0;
let isInTransition = false;

const DIRECTION = {
  RIGHT: 'RIGHT',
  LEFT: 'LEFT'
};

const getTransformValue = () =>
  Number(rootStyles.getPropertyValue('--slide-transform').replace('px', ''));

const reorderSlide = () => {
  const transformValue = getTransformValue();
  rootStyles.setProperty('--transition', 'none');
  if (slideCounter === slider.length - 1) {
    carrusel.appendChild(carrusel.firstElementChild);
    rootStyles.setProperty(
      '--slide-transform',
      `${transformValue + slider[slideCounter].scrollWidth}px`
    );
    slideCounter--;
  } else if (slideCounter === 0) {
    carrusel.prepend(carrusel.lastElementChild);
    rootStyles.setProperty(
      '--slide-transform',
      `${transformValue - slider[slideCounter].scrollWidth}px`
    );
    slideCounter++;
  }
  isInTransition = false;
};

const moveSlide = direction => {
  if (isInTransition) return;
  const transformValue = getTransformValue();
  rootStyles.setProperty('--transition', 'transform 1s');
  isInTransition = true;
  if (direction === DIRECTION.LEFT) {
    rootStyles.setProperty(
      '--slide-transform',
      `${transformValue + slider[slideCounter].scrollWidth}%`
    );
    slideCounter--;
  } else if (direction === DIRECTION.RIGHT) {
    rootStyles.setProperty(
      '--slide-transform',
      `${transformValue - slider[slideCounter].scrollWidth}px`
    );
    slideCounter++;
  }
};

buttonRight.addEventListener('click', () => moveSlide(DIRECTION.RIGHT));
buttonLeft.addEventListener('click', () => moveSlide(DIRECTION.LEFT));

carrusel.addEventListener('transitionend', reorderSlide);

reorderSlide();

//autoplay

const autoplayInterval = 5000; // 5 segundos en milisegundos
let autoplayTimer;

const startAutoplay = () => {
  autoplayTimer = setInterval(() => {
    moveSlide(DIRECTION.RIGHT); // Llama a tu función para avanzar a la siguiente diapositiva
  }, autoplayInterval);
};

const stopAutoplay = () => {
  clearInterval(autoplayTimer);
};

// Inicia el autoplay cuando cargue la página
startAutoplay();

// Detén el autoplay cuando el usuario interactúe con el carrusel (por ejemplo, al hacer clic en una diapositiva)
carrusel.addEventListener('click', stopAutoplay);

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