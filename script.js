document.addEventListener("DOMContentLoaded", () => {
  // Variables para el cambio de tema
  const themeToggleButton = document.getElementById("theme-toggle");
  const body = document.body;
  const sunIcon = document.querySelector("#theme-toggle .sunny-outline");
  const moonIcon = document.querySelector("#theme-toggle .moon-outline");

  document.addEventListener("DOMContentLoaded", () => {
    // Código existente...

    // Resalta el enlace del menú de la página actual
    const navLinks = document.querySelectorAll(".nav-links a");
    const currentPath = window.location.pathname;

    navLinks.forEach((link) => {
      if (link.getAttribute("href") === currentPath) {
        link.classList.add("active");
      }
    });
  });

  document.addEventListener("DOMContentLoaded", () => {
    // Código existente...

    // Botón de cambio de idioma
    const languageToggleButton = document.getElementById("language-toggle");
    let currentLanguage = "es"; // Suponiendo que el idioma inicial es español

    languageToggleButton.addEventListener("click", () => {
      if (currentLanguage === "es") {
        currentLanguage = "en";
        // Aquí puedes añadir la lógica para cambiar el contenido a inglés
        alert("Cambiando el idioma a Inglés");
      } else {
        currentLanguage = "es";
        // Aquí puedes añadir la lógica para cambiar el contenido a español
        alert("Cambiando el idioma a Español");
      }
    });
  });


  // Variables para el carrusel
  const prevButton = document.querySelector(".carousel-prev");
  const nextButton = document.querySelector(".carousel-next");
  const carouselContainer = document.querySelector(".carousel-container");
  const slides = document.querySelectorAll(".carousel-slide");
  let currentIndex = 0;

  

  // Maneja el menú en dispositivos móviles
  navToggleButton.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

  // Maneja el carrusel
  function updateCarousel() {
    const offset = -currentIndex * 100;
    carouselContainer.style.transform = `translateX(${offset}%)`;
  }

  prevButton.addEventListener("click", () => {
    currentIndex = currentIndex > 0 ? currentIndex - 1 : slides.length - 1;
    updateCarousel();
  });

  nextButton.addEventListener("click", () => {
    currentIndex = currentIndex < slides.length - 1 ? currentIndex + 1 : 0;
    updateCarousel();
  });
});
// Agrega un simple carrusel para las noticias
let currentIndex = 0;
const items = document.querySelectorAll(".news-item");
const totalItems = items.length;

function showNextNews() {
  items[currentIndex].style.display = "none";
  currentIndex = (currentIndex + 1) % totalItems;
  items[currentIndex].style.display = "block";
}

setInterval(showNextNews, 5000); // Cambia cada 5 segundos

