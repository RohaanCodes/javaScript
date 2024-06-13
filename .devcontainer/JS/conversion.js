// number convert
//let result = "100abc"; this conversion gives you the value of NAN not a number

//let result = null;  gives you 0 we dont want that

let result = undefined; // gives you NAN

console.log(typeof result);

let convert = Number(result);

console.log(typeof convert);
console.log(convert)

// true = 1
// false = 

// boolean convert
let isSignup = 1;

let boolConvert = Boolean(isSignup);

console.log(boolConvert);

// 1 = true
// 0 =  false
// "" = false
//"rohan" = true


//string convert
let number = 40

let stringConvert = String(number);

console.log(typeof stringConvert);
