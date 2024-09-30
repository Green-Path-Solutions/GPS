// ?------------------------------------------------------------ Topbar icons
// !----------------------------------------------------- Solo login, falta corre y tel

document.getElementById('login-push').addEventListener('click', function() {
    window.location.href = 'login.html'
});

// ?------------------------------------------------------------ Wsp flotante

document.getElementById('wsp-flotante').addEventListener('click', function() {
    window.open('https://www.whatsapp.com', '_blank')
});

// ?----------------------------------------------------------- Nav hamburguer

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

