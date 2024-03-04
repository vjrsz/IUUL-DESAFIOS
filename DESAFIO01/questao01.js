import { Vertice } from "./class/Vertice.js";
import PromptSync from 'prompt-sync';
const prompt = PromptSync({ sigint: true });

function lerVertice() {
    console.log('Insira as coordenadas: ');
    let x = prompt('x = ');
    let y = prompt('y = ');

    return {x, y};
}

let vertice1 = new Vertice(lerVertice())
let vertice2 = new Vertice(lerVertice())
let vertice3 = new Vertice(lerVertice())

let distancia1 = vertice1.distancia(vertice2);
let distancia2 = vertice2.distancia(vertice3);
let distancia3 = vertice1.distancia(vertice3);

console.log(`A distância entre os vértices 1 e 2 : ${distancia1.toFixed(2)}`);
console.log(`A distância entre os vértices 2 e 3 : ${distancia2.toFixed(2)}`);
console.log(`A distância entre os vértices 1 e 3 : ${distancia3.toFixed(2)}`);

console.log('Movendo vertice 1: \n')
vertice1.move(lerVertice());
console.log('Movendo vertice 2: \n')
vertice2.move(lerVertice());

console.log(`Vértices 1 e 3 são iguais? ${vertice1.equals(vertice3)}`);