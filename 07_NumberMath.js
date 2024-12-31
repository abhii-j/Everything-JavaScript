const score=400;
console.log(score);

const newNO=new Number(100)

console.log(newNO); //100
console.log(newNO.toString().length); //3

console.log(newNO.toFixed(2)) //100.00

const otherNo=123.839;
console.log(otherNo.toPrecision(4))  //123.8

const no=10000000;
console.log(no.toLocaleString('en-IN')) //1,00,00,000       =>indian standerd(en-IN) ,by default is US Standerd


//+++++++++++++++++++++++++++++++++ Maths +++++++++++++++++++++++++++
// Math is library of javascript.

console.log(Math) //its object
console.log(Math.abs(-4)) //4 (return absolute value)
console.log(Math.round(4.6)) //5
console.log(Math.ceil(32.3)) //33
console.log(Math.floor(69.10)) //69
console.log(Math.pow(10,2)) //100
console.log(Math.min(3,1,5,1,7,9,)) //1
console.log(Math.max(3,1,5,1,7,9,)) //9

console.log(Math.random()) //"It is mostly used, and its value is always between 0 and 1."
console.log(Math.random()*10)
console.log(Math.floor(Math.random()*10)+1)

const min=1000
const max=2000

console.log(Math.floor(Math.random()*(max-min+1))+min)

// those are example of math function in javascript.

