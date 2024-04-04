export class Student {
    #matriculation
    #name
    #p1
    #p2

    constructor(matriculation, name) {
        this.#matriculation = matriculation;
        this.#name = name;
        this.#p1 = undefined;
        this.#p2 = undefined;
    }

    finalGrade(){
        if (this.p1 !== undefined && this.p2 !== undefined){
            return ((this.p1 + this.p2) / 2)
        } else if( this.p1 !== undefined ){
            return (this.p1 / 2)
        } else if( this.p2 !== undefined ){
            return (this.p2 / 2)
        }

        return 0
    }

    get matriculation() {
        return this.#matriculation;
    }

    get name() {
        return this.#name;
    }

    get p1() {
        return this.#p1;
    }

    get p2() {
        return this.#p2;
    }

    putP1(value) {
        this.#p1 = value;
    }
    putP2(value) {
        this.#p2 = value;
    }
}