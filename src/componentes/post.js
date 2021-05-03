import crearHeader from "./header.js";
// import firestoreInitialize from "../firebaseController/firestore.js";

export default function crearPost() {
  document.body.style.backgroundColor = "#DCE0DF";
  crearHeader();
  const htmlPost = `
     <div class="row">
     <div class="card">
     <div class="card-body">       
     <form id="task-form">
     <div class="form-group">
     <input type="text" id="titulo" class="form-control" placeholder="Title">
     </div>
     <div class="form-group">
     <textarea id="descripcion" rows="3" class="form-control" placeholder="Description"></textarea></div>
     <button class="btn-primary" id="btn-task-form">Save</button></form>
     </div>
     </div>
      <!-- Tasks List -->
      <div id="tasks-container"></div>
    </div>
  </div>  
   `;
  const postContainer = document.createElement("div");
  postContainer.innerHTML = htmlPost;
  document.getElementById("main").appendChild(postContainer);

  const db = firebase.firestore();

  const taskForm = document.getElementById("task-form");

  const savePost = (title, description) =>
    db.collection("post").doc().set({
      title,
      description,
    });

  taskForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const title = taskForm.titulo.value;
    const description = taskForm.descripcion.value;

    await savePost(title, description);

    taskForm.reset();
  });
}
