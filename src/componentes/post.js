import { nuevoPost, crud, snapshotData } from "../aplicativos/crearPost.js";
import crearHeader from "./header.js";

export default function crearPost(nick) {
  crearHeader(nick);
  const htmlPost = `
     <div class="row">
     <div id="card">
     <div id="card-body">       
     <form id="task-form">
     <div id="form-group">
     <input type="text" id="titulo" class="form-control" placeholder="Title">
     </div>
     <div id="form-group">
     <textarea id="descripcion" rows="3" class="form-control" placeholder="Description"></textarea></div>
     <progress value="0" max="100" id="uploader">0%</progress>
      <input type="file" value="upload" id="fileButton" />
     <button class="btn-primary" id="btn-task-form" >Save</button>
     <button class="btn-primary" id="btn-task-edit" style="display:none">Editar</button></form>
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
  nuevoPost(nick);
  snapshotData();
  crud();
}
