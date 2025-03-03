import { postUsers } from "../services/llamadosregister.js"; //se importa la funcion post desde llamados

const userName = document.getElementById("userName"); //declara el usuario de estudiante y de admin
const newEmail = document.getElementById("newEmail"); //declara los botones para entrar
const psw = document.getElementById("psw"); //declara la contrasena de estudiante y de admin
const crear = document.getElementById("crear"); //declara los botones para entrar
const mensajeRegistro = document.getElementById("mensajeRegistro")//declara mensaje de registro exitoso

/*Evento de escucha al boton para crear un nuevo usuario */
crear.addEventListener("click",function () {

    console.log(userName.value,newEmail.value,psw.value,)//verificar que funciona /después hay que removerlo

    postUsers(userName.value,newEmail.value,psw.value,) //se llama a la funcion post que se importo al inicio, pasa por los parametros para que registre al nuevo usuario

    mensajeRegistro.textContent = "Usuario registrado correctamente"; //mensaje exito registro
    setTimeout(() => { // este timeout redirige a la pagina de login despues del mensjae
        window.location.href = "../login/login.html";
        
    }, 2000);

});