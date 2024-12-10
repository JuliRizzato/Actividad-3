//          MENÚ

const menuham = document.querySelector('.menuham');
const menu = document.querySelector('.menu');
const cerrarMenu = document.querySelector('.cerrar-menu');
const fondoOscuro = document.createElement('div')

    // Crear el fondo oscuro
    fondoOscuro.classList.add('fondo-oscuro');
    document.body.appendChild(fondoOscuro);

    // Abrir el menú
    menuham.addEventListener('click', () => {
    menu.classList.add('mostrar-menu');
    fondoOscuro.classList.add('activo');
    document.body.classList.add('menu-activo');
    });

    // Cerrar el menú
    cerrarMenu.addEventListener('click', cerrarMenuFunc);
    fondoOscuro.addEventListener('click', cerrarMenuFunc);

    function cerrarMenuFunc() {
        menu.classList.remove('mostrar-menu');
        fondoOscuro.classList.remove('activo');
        document.body.classList.remove('menu-activo');
    }

//          CARRUSEL

    let index = 0;
const images = document.querySelectorAll('.carrusel-imagenes .imagen');
const totalImages = images.length;

document.querySelector('.next').addEventListener('click', () => {
  if (index < totalImages - 1) {
    index++;
  } else {
    index = 0;
  }
  updateCarousel();
});

document.querySelector('.prev').addEventListener('click', () => {
  if (index > 0) {
    index--;
  } else {
    index = totalImages - 1;
  }
  updateCarousel();
});

function updateCarousel() {
  const offset = -index * 100;
  document.querySelector('.carrusel-imagenes').style.transform = `translateX(${offset}%)`;
}
