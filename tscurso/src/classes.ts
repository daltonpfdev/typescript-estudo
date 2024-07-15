interface IPerson {
    id: number
    name: string
    age: number
    sayMyName(): string
}

class Person implements IPerson {
    readonly id: number
    name: string
    age: number

    constructor(id: number, name: string, age: number) {
        this.id = id
        this.name = name
        this.age = age
    }

    sayMyName(): string {
        return this.name
    }
}

const newPerson = new Person(1, "Dalton", 22)

console.log(newPerson.sayMyName())