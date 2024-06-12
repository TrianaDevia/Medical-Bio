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



/*
// Variables
const SEGUNDOS_ENTRE_DIAPOSITIVAS = 3; // <---- IMPORTANTE
const CAROUSEL = document.querySelector(".container__carrusel");
const SLIDERS = CAROUSEL.querySelectorAll(".slider");

// Funciones

async function autoPlay(posicionPartida = SLIDERS.length) {
  // Obtiene el siguiente indice
  const SIGUIENTE_POSICION =
    SLIDERS.length - 1 > posicionPartida ? posicionPartida + 1 : 0;
  // Mueve el scroll al siguiente slider
  SLIDERS[SIGUIENTE_POSICION].scrollIntoView({ block: "center" });
  // Retardo antes de volver a ejecutarse
  await new Promise((res) => {
    setTimeout(res, SEGUNDOS_ENTRE_DIAPOSITIVAS * 1000);
  });
  // Creamos un objeto IntersectionObserver
  observerCarousel = new IntersectionObserver((entries) => {
        // Comprobamos todas las intesecciones.
        entries.forEach((entry) => {
            // Si es observable, entra
            if (entry.isIntersecting) {
              // Activamos
              autoPlay(SIGUIENTE_POSICION)
            }
        });
    });

  // Añado a mi Observable que quiero observar. En este caso el carousel
  observerCarousel.observe(CAROUSEL);
}

// Ejecuta
autoPlay();






//codigo funcional
/*
let currentIndex = 0;

const totalImages = document.querySelectorAll('.slider').length;

document.querySelector('.button__navigation--less').addEventListener('click', () => {
   navigate(-1);
});

document.querySelector('.button__navigation--more').addEventListener('click', () => {
   navigate(1);
});

function navigate(direction) {
   currentIndex = (currentIndex + direction + totalImages) % totalImages;
   const offset = -currentIndex * 100;
   const carrusel = document.querySelector('.carrusel');

   carrusel.style.transform = `translateX(${offset}%)`;
}

let autoPlayInterval = null;

function startAutoPlay(interval) {
   stopAutoPlay(); // Detiene cualquier autoplay anterior para evitar múltiples intervalos.
   autoPlayInterval = setInterval(() => {
      navigate(1); // Navega a la siguiente imagen cada intervalo de tiempo.
   }, interval);
}

function stopAutoPlay() {
   clearInterval(autoPlayInterval);
}

// Iniciar autoplay con un intervalo de 3.5 segundos.
startAutoPlay(3500);*/


