export class Polygon{
    #vertices

    constructor(...vertices) {
        this.#vertices = vertices;

        if (!this.isValid()){
            throw new Error("The vertices do not create a valid Polygon.")
        }
    }

    get vertices() {
        return this.#vertices;
    }

    isValid(){
        return this.qtdVertices > 2 || this.qtdVertices() === 0
    }

    addVertex(vertex){
        if( this.vertices.includes(vertex) ){ return false }
        this.vertices.push(vertex)
        return true
    }

    perimeter(){
        let perimeter = 0
        let lastVertex = null
        this.vertices.forEach(vertex => {
            if ( lastVertex ) {
                perimeter += vertex.distance(lastVertex)
            }
            lastVertex = vertex
        })

        return perimeter
    }

    qtdVertices(){
        return this.vertices.length
    }
}