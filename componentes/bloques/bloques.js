import { bloques } from "./itemBloque.js";

export function cargarBloques(){
 
    let bloques = document.createElement("div")
    bloques.className="bloques"
     
    let miniblocs = document.createElement("div")
    miniblocs.className="minis"
    bloques.appendChild(miniblocs)

    let miniblocs2 = document.createElement("div")
    miniblocs2.className="minis2"
    bloques.appendChild(miniblocs2)

    let miniblocs3 = document.createElement("div")
    miniblocs3.className="minis3"
    bloques.appendChild(miniblocs3)
    
    let miniblocs4 = document.createElement("div")
    miniblocs4.className="minis4"
    bloques.appendChild(miniblocs4)

    let miniblocs5 = document.createElement("div")
    miniblocs5.className="minis5"
    bloques.appendChild(miniblocs5)

    let miniblocs6 = document.createElement("div")
    miniblocs6.className="minis6"
    bloques.appendChild(miniblocs6)


    

     
    return bloques;
}