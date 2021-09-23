function validar_usuario() {
    var nombreUsuario;
    nombreUsuario = document.getElementsByClassId("campoUsuario").value;
    
    if (nombreUsuario === "") {
        alert("El campo usuario esta vacío");
        return false;
    }
}