export default function error(){
    const root = document.querySelector(".grid-container");
    root.className = "error";
    const htmlRoot = `
    <div>
    <button id="volver">Retry</button>
    </div>`
    root.innerHTML = htmlRoot;

    const volver = document.querySelector("#volver");

    volver.addEventListener("click",()=>{
        location.reload();
    });
}