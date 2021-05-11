export default function crearHeader(nick) {
  const headerDiv = document.createElement("div");
  const htmlheader = `
  <nav class="responsive-nav">    
  <img id="logo" src="img/logo-huc.png" alt="logo"> 
    <details class="menu">  
      <summary class="nave"> ${nick}</summary>
        <ul>  
          <li id="signOut"> Salir</li>
        </ul>
   </details>     
   </nav>
   
  `;
  headerDiv.innerHTML = htmlheader;
  document.getElementById("header").appendChild(headerDiv);
}
