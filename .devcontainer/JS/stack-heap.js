//this is an  example of stack working on a primitive datatype if we change the value of one variable then the other one will not get affected
let CurrentValue = 22;
let updatedValue = CurrentValue;
updatedValue = 10;

console.log(CurrentValue);
console.log(updatedValue);

// implemetaion using heap
// heap changes in all varibles beacuse it uses
// refernce not copy

let obj = {
    name: "rohan",
    email:"rohan@gamil.com",
    password:1234
}

let obj2 = obj;

obj2.password = 2222;

console.log(obj.password);
console.log(obj2.password);