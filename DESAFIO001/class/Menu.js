import PromptSync from 'prompt-sync';
const prompt = PromptSync({ sigint: true });

import { Vertex } from "./Vertex.js";
import { Triangle } from "./Triangle.js";
import { Polygon } from "./Polygon.js";
import { Class } from "./Class.js";
import { Student } from "./Student.js";
import { Client } from "./Client.js";

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
    console.log('Enter data: ');
    let matriculation = prompt('name = ');
    let name = prompt('matriculation = ');

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
        loop = prompt('Do you want add one more vertex? (S/N)\n');
    }

    return class1;
}


export function createClient(){
    console.log(`# Client`)

    let name = askToUserWhile('Name', name => {
        return name.length >= 5
    })
    let cpf = askToUserWhile('CPF', cpf => {
        return /^\d{11}$/.test(cpf)
    })
    let birthdate = askToUserWhile('Birthdate', birthdate => {
        let birthdateSplit = birthdate.split('/').map(Number)
        let after18Years = new Date(birthdateSplit[2] + 18, birthdateSplit[1] + 1, birthdateSplit   [0]);
        let dateActual = new Date();
        return after18Years <= dateActual;
    })
    let monthlyIncome = askToUserWhile('Monthly Income', monthlyIncome => {
        monthlyIncome = parseFloat(monthlyIncome.replace(',', '.'))
        return monthlyIncome >= 0
    })
    let maritalStatus = askToUserWhile('Marital Status', maritalStatus => {
        const maritalStatusValid = ["C", "S", "V", "D"];
        return maritalStatusValid.includes(maritalStatus.toUpperCase());
    })
    let dependents = askToUserWhile('Dependents', dependents => {
        dependents = parseInt(dependents)
        return dependents > 0 && dependents < 10
    })

    return new Client(name, cpf, birthdate, monthlyIncome, maritalStatus, dependents);
}

function askToUserWhile(text, callback){
    while(true){
        let value = prompt(`${text} = `);

        if(callback(value)) return value;

        console.log(`${text} invalid, try again. `)
    }
}