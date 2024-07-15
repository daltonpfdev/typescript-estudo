const returnValue = <T>(value: T) => value
const message = returnValue<string>('Hello World')
const count = returnValue<number>(5)

function getFirstValueFromArray<Type>(array: Type[]) {
    return array[0]
}
const firstValueFromStringArray = getFirstValueFromArray<string>(["1", "2", "3"])
const firstValueFromNumberArray = getFirstValueFromArray<number>([1,2,3])

// Promises
const returnPromise = async (): Promise<number> => {
    return 5
}

// Classes

class GenericNumber<T> {
    zeroValue: any
    sum: (x: any, y: any) => any

    constructor(zeroValue: any, sum: (x:any, y:any) => any) {
        this.zeroValue = zeroValue
        this.sum = sum
    }
}