// Js de mica (para el dark/light mode y el counter del home)

// *-------------------------------------------- dark & light

//------------------------ Guarda la preferencia del tema en localStorage

function setThemePreference(theme) {
   localStorage.setItem('theme', theme)
}

// --------------------------- Aplica el tema basado en la preferencia guardada

function applyTheme() {
   const savedTheme = localStorage.getItem('theme');
   if (savedTheme === 'dark') {
       document.body.classList.add('dark')
   } else {
       document.body.classList.remove('dark')
   }
}

// ............

const btnMoonMode = document.getElementById('moon-mode');
const btnSunMode = document.getElementById('sun-mode');

// ----------------------------  Evento para el botón de modo oscuro
btnMoonMode.addEventListener('click', function() {
   document.body.classList.add('dark')
   setThemePreference('dark')
});

// -------------------------------- Evento para el botón de modo claro
btnSunMode.addEventListener('click', function() {
   document.body.classList.remove('dark')
   setThemePreference('light')
});

// ------------------------------- Inicializa el tema cuando se carga la página

document.addEventListener('DOMContentLoaded', applyTheme)


