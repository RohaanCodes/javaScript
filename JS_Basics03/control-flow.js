
const isLoggedIn = true
if (isLoggedIn) {
    console.log("successfully logged in");
}

else {
    console.log("log in please");
}

if ( 2==="2") {
    console.log("ture");
}

else {
    console.log("false");   
}

// NULLISH COLLISENCE OPERATOR ?? checks null and undefined

//let value;

//value = 5 ?? 10 =5

//value = null ?? 10 // gives you 10

//value = undefined ?? 15 // if function gives you the value then assigned 15 else undefined

//value = null ?? 10 ?? 20 // gives the first value 10

//console.log(value);


// terninary operator 

//condition ? true : false

const score = 100

score <= 100 ? console.log("good one " ): console.log("need to practice");