

const numbers = [1,2,3,4,5,6,7,8,9,10]

//fitler returns value - set condition to return values

const resutl = numbers.filter((num)=>(num>5))

console.log(resutl);


// return value using for each loop 
const newNum = []

numbers.forEach(element => {
    if (element > 5) {
        
        newNum.push(element)
    }
});

console.log(newNum);

//maps

const arr = numbers.map((num) => num + 10)
console.log(arr);

//chaining

const chain = numbers
            .map((num) => num * 10)
            .map((num) => num + 1)
            .filter((num) => num > 40) 


console.log(chain);



//reduce method

const redArray = [1,2,3]
const initialValue = 0
const redResult = redArray.reduce((accumulator, currentValue)=>{
    console.log(`accumulartor: ${accumulator}   currrent value: ${currentValue}`);
    return accumulator + currentValue
}, initialValue)

console.log(redResult);


const shoppingCart = [

    {
        itemName: 'fruits',
        price: 140
    },

    {
        itemName: 'vegetables',
        price: 200
    },

    {
        itemName: 'dishes',
        price: 400
    },

    {
        itemName: 'soap',
        price: 149
    }
]

const sp = shoppingCart.reduce((accumulator, items) => {
    console.log(`item: ${items.itemName}   price: ${items.price}`);
    return accumulator + items.price 
}, 0)

console.log(`total cart price is : ${sp}`)