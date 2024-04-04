import { createPolygon } from "./class/Menu.js";

console.log('## Polygon 1')
let polygon1 = createPolygon();
console.log('\n## Polygon 2')
let polygon2 = createPolygon();
console.log('\n## Polygon 3')
let polygon3 = createPolygon();


console.log(`\nThe perimeter of polygon 1 is ${polygon1.perimeter()}`)
console.log(`The perimeter of polygon 2 is ${polygon2.perimeter()}`)
console.log(`The perimeter of polygon 3 is ${polygon3.perimeter()}`)


console.log(`\nThe quantity of vertices at polygon 1 is ${polygon1.qtdVertices()}`)
console.log(`The quantity of vertices at polygon 2 is ${polygon2.qtdVertices()}`)
console.log(`The quantity of vertices at polygon 3 is ${polygon3.qtdVertices()}`)
