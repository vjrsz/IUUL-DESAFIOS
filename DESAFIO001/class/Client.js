export class Client {
    #name
    #cpf
    #birthdate
    #monthlyIncome
    #maritalStatus
    #dependents

    constructor(name, cpf, birthdate, monthlyIncome, maritalStatus, dependents) {
        this.#name = name;
        this.#cpf = cpf;
        this.#birthdate = birthdate;
        this.#monthlyIncome = monthlyIncome;
        this.#maritalStatus = maritalStatus;
        this.#dependents = dependents;
    }

    print(){
        console.log(`###`)
        console.log(`Name = ${this.#name}`)
        console.log(`CPF = ${this.#cpf.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})$/, '$1.$2.$3-$4')}`)
        console.log(`Birthdate = ${this.#birthdate}`)
        console.log(`Monthly Income = ${parseFloat(this.#monthlyIncome.replace(',', '.')).toFixed(2)}`)
        console.log(`Marital Status = ${this.#maritalStatus}`)
        console.log(`Dependents = ${this.#dependents}`)
        console.log(`###`)
    }

    get name() {
        return this.#name;
    }

    set name(value) {
        this.#name = value;
    }

    get cpf() {
        return this.#cpf;
    }

    set cpf(value) {
        this.#cpf = value;
    }

    get birthdate() {
        return this.#birthdate;
    }

    set birthdate(value) {
        this.#birthdate = value;
    }

    get monthlyIncome() {
        return this.#monthlyIncome;
    }

    set monthlyIncome(value) {
        this.#monthlyIncome = value;
    }

    get maritalStatus() {
        return this.#maritalStatus;
    }

    set maritalStatus(value) {
        this.#maritalStatus = value;
    }

    get dependents() {
        return this.#dependents;
    }

    set dependents(value) {
        this.#dependents = value;
    }
}