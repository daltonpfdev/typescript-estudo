"use strict";
// tipos básicos de variáveis/constantes
const age = 22;
const firstName = "Dalton";
const isValid = true;
const idk = 5;
// tipos basicos de listas
const ids = [1, 2, 3, 4, 5];
const booleans = [true, false, false];
const names = ["Dalton", "Andressa", "Iraci", "Julio"];
// Tupla
const person = [1, "Dalton"];
// Lista de Tuplas
const people = [
    [1, "Dalton"],
    [2, "Andressa"],
    [3, "Felipe"],
];
// Intersections
const productId = false;
// Enum
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 1] = "Up";
    Direction[Direction["Down"] = 2] = "Down";
})(Direction || (Direction = {}));
const direction = Direction.Up;
// Type Assertions
const productName = "Boné";
let itemId;
let item2Id;
itemId = productName;
item2Id = productName;
console.log(direction);
