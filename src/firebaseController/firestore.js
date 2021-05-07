// export default function savePost(title, description) {
//   const db = firebase.firestore();

//   const titulo = document.getElementById("titulo");
//   const descripcion = document.getElementById("descripcion");

//   db.collection("post").add({
//     title,
//     description,
//   });

//   // pintar post
//   const taskcotainer = document.getElementById("tasks-container");
//   db.collection("post").onSnapshot((querySnapshot) => {
//     taskcotainer.innerHTML = "";
//     querySnapshot.forEach((doc) => {
//       const tarea = doc.data();
//       console.log(doc.data());
//       taskcotainer.innerHTML += `<form class="post-form">
//       <div>
//         <h3>${tarea.title}</h3>
//         <p>${tarea.description}</p>
//         <button>Eliminar</button>
//         <button>Editar</button>
//         <div/>
//         </form>`;
//     });
//   });
// }
