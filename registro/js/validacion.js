function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError(message) {
    const alertDanger = document.getElementById("alert-danger");
    alertDanger.querySelector(".alert-message").textContent = message;
    alertDanger.classList.add("show");

    setTimeout(() => {
        alertDanger.classList.remove("show");
    }, 2000);
}

function clearFormFields() {
    nombre.value = "";
    apellido.value = "";
    email.value = "";
    password1.value = "";
    password2.value = "";
    terminos.checked = false;

}

function clearFormFields() {
    nombre.value = "";
    apellido.value = "";
    email.value = "";
    password1.value = "";
    password2.value = "";
    terminos.checked = false;
  }

document.addEventListener("DOMContentLoaded", function() {
    const regBtn = document.getElementById("regBtn");
    const nombre = document.getElementById("nombre");
    const password1 = document.getElementById("password1");
    const password2 = document.getElementById("password2");
    const terminos = document.getElementById("terminos");

    regBtn.addEventListener("click", function() {
      if (nombre.value === "" || apellido.value === "" || email.value === "" ||
          password1.value === "" || password2.value === "" || !terminos.checked) {
        showAlertError();
        return;
      }

      if (password1.value.length < 6 || password1.value !== password2.value) {
        showAlertError();
        return;
      }

    if (!terminos) {
        showAlertError("Debe aceptar los términos y condiciones del servicio.");
        return false;
    }

    showAlertSuccess();
    return true;
}

document.getElementById("regBtn").addEventListener("click", function () {
    if (validateForm()) {
        clearFormFields();
    }
});

