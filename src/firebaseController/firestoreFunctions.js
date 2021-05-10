export function savePost(title, description, author, urlImg) {
  const db = firebase.firestore();
  db.collection("post").doc().set({
    title,
    description,
    author,
    urlImg,
    count:0,
    reaction:["N.N"],
  });
}
// borrar Post
export const borrarPost = (id) =>
  firebase.firestore().collection("post").doc(id).delete();

// Obtener data del Post
export const editPost = (id) =>
  firebase.firestore().collection("post").doc(id).get();

// Guardar cambios
export const updateEdit = (id, updateEdit) =>
  firebase.firestore().collection("post").doc(id).update(updateEdit);
