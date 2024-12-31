// js is dynamically type language

/****************************DATA TYPE IN JS***********************/

// Primitive

// 7 type:  String,Number,Boolean,null(typedef is object),undefined,Symbol,BigInt

// Refrence Type / non primitive

// Array,Object,Functions   typedef is function object

/***************************MEMORY IN JS****************************/

// memory in js there are two type memory Stack Heap

// stack memory use on primitive data types and heap memory also use on Non-primitive data typeas 

/*Stack (premitive datatype) Examle : in stack not chnage original value , its just create dublicate copy

let varOne="abhishek"
let varTwo=varOne
varTwo="jayant"

console.log(varOne);
console.log(varTwo);
*/

/*Heap (non-premitive datatype) Example :in heap memory change by refrence
let userOne={
    email:"abhishek@12.com",
    id:"123"
}

let userTwo=userOne
userTwo.email = "anuja12@gmail.com"

console.log(userTwo.email);
console.log(userOne.email);
*/

/************************STRING IN JS**************************/

/* String concatination mostly use BACKTIKS(``) or template literals and is also called String interpolation

const str1 = "abhishek"
const repoConut = 55
console.log(`name is ${str1} and repo count is ${repoConut}`);

Methods:
.lenght() - this method find lenght of String
.toUpperCase() - this method convert lower string to upper case
.charAt() - find kontya position vr kont charectar ahe
.indexOf() - find kontya charectar kontya position vr ahe
.slice(0,2) - this method  allows negative value (mhanje string reverce karnyasathi = slice(-8,2))
.subString(3,4) - hi method sub string sathi use hote mhnaje apn jr ABHISHEK he string dili tr print hotan IS display hoil
.trim() - This method use remove start or end whitespaces (and there are two type trimstart() and trimend())
.replece() - replace('ji value change karachi ti','new value')
.split(separator,limit)

*/