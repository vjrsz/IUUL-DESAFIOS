export class Vertex {
    #x; #y

    constructor(x, y) {
        this.#x = x
        this.#y = y
    }

    distance(vertex){
        const distanceX = vertex.x - this.x;
        const distanceY = vertex.y - this.y;

        return Math.sqrt(distanceX ** 2 + distanceY ** 2);
    }

    move(x, y){
        console.log(`Vertex changed from (${this.x}, ${this.y}) to (${x}, ${y}).`)

        this.#x = x
        this.#y = y
    }

    equals(vertex){
        return (vertex.x === this.x && vertex.y === this.y)
    }

    get x() {
        return this.#x;
    }

    get y() {
        return this.#y;
    }

    toString(){
        return `(${this.x} , ${this.y})`
    }
}