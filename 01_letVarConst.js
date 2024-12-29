const accountId = 123;
let email = "abhishekj123@gmail.com";
var password = "abc123";
city = "nashik";

// accountId = 456; //not allowed to change value because it is constant
email = "jadhav123@gmail.com";
password = "890bsc";
city = "mumbai";

console.table([accountId,email, password, city]);

/* 
Prefer not use var
Because of issue in block scope and functional scope

Prefer to use const and let
 */
