function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });} //Es para el btnInicio


 //Es para el modal del login
document.getElementById("clearButton").addEventListener("click", function() {
document.getElementById("loginForm").reset();});

document.getElementById('product-form').addEventListener('submit', function(event) {
    let products = document.querySelectorAll('input[name="product"]:checked');
    let size = document.querySelector('input[name="size"]:checked');

    if (products.length === 0) {
        alert('Por favor, seleccione al menos una prenda.');
        event.preventDefault();
        return;
    }

    if (!size) {
        alert('Por favor, seleccione un talle.');
        event.preventDefault();
        return;
    }
});

document.getElementById('contact-form').addEventListener('submit', function(event) {
    let asunto = document.getElementById('Asunto').value;
    let name = document.getElementById('Name').value;
    let apellido = document.getElementById('Apellido').value;
    let email = document.getElementById('Subject').value;
    let message = document.getElementById('Message').value;
    
    if (!asunto || !name || !apellido || !email || !message) {
        alert('Por favor, complete todos los campos.');
        event.preventDefault();
        return;
    }

    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert('Por favor, ingrese un correo electrónico válido.');
        event.preventDefault();
        return;
    }
});
