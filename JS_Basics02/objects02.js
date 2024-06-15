// singleton objects

//const twitterUser = new Object()

// another way of declaring objects
const androidUser = {}
androidUser.name = "rohan"
androidUser.age = 22
androidUser.email = "abc@gmail.com"

// nested objects
const appleUser = {
    UserfullName: {
        fullName:{
            firstName:"ali",
            lastName: "akbar"
        }
    },
    age: 22
     
}
// accessing nested objects
console.log(appleUser.UserfullName.fullName.firstName);
 
// merging two objects
const obj1 = {0:"a",1:"b"}
const obj2 = {2:"a",3:"b"}

const merge = {...obj1, ...obj2}
console.log(merge);

//merge using assign funtion

const merge2 = Object.assign({}, obj1, obj2) // braces are optional parameter but a good practice
console.log(merge2);


//when we fetch data from database it often comes in the form of an array having multiple objects

const userData = [
    {
        name:"rohan",
        id:1,
        department: "cs"
    },
    {
        name:"ali",
        id:2,
        department: "ee"
    },
    {
        name:"umer",
        id:3,
        department: "chemical"
    },
]
console.log(userData[0].department);

// getting keys from object

console.log(Object.keys(androidUser));

//getting value form object

console.log(Object.values(androidUser));

//checking wether the property exists or not in the object 

console.log(androidUser.hasOwnProperty('email'));