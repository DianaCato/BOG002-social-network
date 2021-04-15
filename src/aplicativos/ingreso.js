import { VistaReglas } from "./componentes/reglas.js";

export function ingresar() {
  const email = document.getElementById("usuario");
  const contrasena = document.getElementById("contrasena");
  //ingreso con correo y contraseña
  document.addEventListener("click", (e) => {
    if (e.target.matches("#btnI")) {
      e.preventDefault();
      console.log("click");
      // Autenticación del usuario
      auth
        .signInWithEmailAndPassword(email.value, contrasena.value)
        .then((userCredential) => {
          var user = userCredential.user;
          console.log("Puede ingresar", user);
          window.location = "#reglas";
          if (document.getElementById("main").hasChildNodes()) {
            document
              .getElementById("main")
              .removeChild(document.getElementById("main").childNodes[0]);
            document.getElementById("main").appendChild(VistaReglas());
          }
        })
        .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
          console.log(errorMessage);
          // ..
        });
    }
  });
}
