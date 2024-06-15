
let mydate = new Date();

console.log(mydate.toDateString());

let createDate = new Date(2023,1,10,10,55)
//(year, month, date, hours, minutes, seconds)
console.log(createDate.toLocaleString());

//(mmddyy)

let mmddyy = new Date("10-02-2023")
console.log(mmddyy.toDateString());


//timestamp
let myTimeStamp = Date.now()
console.log(myTimeStamp);

//converting date object to time stamp

console.log(mmddyy.getTime())

// time stamps are easy to compare for the polls or hotel management etc..

// hwo to convert milliseconds into seconds

console.log(Math.floor(Date.now()/1000));


// tolocalstring function customiztion

console.log(  mydate.toLocaleString('default',{
    weekday:"long"
}));