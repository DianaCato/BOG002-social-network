export default function crearHeader() {
  const headerDiv = document.createElement("div");
  const htmlheader = `
  <nav class="responsive-nav">    
  <img id="logo" src="img/logo-huc.png" alt="logo"> 
    <details class="menu">  
      <summary class="nave"> Nickname </summary>
        <ul>
          <li><a href='#crear-publicacion'> Aportar</a></li>
          <li><a href='#social'> Social</a></li>    
          <li id="signOut"> Salir</li>
        </ul>
   </details>     
   </nav>
   
  `;
  headerDiv.innerHTML = htmlheader;
  document.getElementById("header").appendChild(headerDiv);
}
