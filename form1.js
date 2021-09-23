function validar_usuario(string) {
    var nombreUsuario;
    nombreUsuario = string.value;
    let alfanum = /\w/;
    let mayus = /[A-Z]/;

    if (nombreUsuario === "") {
        alert("El campo usuario esta vacío");
        return false;
    }
    else if (!alfanum.test(nombreUsuario)) {
        alert("Solo debe contener caracteres alfanuméricos.");
        return false;
    }
    else if (nombreUsuario.length<6) {
        alert("Debe tener una longitud mínima de 6 caracteres.");
        return false;
    }
    else if (!mayus.test(nombreUsuario.charAt(0))) {
        alert("Debe comenzar por una letra mayúscula.");
        return false;
    }
    else if (nombreUsuario.length>12) {
        alert("Debe tener una longitud máxima de 12 caracteres.");
        return false;
    }
}

function validar_contrasena(string) {
    var contrasena;
    contrasena = string.value;
    let caracespe = /\!|\@|\#|\-|\_/;
    let mayus = /[A-Z]/;

    if (contrasena === "") {
        alert("El campo contraseña esta vacío");
        return false;
    }
    else if (!caracespe.test(contrasena)) {
        alert("Debe contener al menos alguno de los siguientes caracteres especiales: ‘!’, ‘@’, ‘#’, ‘-’, ‘_’");
        return false;
    }
    else if (contrasena.length<8) {
        alert("Debe tener una longitud mínima de 8 caracteres.");
        return false;
    }
    else if (!mayus.test(contrasena.charAt(0))) {
        alert("Debe comenzar por una letra mayúscula.");
        return false;
    }
    else if (contrasena.length>16) {
        alert("Debe tener una longitud máxima de 16 caracteres..");
        return false;
    }
}

//function validar_usuario() {
//    var nombreUsuario;
//    nombreUsuario = document.getElementById("campoUsuario").value;
//    
//    if (nombreUsuario === "") {
//        alert("El campo usuario esta vacío");
//        return false;
//    }
//}