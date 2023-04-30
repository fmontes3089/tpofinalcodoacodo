

function validarFormulario() {
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var telefono = document.getElementById("telefono").value;
    var email = document.getElementById("email").value;

    if (nombre == "") {
        alert("Por favor ingrese su nombre");
        return false;
    }

    if (apellido == "") {
        alert("Por favor ingrese su apellido");
        return false;
    }

    if (telefono == "" || !validarTelefono(telefono)) {
        alert("Por favor ingrese un número de teléfono válido");
        return false;
    }

    if (email == "" || !validarEmail(email)) {
        alert("Por favor ingrese una dirección de correo electrónico válida");
        return false;
    }
    alert("Formulario enviado corectamente");
    return true;
}

function validarTelefono(telefono) {
    var patron = /^[0-9]{10}$/; // Patrón para validar 10 dígitos numéricos
    return patron.test(telefono); // Retorna true si el teléfono cumple con el patrón
}

function validarEmail(email) {
    var patron = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Patrón para validar una dirección de correo electrónico
    return patron.test(email); // Retorna true si el correo electrónico cumple con el patrón
}


