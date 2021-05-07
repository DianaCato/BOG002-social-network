export default function savePost(title, description) {
  const db = firebase.firestore();
  const taskForm = document.getElementById("task-form");
  const taskcotainer = document.getElementById("tasks-container");

  // borrar Post
  const borrarPost = (id) => db.collection("post").doc(id).delete();

  // Editar Post
  const editPost = (id) => db.collection("post").doc(id).get();
  let editStatus = false;
  let id = "";
  const updateEdit = () =>
    db.collection("post").doc(id).update(updateEdit);

  // guardar Post
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
          <button class="btn btn-secundario btn-edit" data-id="${tarea.id}">Editar</button>
          <div/>
          </form>`;

      // Borrando Post
      const btnsBorrar = document.querySelectorAll(".btn-borrar");
      btnsBorrar.forEach((btn) => {
        btn.addEventListener("click", async (e) => {
          await borrarPost(e.target.dataset.id);
        });
      });

      // Editando Post
      const btnsEditar = document.querySelectorAll(".btn-edit");
      btnsEditar.forEach((btn) => {
        btn.addEventListener("click", async (e) => {
          const doct = await editPost(e.target.dataset.id);
          const tareas = doct.data();
          editStatus = true;
          id = doct.id;
          taskForm.titulo.value = tareas.title;
          taskForm.descripcion.value = tareas.description;
          taskForm["btn-task-form"].innerText = "Editar";

          if (!editStatus) {
            await updateEdit(id, {
              title,
              description,
            });
          }
        });
      });
    });
  });
}
