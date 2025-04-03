
export function cargarMenu(){
    let header = document.createElement("header");
    header.className="header"

    let titulo = document.createElement("h3")
    titulo.innerText="Total X ="
    titulo.className="titulo"
    header.appendChild(titulo)

    
    let titulo2 = document.createElement("h3")
    titulo2.innerText="Total / = 0"
    titulo2.className="titulo2"
    header.appendChild(titulo2)

    return header;

}