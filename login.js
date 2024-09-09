// --------------------------------------------- De login a register 

const contenedor = document.getElementById('contenedor-chill');
const loginAppear = document.getElementById('login-link');
const registerAppear = document.getElementById('register-link');

registerAppear.addEventListener('click',function() {
    contenedor.classList.add('active');
})
loginAppear.addEventListener('click',function() {
    contenedor.classList.remove('active');
})

// --------------------------------------------- Logearse

const username = document.getElementById('user');
const password = document.getElementById('pass');
const buttonAccess = document.getElementById('button-access');

buttonAccess.addEventListener('click', (e) => {
    e.preventDefault()
    const data = {
        username: username.value,
        password: password.value
    }
    console.log(data)
})

// -------------------------------------------- Registrarse

// (completar despues)