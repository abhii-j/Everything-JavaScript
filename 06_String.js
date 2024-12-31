const name = "abhi";
let age = 21;

console.log(name + age + " value"); //not prefer this for concatination

console.log(`name is ${name} and age is ${age}`); //prefer this (also called string interpolution)

const gameName = new String("Abhis-hek");

console.log(gameName[1]);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2))
console.log(gameName.indexOf('i'))

const newString = gameName.substring(0,5); // not take 5 index value
console.log(newString)


const anotherStr = gameName.slice(-7,2) //we can provide negative value for reverse

console.log(anotherStr)

const newStringOne= String("      abhi    ");
console.log(newStringOne)
console.log(newStringOne.trimStart()) //remove start space
console.log(newStringOne.trimEnd()) // remove end space
console.log(newStringOne.trim()) // remove both start and end space

const url="https://abhishek.com/abhishek%20jadhav";
console.log(url.replace('%20','-'));

console.log(newString.includes("A")) //return true or false

const secondNew = String("abhijadhav");
console.log(secondNew.split(''));

// Methods:
// .lenght() - this method find lenght of String
// .toUpperCase() - this method convert lower string to upper case
// .charAt() - find kontya position vr kont charectar ahe
// .indexOf() - find kontya charectar kontya position vr ahe
// .slice(0,2) - this method  allows negative value (mhanje string reverce karnyasathi = slice(-8,2))
// .subString(3,4) - hi method sub string sathi use hote mhnaje apn jr ABHISHEK he string dili tr print hotan IS display hoil
// .trim() - This method use remove start or end whitespaces (and there are two type trimstart() and trimend())
// .replece() - replace('ji value change karachi ti','new value')
// .split(separator,limit)
