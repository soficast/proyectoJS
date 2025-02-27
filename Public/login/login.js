 
const user = document.getElementById("user"); //declara el usuario de estudiante y de admin
const psw = document.getElementById("psw"); //declara la contrasena de estudiante y de admin
const entrar = document.getElementById("entrar"); //declara los botones para entrar

//agregar evento al boton de entrar

entrar.addEventListener("click",function(){
    console.log(user.value,psw.value);
  
})