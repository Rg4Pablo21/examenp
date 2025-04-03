import { cargarBloques } from "./componentes/bloques/bloques.js";
import { bloques } from "./componentes/bloques/itemBloque.js";
import { cargarMenu } from "./componentes/header/header.js";

function cargarDOM(){

    let DOM = document.querySelector("#root")
    DOM.appendChild(cargarMenu())
    DOM.appendChild(cargarBloques())
    DOM.appendChild(bloques())

    return DOM;
}
cargarDOM();