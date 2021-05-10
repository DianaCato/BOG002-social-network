// cargando imagen
// Obtener Elementos
export default function imgPost() {
  let imgUrl;
  const uploader = document.getElementById("uploader");
  const fileButton = document.getElementById("fileButton");

  // Vigilar selección archivo
  fileButton.addEventListener("change", function (e) {
    // Obtener archivo
    const file = e.target.files[0];

    // Crear un storage ref
    const storageRef = firebase.storage().ref("mis_fotos/" + file.name);

    // Subir archivo
    const task = storageRef.put(file);

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
        //storageRef.getDownloadURL().then((img) => {
        //imgUrl = img;
        //});
      }
    );
  });
  return "cargandoIMG";
}
