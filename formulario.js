// *-------------------------------------------------- Form contact

const regex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
const messageEmailValidator = document.getElementById('message-email-validator')

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(this);
    const formObject = {};
    formData.forEach((value, key) => formObject[key] = value);
    
    if( formObject.autorizacion === 'on') {
        formObject.autorizacion = true
    } else {
        formObject.autorizacion = false
    }

    if ( !regex.test(formObject.correo)) {
        messageEmailValidator.style.display = 'block'
        return
    }else {
        messageEmailValidator.style.display = 'none'; 
    }

    fetch('http://localhost:8080/contact', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formObject)
    })
    .then(response => {
        if (response.ok) {
            alert('Formulario enviado exitosamente');
            this.reset();
        } else {
            alert('Error al enviar el formulario');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Error al enviar el formulario');
    });
});