import { updateUsers } from "../services/llamadosreset.js"; //Declara la funcion de Update que esta en los llamados

//traemos los elementos del DOM
const userName = document.getElementById("userName");
const newPsw = document.getElementById("newPsw");
const resetButton = document.getElementById("resetButton");
const resetMensaje = document.getElementById("resetMensaje");

//Agregar eventp al boton
resetButton.addEventListener("click", async function () {
  const userName = userName.value;
  const newPsw = newPsw.value;

 //Esto es para validar que se ingrese la nueva info
  if (!userName || !newPsw) { //si se niega el valor del campo de texto, es decir que no hay nada
    resetMensaje.textContent = "Por favor, ingresa el nombre de usuario y la nueva contraseña.";
    return;
  }

  try {
    // Llama a la función updateUsers para enviar la solicitud de restablecimiento
    const result = await updateUsers(userName, newPsw);

    if (result.success) {
      resetMensaje.textContent = "Contraseña actualizada.";
    } else {
      resetMensaje.textContent = result.message || "No se pudo actualizar la contraseña. Inténtalo de nuevo.";
    }
  } catch (error) {
    console.error("Error al restablecer la contraseña:", error);
    resetMensaje.textContent = "Ocurrió un error. Inténtalo más tarde.";
  }
});