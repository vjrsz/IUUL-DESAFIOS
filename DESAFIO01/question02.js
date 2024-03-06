import { createTriangle } from "./class/Menu.js";

console.log('## Triangle 1')
let triangle1 = createTriangle();
console.log('## Triangle 2')
let triangle2 = createTriangle();
console.log('## Triangle 3')
let triangle3 = createTriangle();

let triangle4 = triangle1.clone()

console.log(`\nThe triangle 1 is ${triangle1.type()}`)
console.log(`The triangle 2 is ${triangle2.type()}`)
console.log(`The triangle 3 is ${triangle3.type()}`)
console.log(`\nAre triangle 1 and 4 the same? ${triangle1.equals(triangle4)}`);

console.log(`\nThe perimeter of triangle 1 is ${triangle1.perimeter()}`)
console.log(`The perimeter of triangle 2 is ${triangle2.perimeter()}`)
console.log(`The perimeter of triangle 3 is ${triangle3.perimeter()}`)

console.log(`\nThe area of triangle 1 is ${triangle1.area()}`)
console.log(`The area of triangle 2 is ${triangle2.area()}`)
console.log(`The area of triangle 3 is ${triangle3.area()}`)