
const array = [1,2,3,4,5,6]
//console.log(array[0]);

const array2 = ["rohan","ali"]
//console.table([array2]);

const arr = new Array(3,4,5,6) // another way to creating an array

//push and pop

array.push(7)
array.push(8)
array.push(9)
array.push(10)

array.pop() // removes last element from array

array.unshift(9) // adds 9 at the start
array.shift() //remove first element   (these are not optimized functions)
console.log(array);


let arra = [1,3,4,"rohan","ali",4,5] // can store any type of elemets in an array
console.log(arra[2]);
console.log(arra.includes(9));
console.log(arra.indexOf(4));

const joinArr = array.join() // converts array into a string
console.log(typeof array);
console.log(typeof joinArr);

//slice / splice

console.log('A',array);  // original array
const slice = array.slice(1,3); // does not change anything in the orignal
console.log(slice);

console.log('B',array); // array after slice (remains same)

const splice = array.splice(1,3); // manipulate the original array and deletes and elements mention in the splice
console.log(splice); 
console.log("C", array); // array after splice (range mention in the splice deleted form the original array)
