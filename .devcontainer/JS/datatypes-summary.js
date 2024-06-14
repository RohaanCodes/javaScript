//primitive
//number, boolean, string, null, undefined, symbol,
//bigint
const age = 45;
const temperature = null;
let address; // undefined
const isLoggedIn = true;
let id = Symbol(age);
let bigNumber = 23435535458787374837483467346n;

//non primitive

//arrays, objects, functions

const myArray = ["rohan","28"];


let x = function myFunction(){
    console.log("this is fucntion of js")
}

let obj = {
   message: "hello",
   name: "rohan",
   age: 22


}
console.table([obj])
console.log(obj);
console.log(typeof obj);