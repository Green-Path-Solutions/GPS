// Js de Mica 2 (para login, wsp, nav y form)

//! Obtener el nombre del usuario desde la URL
const urlParams = new URLSearchParams(window.location.search);
const userName = urlParams.get('user');

if (userName) {
    document.getElementById('login-link').innerHTML = `<p>Hola ${userName}</p>`
    document.getElementById('login-link').href = "#"; // O cualquier otra ruta o comportamiento deseado
}

// ------------------------
document.addEventListener('DOMContentLoaded', () => {
    fetch('http://localhost:8080/api/auth/session', {
        method: 'GET',
        credentials: 'include' // Esto es importante para enviar las cookies de sesión
    })
    .then(response => response.json())
    
    .then(data => {

        if (data.userName) {
            const loginLinkElement = document.getElementById('login-link');
            loginLinkElement.innerHTML = `<p>Hola ${data.userName}</p>`;
            loginLinkElement.href = "#"; // O cualquier otra ruta o comportamiento deseado
        }

    })
    .catch(error => console.error('Error fetching session data:', error));
});





// *-------------------------------------- Topbar icons
// !---------------------------------- Solo login, falta correo y tel

document.getElementById('login-push').addEventListener('click', function() {
    window.location.href = 'login.html'
});

// *--------------------------------------------------------- Wsp flotante

document.getElementById('wsp-flotante').addEventListener('click', function() {
    window.open('https://www.whatsapp.com', '_blank')
});


// *-------------------------------------------------- Nav hamburguer

const hamburgerToggle = document.querySelector('#hamburger-btn')
const navbar = document.querySelector('#navbar')

hamburgerToggle.addEventListener('click', onHamburguerClick)

function onHamburguerClick() {
    if(!navbar.classList.contains('open')) {
        navbar.classList.add('open')
    } else {
        navbar.classList.remove('open')
    }

};


// *-------------------------------------------- botones preguntas/respuestas

document.getElementById('solicitar-respuestas').addEventListener('click', function() {
   window.location.href = 'contacto.html';
 });
 
