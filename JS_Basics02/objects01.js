
//sigelton objets => Oject.create

//objects lieterals

// symbols in objects

// creating a symbol

const mySymbol = Symbol("key")

const myObj = {

    name: "rohah",
    "full name": "Muhammad Rohan", // giving key value as a string then you can only access that vlue using the square not the dot operator 
    age : 22,
    emai: "muhammadrohan042002@gmail.com",
    password: "pass123",
    [mySymbol]: "key value" // declare symbol using this syntax other wise it will take it as a string
    
}

//key values always treatdd as strings i.e (name = "name")

// accessing the vlaues of objectts
// approach 1: using dot operator

console.log(myObj.emai);

// approach 2: using squre brackets and strings

console.log(myObj["emai"]);

// accessing symbols

console.log(myObj[mySymbol]);

// accessing the key full name which is string

console.log(myObj["full name"]); // only way to access

// printing an object 
console.log( myObj);


// changing value of an element of the object

myObj.name = "rohan"
console.log(myObj.name);

// freezing an object
//Object.freeze(myObj)

// try to change name after freezig the object
//myObj.name = "Ali"

//console.log(myObj); // object "myObj" has been freezed you can not change anything init further

//function1
myObj.greeting = function(){
    console.log("hello from rohan");
}
console.log(myObj.greeting());

// fucnton2
myObj.greeting2 = function(){
    console.log(`hello MR. ${this.name}`);
}

console.log(myObj.greeting2());
console.log(myObj); //object has been updated by two instacnes greeting and greeting2 both are of type functon


 
