// Type
type Order = {
    productId: string
    price: number
}

type User = {
    firstName: string
    age: number
    email?: string
    password: string
    orders: Order[]
    register(): string
}

const user: User = {
    firstName: "Dalton",
    age: 22,
    password: "123123",
    orders: [{productId: '1', price:200}],
    register() {
        return "a"
    }
}

const printLog = (message: string) => {}

printLog(user.email!)

// Unions
type Author = {
    books: string[]
}

const author: Author & User = {
    firstName: "Dalton",
    age: 2,
    books: ['1'],
    password: 'gdrgidjtiophgjdh',
    orders: [],
    register() {
        return "b"
    }
}

// Interfaces
interface UserInterface {
    readonly firstName: string
    email: string
    login(): boolean
}

const emailUser: UserInterface = {
    email: "Dalton@dalton.com",
    firstName: "Dalton",
    login() {
        return false
    }
}

// emailUser.firstName = '12' Não deixa alterar o readonly
emailUser.email = "dalton.outroemail@gmail.com"

interface AuthorInterface {
    books: string[]
}

const newAuthor: UserInterface & AuthorInterface = {
    email:"newauthor@agsistemas.com",
    firstName: "Aufred",
    books: ['Dança da morte'],
    login() {
        return true
    }
}