function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError(message) {
    document.getElementById("alert-danger").classList.add("show");
    document.getElementById("alert-danger").querySelector(".alert-message").textContent = message;
}

function validateForm() {
    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const email = document.getElementById("email").value;
    const password1 = document.getElementById("password1").value;
    const password2 = document.getElementById("password2").value;
    const terminos = document.getElementById("terminos").checked;

    if (!nombre || !apellido || !email || !password1 || !password2) {
        showAlertError("Por favor, complete todos los campos.");
        return false;
    }

    if (password1.length < 6) {
        showAlertError("La contraseña debe tener al menos 6 caracteres.");
        return false;
    }

    if (password1 !== password2) {
        showAlertError("Las contraseñas no coinciden.");
        return false;
    }

    if (!terminos) {
        showAlertError("Debe aceptar los términos y condiciones del servicio.");
        return false;
    }

    showAlertSuccess();
    return true;
};
