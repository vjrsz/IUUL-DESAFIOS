export class Vertice {
    #x; #y

    constructor(x, y) {
        this.#x = x
        this.#y = y
        this._x = x;
        this._y = y;
    }

    distancia(vertice){
        const distanciaX = vertice.x - this.#x;
        const distanciaY = vertice.y - this.#y;

        return Math.sqrt(distanciaX ** 2 + distanciaY ** 2);
    }

    move(x, y){
        console.log(`Vertice alterado de (${this.#x}, ${this.#y}) para (${x}, ${y}).\n`)

        this.#x = x
        this.#y = y
    }

    equals(vertice){
        return (vertice.x === this.x && vertice.y === this.y)
    }


    get x() {
        return this.#x;
    }

    get y() {
        return this.#y;
    }
}