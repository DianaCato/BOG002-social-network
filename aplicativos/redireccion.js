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
      crearPost(user.displayName);
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

export function router() {
  window.addEventListener('hashchange', function () {
    switch (location.hash) {
      case "#login":
        console.log("estas en login")
        document.body.classList.remove("other");
        break;
      case "#registro":
        console.log("estas en registro");
         break;
      case "#crear-publicacion":
        console.log("puedes crear una publicacion");
        //document.body.className ="other";
        break;
      default:
        handleDefaultCase();
    }
  });
}