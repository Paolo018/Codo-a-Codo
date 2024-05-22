function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
} //Es para el btnInicio


 //Es para el modal del login
var loginButton = document.getElementById("Login"); 
var loginModal = document.getElementById("loginModal");
loginButton.addEventListener("click", function() {
    loginModal.style.display = "block";
});
document.getElementById("closeButton").addEventListener("click", function() {
    loginModal.style.display = "none";
});
window.addEventListener("click", function(event) {
    if (event.target == loginModal) {
        loginModal.style.display = "none";
    }
});
