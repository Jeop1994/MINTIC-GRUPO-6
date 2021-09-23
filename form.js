var nombreUsuario = document.getElementsById("campoUsuario");
var contrasena = document.getElementsById("campoConstrasena");
var error = document.getElementsById("error");
error.style.color = "red"; 

function validar_usuario() {
    console.log("Enviando formulario...");

    var mensajesError = [];

    if (nombreUsuario === null || nombreUsuario.value === ""){
        mensajesError.push("Ingresa tu nombre");
    }

    if (contrasena === null || contrasena.value === ""){
        mensajesError.push("Ingresa tu contraseña");
    }

    error.innerHTML = mensajesError.join(", ");

    return false;
}