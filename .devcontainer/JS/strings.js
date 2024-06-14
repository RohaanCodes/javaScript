const name = "rohan"
const age = 22

console.log(`my name is ${name}and my age is ${age}`);

const string = new String(name);
 // string via objects gives to many mehtod access 
// this works on key vlaue pairs string[0] = r etc
 console.log(string[0]); 

 console.log(string.length)
 console.log(string.toUpperCase())
 console.log(string.charAt(0));
 console.log(string.indexOf("r"));

 const slice = string;
 console.log(slice.slice(-1,5));

 const newString = "     rohan.  "
console.log(newString);
console.log(newString.trim());

const url = "https://www.youtube.com/watch?v=fozwNnFunlo&list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37&index=11"
console.log(url.replace('=','++'));

console.log(url.includes("youtube"));


const str = "hello my name is rohan"
console.log(str.split(''));
console.log(str.split(' '));
console.log(str.split('my'));