interface MathFunc {
    (x:number, y:number): number;
}

const sum: MathFunc = (x:number, y:number): number => {
    return (x + y)
}
const valueSum = sum(1,2)

const sub: MathFunc = (x:number, y:number): number => {
    return (x - y)
}

console.log(sub(4,5))

const log = (message: string): void => {
    console.log(message)
}
log("Dalton")
