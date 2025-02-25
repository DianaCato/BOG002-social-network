import CrearFormulario from "../componentes/formulario.js";
import crearPost from "../componentes/post.js";
import VistaReglas from "../componentes/reglas.js";
import ingresar from "./ingreso.js";

export function irReglas() {
  window.location = "#reglas";
  if (document.getElementById("main").hasChildNodes()) {
    document
      .getElementById("main")
      .removeChild(document.getElementById("main").childNodes[0]);
    document.getElementById("main").appendChild(VistaReglas());
  }
}

export function verificarSesion() {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      main.innerHTML = "";
      window.location = "#crear-publicacion";
      crearPost();
    } else {
      const main = document.getElementById("main");
      main.appendChild(CrearFormulario());
      ingresar();
    }
  });
}

export function cerrarSesion() {
  document.addEventListener("click", (e) => {
    if (e.target.matches("#signOut")) {
      firebase
        .auth()
        .signOut()
        .then(() => {
          document.getElementById("main").innerHTML = "";
          document.getElementById("header").innerHTML = "";
          ingresar();
        })
        .catch((error) => {
          document.getElementById("main").innerHTML = error;
        });
    }
  });
}
