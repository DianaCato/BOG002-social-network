export function savePost(title, description, author){
  const db = firebase.firestore();
  db.collection("post").doc().set({
      title,
      description,
      author,
    })
};
// borrar Post
export const borrarPost = (id) => firebase.firestore().collection("post").doc(id).delete();

// Obtener data del Post
export const editPost = (id) => firebase.firestore().collection("post").doc(id).get();

// Guardar cambios
export const updateEdit = (id, updateEdit) => firebase.firestore().collection("post").doc(id).update(updateEdit);
