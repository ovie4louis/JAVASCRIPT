const person = {
    firstName: "peace",
    lastName: "louis",
    Age: 78,
    Address : {
        street: "abbi",
        city: "mende",
        state: "lagos",
        country: "Nigeria",
        zipcode: "234567"


    }
}

// delete person.company;
// console.log(person);
// console.log(person.Address.country);

for (let prop in person) {
    console.log(prop + " " + person[prop]);

}

const person1 = new Object();

person1.food ="rice";
console.log(person1);

const person2 = new Object({
    color : "red"
})

console.log(person2);