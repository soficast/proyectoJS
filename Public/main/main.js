import { getConsultas, postConsultas } from "../services/llamadosmain.js"; //Se importan las dos acciones de get y post consultas desde llamados

//tomamos los elementos del DOM
const userName = document.getElementById("userName"); //declara el username
const nombreEstudiante = document.getElementById("nombreEstudiante"); //declara el nombre del estudiante
const consulta = document.getElementById("consulta"); //declara la consulta
const agregarButton = document.getElementById("agregarButton"); //declara el boton de agregar
const listaConsultas = document.getElementById("listaConsultas").getElementsByTagName('tbody')[0];//busca los elementos en el cuerpo de la tabla y devuelve la coleccion de esos elementos, el [0] indica el primer elemento 


async function cargarConsultas() { //se prepara una funcion asincrona para las consultas
    listaConsultas.innerHTML = ""; // Esto limpia la tabla antes de cargar nuevas consultas
  
    
    try {
        const consultas = await getConsultas(); //esto llama a la funcion get desde llamados y  agregara filas y columnas con la data segun se vayan agregando las consultas
        consultas.forEach(consulta => { // este for itera sobre cada elemento de consultas
            let fila = listaConsultas.insertRow(); //estas crean filas y columnas para los elementos que el usuario ingresa
            let celdaUserName = fila.insertCell();
            let celdaNombreEstudiante = fila.insertCell();
            let celdaConsulta = fila.insertCell();
            let celdaHora = fila.insertCell();
            
            //aqui se asigna el contenido que el usuario ingresa a la celda como valor
            celdaUserName.textContent = consulta.userName; //este consulta esta definido en los elementos del DOM
            celdaNombreEstudiante.textContent = consulta.nombreEstudiante;
            celdaConsulta.textContent = consulta.consulta;
            celdaHora.textContent = consulta.horaSolicitud;
        });
    } catch (error) {
        console.error("Error al cargar consultas:", error);
    }
}

// evento para el boton de agregar
agregarButton.addEventListener("click", async function () {
    let horaSolicitud = new Date().toLocaleTimeString(); //agrega la marca de tiempo de cuando se envia la consulta

    try {
        let contUserName = userName.value //obtiene el valor del username
        let contConsulta = consulta.value// obtieme el valor de la consulta
        let contNombrePersona = nombreEstudiante.value// obtiene el valor del nombre
         await postConsultas(contUserName, contNombrePersona, contConsulta, horaSolicitud  ); //aqui se llama a la funcion post desde llamados para cargar las consultas en la pagina
         cargarConsultas(); //reinicia el formulario de consultas
         userName.value = ""; //estos limpian los campos antes de hacer una nueva consulta
         nombreEstudiante.value = "";
         consulta.value = "";
     } catch (error) {
         console.error("Error al agregar consulta:", error);
     }
 });

cargarConsultas(); //carga las consultas al iniciar
setInterval(cargarConsultas, 5000); //esto es como un settimeout pero para recargar las consultas cada 5 segundos