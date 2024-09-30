const hamburgerToggle = document.querySelector('#hamburger-btn')
const navbar = document.querySelector('#navbar')

hamburgerToggle.addEventListener('click', onHamburguerClick)

function onHamburguerClick() {
    if(!navbar.classList.contains('open')) {
        navbar.classList.add('open')
    } else {
        navbar.classList.remove('open')
    }

}