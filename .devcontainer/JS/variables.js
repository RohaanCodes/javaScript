const accountId = 12234;
let accountEmail = "xyz@gmail.com";
var accountPassword = "abc";//scope problem do not use var
accountCity ="lahore";//bad habit  

let accountState;//undefined value 
//accountId = 2; can not change const
accountEmail = "g@mail.com";
accountPassword="123";
accountCity="LHR";
console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

