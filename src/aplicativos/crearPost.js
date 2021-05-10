import { savePost, borrarPost, editPost, updateEdit } from "../firebaseController/firestoreFunctions.js";

export function nuevoPost(name) {
  const taskForm = document.getElementById("task-form");

  document.addEventListener("click", async (e) => {
    if (e.target.matches("#btn-task-form")){
      e.preventDefault();
      const title = taskForm.titulo.value;
      const description = taskForm.descripcion.value;
      const author = name;
  
      await savePost(title, description, author);
  
      taskForm.reset();
    }
  });
}

export function snapshotData() {
  const user = firebase.auth().currentUser;
  console.log(user);
  const taskcotainer = document.getElementById("tasks-container");
  const db = firebase.firestore();
  db.collection("post").onSnapshot((querySnapshot) => {
    taskcotainer.innerHTML = "";
    querySnapshot.forEach((doc) => {
      const tarea = doc.data();
      tarea.id = doc.id;
     if (user.displayName != tarea.author){
        taskcotainer.innerHTML += `<form class="post-form">
      <div>
        <h3>${tarea.title}</h3>
        <p>${tarea.description}</p>
        <p><i> Autor: ${tarea.author}</i></p>
        <button class="btn-reaccion" data-id="${tarea.id}">Me interesa</button>
        <div/>
        </form>`;
     }
     else{
      taskcotainer.innerHTML += `<form class="post-form">
      <div>
        <h3>${tarea.title}</h3>
        <p>${tarea.description}</p>
        <p><i> Autor: ${tarea.author}</i></p>
        <button class="btn-borrar" data-id="${tarea.id}">Eliminar</button>
        <button class="btn-edit" data-id="${tarea.id}">Editar</button>
        <div/>
        </form>`;
     }
      
    })
  })
}

export function crud() {
  const taskForm = document.getElementById("task-form");
  let id = "";

  // Borrando Post
  document.addEventListener("click", (e) => {
    if (e.target.matches(".btn-borrar")) {
      borrarPost(e.target.dataset.id);
    }
  })

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
        if (e.target.matches("#btn-task-edit")){
          await updateEdit(id, {
            title: taskForm.titulo.value,
            description: taskForm.descripcion.value 
          });
          taskForm.reset();
          taskForm["btn-task-edit"].style = "display:none";
          taskForm["btn-task-form"].style = "display:block";
          id = "";
        }
      })
    }
  })
}