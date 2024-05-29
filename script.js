

function validarFormulario() {
    var asunto = document.getElementById('Asunto').value;
    var nombre = document.getElementById('Name').value;
    var apellido = document.getElementById('Apellido').value;
    var email = document.getElementById('Email').value;
    var mensaje = document.getElementById('Message').value;

    if (asunto === '') {
        alert('Por favor, selecciona un asunto.');
        return false;
    }

    if (nombre === '' || apellido === '' || email === '' || mensaje === '') {
        alert('Por favor, completa todos los campos.');
        return false;
    }

    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Por favor, introduce una dirección de correo electrónico válida.');
        return false;
    }

    return true;
    }