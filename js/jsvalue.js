function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });}


async function mostrarCotizaciones() {
    try {
        const response = await fetch('https://api.bluelytics.com.ar/v2/latest');
        const data = await response.json();
      
        document.getElementById("cotizacion-USD").textContent = data.oficial.value_buy;
        document.getElementById("cotizacion-EUR").textContent = data.oficial_euro.value_buy;
      
    } catch (error) {
        console.error("Error al obtener las cotizaciones:", error);
        document.getElementById("cotizacion-USD").textContent = "N/A";
        document.getElementById("cotizacion-EUR").textContent = "N/A";
    }
    }
    document.addEventListener('DOMContentLoaded', mostrarCotizaciones);
  


document.getElementById("clearButton").addEventListener("click", function() {
document.getElementById("loginForm").reset();});


document.getElementById('registroForm').addEventListener('submit', function(event) {
    window.location.href = '../index.html';
});



ocument.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.button-iniciar').addEventListener('click', function() {
        document.getElementById('login').style.display = 'none';
        setTimeout(() => {
            window.location.href = '/index.html';
        }, 100);
    }) ; })