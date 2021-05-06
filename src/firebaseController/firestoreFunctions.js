export default function savePost(title, description) {
  const db = firebase.firestore();
  const taskcotainer = document.getElementById("tasks-container");
  // borrar Post
  const borrarPost = (id) => db.collection("post").doc(id).delete();

  db.collection("post").add({
    title,
    description,
  });

  // pintar post
  db.collection("post").onSnapshot((querySnapshot) => {
    taskcotainer.innerHTML = "";
    querySnapshot.forEach((doc) => {
      const tarea = doc.data();
      tarea.id = doc.id;

      taskcotainer.innerHTML += `<form class="post-form">
        <div>
          <h3>${tarea.title}</h3>
          <p>${tarea.description}</p>
          <button class=" btn btn-primario btn-borrar" data-id="${tarea.id}">Eliminar</button>
          <button class="btn btn-secundario">Editar</button>
          <div/>
          </form>`;

      const btnsBorrar = document.querySelectorAll(".btn-borrar");
      btnsBorrar.forEach((btn) => {
        btn.addEventListener("click", async (e) => {
          await borrarPost(e.target.dataset.id);
        });
      });
    });
  });
}
