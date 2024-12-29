"use strict"; //treat all JS code as newer version

//number => 2 to power 53
//bigint => use to store big integer value
//string => ""
//boolean => true/false
//null => standalone value (null is nothing but object typdef)
//undefiend => it means to not assign any value to the variable
//symbol => unique(mostly use in react)

let age = 23;
let name = "abhishek";
let isLogin = true;
let state;
let id = Symbol('123')
let bigNumber = 121323232132143545443432n

console.log(typeof age); //number
console.log(typeof name); //string
console.log(typeof isLogin); //boolean
console.log(typeof state); //undefiend
console.log(typeof null); //object
console.log(typeof undefined); //undefiend

//typdef: is used to find out DataType of variable.
