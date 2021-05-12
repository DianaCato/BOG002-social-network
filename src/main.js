// Este es el punto de entrada de tu aplicacion
import CrearFormulario from "./componentes/formulario.js";
import {
  registrar,
  registroGoogle,
  registroFacebook,
} from "./aplicativos/app.js";
import ingresar from "./aplicativos/ingreso.js";
import CrearRegistro from "./componentes/registro.js";
import firebaseInitialize from "./firebaseController/firebaseConfig.js";
import crearPost from "./componentes/post.js";
import { cerrarSesion, verificarSesion } from "./aplicativos/redireccion.js";
import reaccion from "./aplicativos/like.js";
import { router } from "./router.js";

firebaseInitialize();

verificarSesion();

const main = document.getElementById("main");
// main.appendChild(CrearFormulario());

router();
registrar();
registroGoogle();
registroFacebook();
ingresar();
cerrarSesion();

document.addEventListener("click", (e) => {
  if (e.target.matches("a")) {
    // window.location.assign('registro');
    window.location ="#registro";
  }
});

// BOTON QUE VUELVE AL LOGIN
document.addEventListener("click", (e) => {
  if (e.target.matches("#volver")) {
    window.location = "#login";
  }
});

// Formulario para publicaciones
document.addEventListener("click", (e) => {
  if (e.target.matches("#btnC")) {
    main.innerHTML = "";
    window.location = "#wall";
    crearPost();
  }
});
