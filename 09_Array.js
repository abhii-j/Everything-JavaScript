// Array : Array is object .
//         In javascript we can contain or store any type of Data like String,Number,Boolean....
//         javascript Array are resizable.
//         array 0 base idexing.
//         javascript array-copy-operation is create shallow copy.
//         shallow copy means property share same reprence.

// Array 
const myArray=[1,2,3,true,"abhi"];
const anotherArray =new Array(1,2,3,4,4)

let newArray=myArray  //create shallow copy and change the original array and add new value in the original array
newArray.push(2);
console.log(myArray)
console.log(anotherArray);


//Array Methods:
const myArr = [2,3,4,5]

// push() :it is used to add new element at the end of array.
myArr.push(7)
console.log(myArr); //2,3,4,5,7

// pop() : it is used to remove element at the end of array.
myArr.pop()
console.log(myArr); //2,3,4,5

//unshift() : it is used add new element at the start of array
myArr.unshift(9)
console.log(myArr); //9,2,3,4,5

//shift() : it is remove the element at the shart of array
myArr.shift();
console.log(myArr); //2,3,4,5

//includes() : its return true or false if element is include then return true othrwise return false.
console.log(myArr.includes(2));

//indexOf() :  //its return true or false if element is present then return index of the element otherwise return -1. 
console.log(myArr.indexOf(2));

//join() : it is used to join another array but its convert the array into the string.
const newArr = myArr.join();
console.log(myArr);
console.log(typeof newArr);

//slice() :  Returns a new array containing the selected elements. its modifies not original array

console.log("A: ",myArr);

const newArray2 = myArr.slice(1,4)
console.log("B: ",newArray2);



//splice() :Returns an array of the removed elements. its modifies original array

const newArray3 = myArr.splice(1,3)
console.log("c: ",newArray3);

console.log(myArr);



const a=['A','B','C','D'];
const b=['E','F'];

const anotherAr = [...a,...b];  //spred operator
console.log(anotherAr)
//or
const na=a.concat(b)
console.log(na);


console.log(Array.from("abhishek")); //convert into the array

let one=10
let two=20
let three=30
console.log(Array.of(one,two,three))    //of() take a set of elements







// Arrays are Objects: In JavaScript, an array is a special type of object.

// Store Any Data Type: JavaScript arrays can store different types of data, such as Strings, Numbers, Booleans, etc.

// Resizable Arrays: Arrays in JavaScript are dynamic and can grow or shrink in size as needed.

// Zero-Indexed: JavaScript arrays use zero-based indexing, meaning the first element is accessed with index 0.

// Shallow Copy for Arrays: When you create a copy of an array, JavaScript makes a shallow copy by default. This means that the properties in the copied array will share the same reference as the original array.

// Shallow Copy Explained: In a shallow copy, the references of complex objects (like objects or arrays within the array) are shared, not the actual data. This can lead to changes in the copied array affecting the original array if the inner elements are modified.



