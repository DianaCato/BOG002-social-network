import {
  savePost,
  borrarPost,
  editPost,
  updateEdit,
} from "../firebaseController/firestoreFunctions.js";
//import imgPost from "./picturePost.js";

export function nuevoPost(name) {
  const taskForm = document.getElementById("task-form");

  let imgUrl;
  let task;
  const uploader = document.getElementById("uploader");
  const fileButton = document.getElementById("fileButton");

  // Vigilar selección archivo
  fileButton.addEventListener("change", function (e) {

    // Obtener archivo
    const file = e.target.files[0];

    // Crear un storage ref
    const storageRef = firebase.storage().ref("mis_fotos/" + file.name);

    // Subir archivo
     task = storageRef.put(file);

    // Actualizar barra progreso
    task.on(
      "state_changed",
      function progress(snapshot) {
        let percentage =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        uploader.value = percentage;
      },
      function error(err) {},
      function complete() {
        console.log("completado");
        storageRef.getDownloadURL().then((img) => {
       imgUrl = img;
       });
      }
    );
  });

  document.addEventListener("click", async (e) => {
    if (e.target.matches("#btn-task-form")) {
      e.preventDefault();
      const title = taskForm.titulo.value;
      const description = taskForm.descripcion.value;
      const author = name;
      const urlImg = imgUrl;
      await savePost(title, description, author, urlImg);

      taskForm.reset();
      uploader.value = 0;
    }
  });
}


export function crud() {
  const taskForm = document.getElementById("task-form");
  let id = "";

  // Borrando Post
  document.addEventListener("click", (e) => {
    if (e.target.matches(".btn-borrar")) {
      borrarPost(e.target.dataset.id);
    }
  });

  // Editando Post

  document.addEventListener("click", async (e) => {
    if (e.target.matches(".btn-edit")) {
      const doct = await editPost(e.target.dataset.id);
      const tareas = doct.data();
      id = doct.id;
      taskForm.titulo.value = tareas.title;
      taskForm.descripcion.value = tareas.description;
      taskForm["btn-task-edit"].style = "display:block";
      taskForm["btn-task-form"].style = "display:none";
      document.addEventListener("click", async (e) => {
        if (e.target.matches("#btn-task-edit")) {
          await updateEdit(id, {
            title: taskForm.titulo.value,
            description: taskForm.descripcion.value,
          });
          taskForm.reset();
          taskForm["btn-task-edit"].style = "display:none";
          taskForm["btn-task-form"].style = "display:block";
          id = "";
        }
      });
    }
  });
}
