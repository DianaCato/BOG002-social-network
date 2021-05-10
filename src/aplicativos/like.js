import { editPost } from "../firebaseController/firestoreFunctions.js";

export default function reaccion() {
  const user = firebase.auth().currentUser;

  const btnsReaccion = document.querySelectorAll(".btn-reaccion");
  btnsReaccion.forEach((btn) => {
    btn.addEventListener("click", async (e) => {
      let idPost = e.target.dataset.id;
      const encontrarPost = await editPost(idPost);
      const reaccionesPrevias = encontrarPost.data().reaction;
      const posicion = reaccionesPrevias.indexOf(user.displayName);
      if (posicion >= 0) {
        const like = encontrarPost.data().count - 1;
        reaccionesPrevias.splice(posicion, 1);
        guardarEdicion(idPost, {
          count: like,
          reaction: reaccionesPrevias,
        });
      } else {
        const like = encontrarPost.data().count + 1;
        reaccionesPrevias.push(user.displayName);
        guardarEdicion(idPost, {
          count: like,
          reaction: reaccionesPrevias,
        });
      }
    });
  });
}
