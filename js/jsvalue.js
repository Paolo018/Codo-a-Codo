function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });}


    async function mostrarCotizaciones() {
        try {
          const response = await fetch('https://api.bluelytics.com.ar/v2/latest');
          const data = await response.json();
      
          document.getElementById("cotizacion-USD").textContent = data.blue.value_sell;
          document.getElementById("cotizacion-EUR").textContent = data.blue_euro.value_sell;
      
        } catch (error) {
          console.error("Error al obtener las cotizaciones:", error);
          document.getElementById("cotizacion-USD").textContent = "N/A";
          document.getElementById("cotizacion-EUR").textContent = "N/A";
        }
      }
      
      document.addEventListener('DOMContentLoaded', mostrarCotizaciones);
  
  document.getElementById("clearButton").addEventListener("click", function() {
    document.getElementById("loginForm").reset();});
