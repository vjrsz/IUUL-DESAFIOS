export class Class {
    #students

    constructor(...students) {
        this.#students = students;
    }

    putP1(matriculation, p1){
        let student = this.findStudent(matriculation)
        if ( student ){
            student.putP1(p1)
            return true
        }
        return false
    }

    putP2(matriculation, p2){
        let student = this.findStudent(matriculation)
        if ( student ){
            student.putP2(p2)
            return true
        }
        return false
    }

    addStudent(student){
        if ( ! this.findStudent(student.matriculation) ){
            this.students.push(student)
            return true
        }
        return false
    }

    removeStudent(matriculation){
        let index = this.findIndexStudent(matriculation)
        if(index !== -1){
            this.students.splice(index, 1);
            return true
        }
        return false
    }

    findStudent(matriculation) {
        return this.students.find(student => student.matriculation === matriculation);
    }
    findIndexStudent(matriculation) {
        return this.students.findIndex(student => student.matriculation === matriculation);
    }

    printStudents(){
        console.log('---------------------------------------------')
        console.log('Matriculation    Name        P1    P2    NF')
        this.students.forEach(student => {
            console.log(`${student.matriculation.padEnd(16)} ${student.name.padEnd(11)} ${student.p1 ? student.p1.toFixed(1).toString().padEnd(5) : '-    '} ${student.p2 ? student.p2.toFixed(1).toString().padEnd(3) : '-   '}  ${student.finalGrade().toFixed(1)}`)
        })
        console.log('---------------------------------------------')
    }

    get students() {
        return this.#students;
    }
}