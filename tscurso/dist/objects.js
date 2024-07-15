"use strict";
const user = {
    firstName: "Dalton",
    age: 22,
    password: "123123",
    orders: [{ productId: '1', price: 200 }],
    register() {
        return "a";
    }
};
const printLog = (message) => { };
printLog(user.email);
const author = {
    firstName: "Dalton",
    age: 2,
    books: ['1'],
    password: 'gdrgidjtiophgjdh',
    orders: [],
    register() {
        return "b";
    }
};
const emailUser = {
    email: "Dalton@dalton.com",
    firstName: "Dalton",
    login() {
        return false;
    }
};
// emailUser.firstName = '12' Não deixa alterar o readonly
emailUser.email = "dalton.outroemail@gmail.com";
const newAuthor = {
    email: "newauthor@agsistemas.com",
    firstName: "Aufred",
    books: ['Dança da morte'],
    login() {
        return true;
    }
};
