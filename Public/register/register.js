import { postUsers } from "../services/llamadosregister.js";

const newuser = document.getElementById("newuser"); //declara el usuario de estudiante y de admin
const newemail = document.getElementById("newemail"); //declara los botones para entrar
const newpsw = document.getElementById("newpsw"); //declara la contrasena de estudiante y de admin
const crear = document.getElementById("crear"); //declara los botones para entrar

/*Evento de escucha al boton para crear un nuevo usuario */

crear.addEventListener("click",function () {

    console.log(newuser.value,newemail.value,newpsw.value,)//verificar que funciona

    postUsers(newuser.value,newemail.value,newpsw.value,) //si funciona!!!! :D

}) 