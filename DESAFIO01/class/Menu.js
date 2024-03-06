// import PromptSync from 'prompt-sync';
// const prompt = PromptSync({ sigint: true });

import { Vertex } from "./Vertex.js";
import { Triangle } from "./Triangle.js";
import {Polygon} from "./Polygon.js";
import {Class} from "./Class.js";
import {Student} from "./Student.js";

export function createVertex() {
    console.log('Enter coordinates: ');
    let x = prompt('x = ');
    let y = prompt('y = ');

    return new Vertex(x, y);
}

export function createTriangle() {
    let vertices = Array()

    for (let i = 0; i < 3; i++) {
        console.log(`# Vertex ${i + 1}`)
        vertices.push(createVertex())
    }

    return new Triangle(vertices[0], vertices[1], vertices[2]);
}

export function createPolygon() {
    let polygon = new Polygon()
    let loop = 'n'
    let count = 1

    while ( loop.toLowerCase() === 'n' ){
        console.log(`# Vertex ${count++}`)

        if ( ! polygon.addVertex(createVertex()) ){
            console.log("The vertex already exists !")
        }

        loop = prompt('Do you want add one more vertex? (S/N)');
    }

    return polygon;
}

export function createStudent() {
    console.log('Enter matriculation: ');
    //let matriculation = prompt('name = ');
    let matriculation = "12345"
    console.log('Enter name: ');
    //let name = prompt('matriculation = ');
    let name = "valter"

    return new Student(matriculation, name);
}
export function createClass() {
    let class1 = new Class()
    let loop = 'n'
    let count = 1

    while ( loop.toLowerCase() === 'n' ){
        console.log(`# Student ${count++}`)

        if ( ! class1.addStudent(createStudent()) ){
            console.log("The student already exists !")
        }
        class1.putP1('12345', 10)
        if(count > 5) loop = 's'
        // loop = prompt('Do you want add one more vertex? (S/N)');
    }

    return class1;
}
