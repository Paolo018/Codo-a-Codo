function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });} //Es para el btnInicio


 //Es para el modal del login
document.getElementById("clearButton").addEventListener("click", function() {
document.getElementById("loginForm").reset();});

document.addEventListener('DOMContentLoaded', () => {
    // Fetch para obtener la cotización del peso argentino contra otras monedas
    fetch('https://api.exchangerate-api.com/v4/latest/ARS')
        .then(response => response.json())
        .then(data => {
            const rates = data.rates;
            document.getElementById('cotizacion-USD').textContent = rates.USD;
            document.getElementById('cotizacion-EUR').textContent = rates.EUR;
            document.getElementById('cotizacion-BRL').textContent = rates.BRL;
            document.getElementById('cotizacion-UYU').textContent = rates.UYU;
        })
        .catch(error => {
            console.error('Error fetching exchange rates:', error);
        });

    // Validación del formulario de registro
    const registerForm = document.getElementById('registerForm');
    if (registerForm) {
        registerForm.addEventListener('submit', (event) => {
            const password = document.getElementById('password').value;
            const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

            if (!passwordRegex.test(password)) {
                alert('La contraseña debe tener al menos una mayúscula, una minúscula, un carácter especial y un número.');
                event.preventDefault();
            }
        });
    }


      async function mostrarCotizaciones() {
        try {
          const response = await fetch('https://api.bluelytics.com.ar/v2/latest');
          const data = await response.json();
      
          document.getElementById("cotizacion-USD").textContent = data.blue.value_sell;
          document.getElementById("cotizacion-EUR").textContent = data.blue_euro.value_sell;
      
        } catch (error) {
          console.error("Error al obtener las cotizaciones:", error);
          document.getElementById("cotizacion-USD").textContent = "Sin datos";
          document.getElementById("cotizacion-EUR").textContent = "Sin datos";
        }
      }
    
      document.addEventListener('DOMContentLoaded', mostrarCotizaciones);
