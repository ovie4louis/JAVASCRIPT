class Person{
    constructor(name){
        this.name = name;
    }
    greet(){
        console.log("hello " + this.name);
    }
}
class Student extends Person{

}

const student1 = new Student("peter");
console.log(student1.greet());
// const person1 = new Person("ovie");
// console.log(person1);