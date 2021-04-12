// Este es el punto de entrada de tu aplicacion

import { myFunction } from './lib/index.js';

myFunction();

const formulario = document.createElement ('form');

const html = `
<div> <input type="email" class="usuario" placeholder="Ingrese email" /><div/>
<div><input type="password" class="contraseña" placeholder="Ingrese contraseña"/><div/>

<div><button class="btnI">Ingresar</button><div/>
<div><button class="btnR">Registrate</button><div/>

`
formulario.innerHTML = html;

document.getElementById('main').appendChild(formulario);
