/* 10 Object Creation
Create an object using an object literal, constructor function, and es6 class.
The object should have the fields name and age.*/

class Car {

    run() {
        console.log("car is running")
    }
}

myCar = new Car

let student = {
    firstName = 'gg',
    lastName = 'kk'
};

class Person {

    constructor (firstName, lastName) {
        this.first = firstName
        this.last = lastName
    }
}

var bro = new Person('Jack','Sparrow')
