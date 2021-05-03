import { savePost } from "../firebaseController/firestoreFunctions.js";

export default function nuevoPost(){
    const taskForm = document.getElementById("task-form");

    taskForm.addEventListener("submit", async (e) => {
      e.preventDefault();
    
      const title = taskForm.titulo.value;
      const description = taskForm.descripcion.value;
    
      await savePost(title, description);
    
      taskForm.reset();
    });
}
