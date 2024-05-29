//Validaciones de formulario Contacto.

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

    //Login

    const $submit = document.getElementById("submit"),
          $password = document.getElementById("password"),
          $username = document.getElementById("username"),
          loggedIn = false;

    document.addEventListener("click", (e)=>{
        if(e.target === $submit) {
            if($password.value !== "" && $username.value !== ""){
                e.preventDefault();
                window.location.href = "../index.html";
                loggedIn = true;
                document.getElementById("Login").style.display = "none";
            }
            }
        })


    //let contenedor = document.querySelector("form-group");
    //let buttonQuitar = document.querySelector("#Limpiar");
    //buttonQuitar.addEventListener("click", LimpiarSeleccion);



    //function LimpiarSeleccion(){
        //if(contenedor.childElementCount > 0){
            //contenedor.removeChild(contenedor.lastChild);
        //}
    //}