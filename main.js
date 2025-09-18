document.getElementById("form-registro").addEventListener("submit", function(event) {
  event.preventDefault(); // evita envío automático

  let nombre = document.getElementById("nombre").value.trim();
  let correo = document.getElementById("correo").value.trim();
  let password = document.getElementById("password").value.trim();

  // Validar nombre
  if (nombre === "") {
    alert("El nombre no puede estar vacío");
    return;
  }
  if (/^\d+$/.test(nombre)) {
    alert("El nombre no puede contener solo números");
    return;
  }

  // Validar correo
  if (correo === "") {
    alert("El correo no puede estar vacío");
    return;
  }
  let regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!regexCorreo.test(correo)) {
    alert("El correo no tiene un formato válido");
    return;
  }

  // Validar contraseña
  if (password.length < 8) {
    alert("La contraseña debe tener al menos 8 caracteres");
    return;
  }

  alert("Formulario enviado con éxito ✅");
});
