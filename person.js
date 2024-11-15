class Person {
    constructor(){
    this.firstname = ""
    this.lastname = ""
    this.age = 0

}
}

class Student {
    constructor(firstname, lastname, age){
    this.firstname = firstname
    this.lastname = lastname
    this.age = age

}
}

const person1 = new Person()
person1.firstname = "John"
person1.lastname = "Noh"
person1.age = "24"

const person2 = new Person()
person2.firstname = "Mary"
person2.lastname = "Lom"
person2.age = "42"

const person3 = new Person()
person3.firstname = "Toms"
person3.lastname = "Rot"
person3.age = "64"

console.log(person1)
console.log(person2)
console.log(person3)

const student1 = new Student('Ruu', 'Duu', 55)
const student2 = new Student('Tri', 'Muu', 88)
const student3 = new Student('Loo', 'Suu', 33)

console.log(student1)
console.log(student2)
console.log(student3)