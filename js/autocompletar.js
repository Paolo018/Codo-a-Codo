const urlParams = new URLSearchParams(window.location.search);
const asunto = urlParams.get('Asunto');
const mensaje = urlParams.get('Message');

document.getElementById('Asunto').value = asunto;
document.getElementById('Message').value = mensaje;


