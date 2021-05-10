import { editPost, updateEdit } from "../firebaseController/firestoreFunctions.js";

export default function reaccion() {
    const user = firebase.auth().currentUser;

    //   const btnsReaccion = document.querySelectorAll(".btn-reaccion");
    //   console.log(btnsReaccion);
    document.addEventListener("click", async (e) => {
        if (e.target.matches(".btn-reaccion")) {
            
            let idPost = e.target.dataset.id;
            const encontrarPost = await editPost(idPost);
            const reaccionesPrevias = encontrarPost.data().reaction;
            const posicion = reaccionesPrevias.indexOf(user.displayName);
            if (posicion >= 0) {
                const like = encontrarPost.data().count - 1;
                 reaccionesPrevias.splice(posicion, 1);
                 updateEdit(idPost, {
                     count: like,
                     reaction: reaccionesPrevias,
                 })
             }
             else {
                 const like = encontrarPost.data().count + 1;
                reaccionesPrevias.push(user.displayName);
                updateEdit(idPost, {
                    count: like,
                    reaction: reaccionesPrevias,
                });
             }
        }
    });
}
