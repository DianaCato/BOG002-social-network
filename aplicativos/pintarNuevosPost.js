//import reaccion from "./like.js";

export default function snapshotData() {
  const user = firebase.auth().currentUser;
  // console.log(user);
  const taskcotainer = document.getElementById("tasks-container");
  const db = firebase.firestore();
  db.collection("post").onSnapshot((querySnapshot) => {
    taskcotainer.innerHTML = "";
    querySnapshot.forEach((doc) => {
      const tarea = doc.data();
      let listado = tarea.reaction;
      listado = listado.join(" ");
      tarea.id = doc.id;
      if (user.displayName != tarea.author) {
        taskcotainer.innerHTML += `<form class="post-form">
      <div>
        <h2>${tarea.title}</h2>
        <img src=${tarea.urlImg} alt="Foto del artículo" >
        <p class="contenido"  align="left">${tarea.description}</p>
        <p class="author"><i> Autor: ${tarea.author}</i></p>
        <div class="tooltip"><p class="mostrarReaccion">Han reaccionado ${tarea.count} personas </p>
        <span class="tooltiptext">${listado}</span>
        </div><br>
        <button class="btn-reaccion" data-id="${tarea.id}">Me interesa</button>
        <div/>
        </form>`;
      } else {
        taskcotainer.innerHTML += `<form class="post-form">
      <div>
        <h2>${tarea.title}</h2>
        <img src=${tarea.urlImg} alt="Foto del artículo" >
        <p class="contenido"  align="left">${tarea.description}</p>
        <p class="author"><i> Autor: ${tarea.author}</i></p>
        <div class="tooltip"><p class="mostrarReaccion">Han reaccionado ${tarea.count} personas </p>
        <span class="tooltiptext">${listado}</span>
        </div><br>
        <button class="btn-borrar" data-id="${tarea.id}">Eliminar</button>
        <button class="btn-edit" data-id="${tarea.id}">Editar</button>
        <button class="btn-reaccion" data-id="${tarea.id}">Me interesa</button>
        <div/>
        </form>`;
      }
    });
  });
}