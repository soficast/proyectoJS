import { getUsers } from "../services/llamadoslogin.js";// se importa la funcion get desde llamados
const userName = document.getElementById("userName"); //declara el usuario de estudiante y de admin
const psw = document.getElementById("psw"); //declara la contrasena de estudiante y de admin
const entrar = document.getElementById("entrar"); //declara los botones para entrar
const mensajeError = document.getElementById("mensajeError");//declara mensake de error si usuario es incorrecto

//agregar evento al boton de entrar
entrar.addEventListener("click", async function () {
    console.log(userName.value,psw.value); //ya funciona :D, eliminar despues

    const registeredusers = await getUsers () //se lllama la funcion get antes importada
    // se usa await para esperar que la "promesa" se resuelva y asi obtener los usuarios registrados
    console.log(registeredusers); //si funciona:D, eliminar despues

    for (let index = 0; index < registeredusers.length; index++) { //este for itera sobre los usuarios registrados para empezar a obtener la data

        console.log(registeredusers[index].userName); //funciona, eliminar log despues

        if (userName.value === registeredusers[index].userName && psw.value === registeredusers[index].psw) { //aqui se compara los valores registrafos vs los ingresados

            window.location.href="/main/main.html" //cuando el usuario es correcto, redirige a la main page
        } else {
            mensajeError.textContent = "Usuario o contraseña incorrectos. Intenta de nuevo."; //aqui hay que hacer un mensaje de error si el usuario es incorrecto
            /*ya funciona, recordar poner un / al inicio de la ruta*/
        }    
    }
})