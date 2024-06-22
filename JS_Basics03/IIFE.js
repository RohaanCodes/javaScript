//IIFE (IMMIDEATELY INVOKED FUNCTION EXPRESSION)


(function myfun(){
    // this a named IIFE beacuse it has a name myfun
    console.log("connection established");
}) (); // semi colon is important to tell the intreprator where to stop

// IIFE with arrow function and parameter
// simple IIFE without name 
(
    (name)=>{
        console.log(`hello ${name}`);
    }
) ("rohan"); // pass arguments right where you called it 