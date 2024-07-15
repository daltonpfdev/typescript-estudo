// tipos básicos de variáveis/constantes
const age: number = 22
const firstName:string = "Dalton"
const isValid: boolean = true
const idk: any = 5

// tipos basicos de listas
const ids: number[] = [1,2,3,4,5]
const booleans: boolean[] = [true, false, false]
const names: string[] = ["Dalton", "Andressa", "Iraci", "Julio"]

// Tupla
const person: [number, string] = [1, "Dalton"]

// Lista de Tuplas
const people: [number, string][] = [
    [1, "Dalton"],
    [2, "Andressa"],
    [3, "Felipe"],
] 

// Intersections
const productId: string | number | boolean = false

// Enum
enum Direction {
    Up = 1,
    Down = 2
}
const direction = Direction.Up

// Type Assertions
const productName: any = "Boné"
let itemId
let item2Id
itemId = productName as string
item2Id = <string>productName

console.log(direction)
