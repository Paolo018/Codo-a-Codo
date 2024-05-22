function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });} //Es para el btnInicio


 //Es para el modal del login
document.getElementById("clearButton").addEventListener("click", function() {
document.getElementById("loginForm").reset();});

