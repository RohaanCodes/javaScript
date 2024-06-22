const array = [1,2,3,4,5,6,7,8,9,10]

//console.log(array.length);

for (let index = 0; index < array.length; index++) {
    const element = array[index];

   // console.log(`element = ${element} index = ${index} , ${element}*${index}`);
    
}

const frutits = ['mango','apple','banana','berry']
for (const fruit of frutits) {
   // console.log(fruit);
}


 //maps => a key value structure 

 const map = new Map()

 map.set('pk', 'Pakitan')
 map.set('uae','United Arab Emirates')

// console.log(map);

 for (const [key , value] of map) {  // loop for map to print key and vlaues
    //console.log(key, "-", value);
 }


 const user = { // wil dealt later
    name: 'rohan',
    id: 123,
    email: 'rohan@xyz',
        login: true}


for (const data of Object.values(user)) {
   // console.log(data);
}

// for in loop for objects  can also work on arrays

for (const key in user) {
    //console.log(key, user[key]);  // printing key value pair for objects
}


//for each loop  - takes a call back funtion

// mostly used for array

const languages = ['cpp','js','python','php']

languages.forEach((element)=>{
    //console.log(element);
})

//you can also pass function in a for each loop

function print (item){
    console.log(item);
}

//languages.forEach(print)

languages.forEach((item, index, arr)=>{ // can contian element , index and whole arry itself
    //console.log(item, index, arr);
})

// fro each loop on arrays containing objects
const database = [
    {
        lang: 'java',
        ex: '.java'
    },
    {
        lang: 'c++',
        ex: '.cpp'
    },
    {
        lang: 'python',
        ex: '.py'
    }
]

database.forEach((item)=>{
    console.log(item.ex, item.lang);
})