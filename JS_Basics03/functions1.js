

function myfun (){
    console.log("hello rohan");
}
myfun() // withour paranthesis function is just the reference i.e myfun

function add (number1, number2){

    return number1 + number2    // returning values 
}

const result = add(5,5)
 
function loggedIn(username){
    // adding condition to the variable user name so it can not be empty
    if(!username){
        console.log("please enter a user name");
        return
    }
    return `${username} successfuly logged in`
}

console.log(loggedIn(123));
// this is split function to add multiple values in a single variable
function cartPrices(...price){
    return price 
}

console.log( cartPrices(100,200,300,400));

//passing object to the function

const obj ={
    name: "rohan",
    age: 22
}
function passingObj (anyObject){
    return `my name is ${anyObject.name} and my age is ${anyObject.age}`
}

console.log(passingObj(obj));
// you can aslo pass obj while creating it in the fucntion at the same time
console.log(passingObj({
    name:"ali",
    age:20
}));

//passing an array to the function
const arr = ["rohan", 22]
function passingArray (array){

    return array[1]
}

console.log(passingArray(arr));
// you can also create and pass array to the function at the same time 