"use strict";
class Person {
    constructor(id, name, age) {
        this.id = id;
        this.name = name;
        this.age = age;
    }
    sayMyName() {
        return this.name;
    }
}
const newPerson = new Person(1, "Dalton", 22);
console.log(newPerson.sayMyName());
