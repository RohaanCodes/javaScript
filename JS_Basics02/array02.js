const fruits = ["apples","bananas","grapes"]
const vegetables = ["onion","potatoes","carrot"]

// fruits.push(vegetables) // merge an array with in an array
// console.log(fruits);
// console.log(fruits[3][1]);

const concatArray = fruits.concat(vegetables) // concats two arrays and return an array
console.log(concatArray);

//spred operator spreads all the elements of array into individual ones

const fruitsPlusVegetables = [...fruits, ...vegetables]
console.log(fruitsPlusVegetables);

const weridArray = [2,4,8,[1,3,9],5,7,[10,20,30,[40,50,60]]]
const flatArray = weridArray.flat(Infinity)
console.table([weridArray])
console.log(flatArray)

console.log(Array.from("rohan"));
console.log(Array.from({name:"rohan"})); //intresting have to give keys to create an array


//arrayof create array from elements
const hit1 = 100
const hit2 = 200
const hit3 = 300
const hit4 = 400
const arr = Array.of(hit1, hit2, hit3, hit4)
console.log(arr);