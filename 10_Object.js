// Two way to declare array:
// singleton:constructor ne object banvla tr singleton hoto.
// literals :not create singleton

//singleton:
// Object.create

// Object:object is combination of key-value pair

//object literals

const mySym = Symbol("key1");

const jsUser = {
  name: "abhishek",
  location: "pune",
  [mySym]: "mykey1", //to access Symbol in object (for interwive)
  age: 21,
  email: "abhi@gamil.com",
  "full name": "abhishek jadhav",
};

console.log(jsUser.email); //this is no correct way to access value
console.log(jsUser["email"]); // this is correct way to access value

// console.log(jsUser.full name);   in this line we can not access full name
console.log(jsUser["full name"]);
console.log(typeof jsUser[mySym]);

jsUser.email="anuja@gmail.com";

// Object.freeze(jsUser) //using this function we can not change  this object value.

jsUser.email="new@gmail.com";
console.log(jsUser);

jsUser.greeting =function(){
    console.log("hello is user");
}

jsUser.greetingTwo =function(){
    console.log(`Heelo ${this["full name"]}`)  //this is refer to current object .
}

console.log(jsUser.greeting);  //this is return refrence 
console.log(jsUser.greeting());  
console.log(jsUser.greetingTwo())