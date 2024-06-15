var c = 100
if(true){
    var c = 30
}
console.log(c);
// var can be accessed outside of scope and that is a problem
// when we console c it should output the vlaue of c which is global but it is printing the inner c 
// var does not follow global and local scope that is why we do not use it

function parentFunction (){
    const name = "rohan"
    console.log("printing from parent:" ,name);
    function childFucntion(){
        const age = 22
        console.log("printing form child:");
        console.log(name);
        console.log(age);
    }
    
    childFucntion()
}
parentFunction();
/* execution flow: 
    1- parent function got called out side of scope 
    2- parent function starts exectuing 
    3- parent function prints name
    4- child function comes inside the parent function compiler will go to the child functiion
    but do not print anything
    5- child function got called inside the parent function
    6- child function prints name and age 
    7- program terminates
 */

    //execution using if else
    if(true){
        const name = "rohan"

        if(name === "rohan"){
            const age = 22
            console.log(name);
            console.log(age);
        }
    }

    //Important point
    // **CHILD FUNCTION OF IF STATEMENT CAN ACCESS THE VARIBALES OF PARENT BUT PARENT CAN NOT
    // ACCESS THE VARIABLES OF CHILD - CHILD CAN TAKE ICE CREAM FROM A PARENT BUT PARENT CAN NOT
    // TAKE ICE CREAM FROM A CHILD (ETHICALLY WRONG)

    //*******************Hoisting******************************************
    console.log(add(3));
    function add (num){
        return num+1
    }

    // fucntion declared with above syntax not stored in any variable can be called before its 
    // declartion


   
    const addHoisting = function additon (num){
        return num + 2
    }
    console.log(addHoisting(4));
    
    // fucntion if stored in a variable can not be called before its declaration
    // this inshort is a concept called hoisting in js