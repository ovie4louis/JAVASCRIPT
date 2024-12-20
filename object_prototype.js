function Person (fName, lName) {
    this.firstName = fName,
    this.lastName = lName
}

const person1 = new Person("mary", "john");

console.log(person1);
Person.prototype.age = 23;
const person2 = new Person("louis", "love");
console.log(person1.age);
console.log(person2);