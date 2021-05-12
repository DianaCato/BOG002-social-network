import { irReglas, verificarSesion } from "./aplicativos/redireccion.js";
import error from "./componentes/error.js";
import CrearRegistro from "./componentes/registro.js";

export function router() {
    window.addEventListener("hashchange", function () {
      switch (location.hash) {
        case "#login":
          //document.body.classList.remove("other");
          document.getElementById("main").innerHTML = "";
          document.getElementById("header").innerHTML = "";
          verificarSesion();
          break;
        case "#registro":
            CrearRegistro();
          break;
        case "#reglas":
          irReglas();
          break;
        case "#wall":
          verificarSesion();
          //document.body.className ="other";
          break;
        default:
          error();
      }
    });
  }
  