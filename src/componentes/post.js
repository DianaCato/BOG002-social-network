import crearHeader from "./header.js";

export default function crearPost() {
  document.body.style.backgroundColor = "#DCE0DF";
  crearHeader();
  const htmlPost = `
     <div class="row">
     <div class="card">
     <div class="card-body">       
     <form id="task-form">
     <div class="form-group">
     <input type="text" id="titulo" class="form-control" placeholder="Task Title" autofocus>
     </div>
     <div class="form-group">
     <textarea id="description" rows="3" class="form-control" placeholder="Task Description"></textarea></div>
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

  const taskForm = document.getElementById("task-form");

  taskForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const title = taskForm["titulo"].value;
    const descripcion = taskForm["description"].value;
  });
}
