export default function router() {
  window.addEventListener("hashchange", function () {
    switch (location.hash) {
      case "#login":
        // console.log("estas en login");
        document.body.classList.remove("other");
        break;
      case "#registro":
        console.log("estas en registro");
        break;
      case "#crear-publicacion":
        // console.log("puedes crear una publicacion");
        //document.body.className ="other";
        break;
      default:
    }
  });
}
