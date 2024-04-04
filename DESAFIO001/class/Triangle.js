import {Vertex} from "./Vertex.js";

export class Triangle {
    #vertex1; #vertex2; #vertex3;

    constructor(vertex1, vertex2, vertex3) {
        this.#vertex1 = vertex1;
        this.#vertex2 = vertex2;
        this.#vertex3 = vertex3;

        if ( ! this.isValid() ){
            throw new Error("The vertices do not create a valid triangle.")
        }
    }

    get vertex1() {
        return this.#vertex1;
    }

    get vertex2() {
        return this.#vertex2;
    }

    get vertex3() {
        return this.#vertex3;
    }

    perimeter(){
        let distances = this.getDistances()
        return distances.distance1 + distances.distance2 + distances.distance3
    }

    type(){
        let distances = this.getDistances()
        if ( distances.distance1 === distances.distance2 === distances.distance3 ){
            return "Equilatero"
        } else if( distances.distance1 !== distances.distance2 && distances.distance2 !== distances.distance3 ) {
            return "Escaleno"
        } else {
            return "Isoceles"
        }
    }

    clone(){
        return new Triangle(
            new Vertex(this.vertex1.x, this.vertex1.y),
            new Vertex(this.vertex2.x, this.vertex2.y),
            new Vertex(this.vertex3.x, this.vertex3.y))
    }
    area(){
        let distances = this.getDistances()
        const s = (distances.distance1 + distances.distance2 + distances.distance3) / 2;
        return Math.sqrt(s * (s - distances.distance1) * (s - distances.distance2) * (s - distances.distance3));
    }

    equals(triangle){
        return triangle.vertex1 === this.vertex1 &&
            triangle.vertex2 === this.vertex2 &&
            triangle.vertex3 === this.vertex3
    }

    isValid() {
        let distances = this.getDistances()

        return (distances.distance1 + distances.distance2 > distances.distance3) &&
            (distances.distance2 + distances.distance3 > distances.distance1) &&
            (distances.distance1 + distances.distance3 > distances.distance2)
    }

    toString(){
        return `${this.vertex1.toString()}, ${this.vertex2.toString()}, ${this.vertex3.toString()}`
    }

    getDistances(){
        return {
            distance1 : this.vertex1.distance(this.vertex2),
            distance2 : this.vertex2.distance(this.vertex3),
            distance3 : this.vertex1.distance(this.vertex3),
        }
    }
}