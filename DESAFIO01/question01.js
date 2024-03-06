import { createVertex } from "./class/Menu.js";

let vertex1 = createVertex()
let vertex2 = createVertex()
let vertex3 = createVertex()

let distance1 = vertex1.distance(vertex2);
let distance2 = vertex2.distance(vertex3);
let distance3 = vertex1.distance(vertex3);

console.log(`\nThe distance between the vertices 1 and 2 : ${distance1.toFixed(2)}`);
console.log(`The distance between the vertices 2 and 3 : ${distance2.toFixed(2)}`);
console.log(`The distance between the vertices 1 and 3 : ${distance3.toFixed(2)}`);

console.log('\nMoving vertices 1:')
let newVertex = createVertex()
vertex1.move(newVertex.x, newVertex.y);

console.log('\nMoving vertices 2:')
newVertex = createVertex()
vertex2.move(newVertex.x, newVertex.y);

console.log('\nMoving vertices 3:')
newVertex = createVertex()
vertex2.move(newVertex.x, newVertex.y);

console.log(`\nAre vertices 1 and 3 the same? ${vertex1.equals(vertex3)}`);