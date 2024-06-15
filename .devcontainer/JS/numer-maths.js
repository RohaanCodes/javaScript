//****************************************NUMBERS******************************************************************************
const number = 100;
console.log(typeof number);
console.log(typeof number.toString()); // converting number to string

const anotherNumber = new Number(150); // using object  Number to create number
console.log(anotherNumber);
console.log(anotherNumber.toFixed(2));  // fixed number of integers after the decimal

const points = 345.5534 // rounding off main thing 
console.log(points.toPrecision(4)); // precise value => value less than the integers in the before decimal part will result in e+ values

const hunderds = 1000000
console.log(hunderds.toLocaleString()); // add commas to numbers 

//*****************************************MATHS****************************************************************************** */

console.log(Math);

console.log(Math.abs(-4))
console.log(Math.ceil(7.4848));
console.log(Math.floor(7.4848));

console.log(Math.floor(Math.random()*10+1));

const min = 10
const max = 20

console.log(Math.floor(Math.random()*(max - min)+min)); 
// floor gives you the lowest vlaue + random gives you value form (0-1) + (max-min) = 10 + now random gives you vlaue
// by multiplaying by 10 (1-20) we want 10-20 + so add min which is 10

// dice
const minimum = 1
const maximum = 7
console.log(Math.floor(Math.random()*(maximum - minimum)+minimum));