function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
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

      showAlertSuccess();
      clearFormFields();
      
      document.getElementById("alert-success").classList.add("show");
      setTimeout(function () {
        document.getElementById("alert-success").classList.remove("show");
      }, 3000);
      
    });
  });