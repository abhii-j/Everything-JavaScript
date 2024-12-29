let score = "33";

console.log(typeof score);

let valueInNumber = Number(score);

console.log(typeof valueInNumber);
console.log(valueInNumber);

// "33" => 33
// "33abs" => NaN
// "false" => 0 ; "true" => 1

let isLogin = null;

let booleanIsLogin = Boolean(isLogin);
console.log(typeof isLogin); //nubmer
console.log(typeof booleanIsLogin); //boolean
console.log(booleanIsLogin);

// 1 => true
// "" => false
// "abhi" => true
// null => false

let xyz = 3;

let stringVar = String(xyz);
console.log(xyz);
console.log(typeof stringVar);

/*******************************Operation********************************** */

let str1 = "abhi";
let str2 = "jadhav";

console.log(str1 + str2); //abhijadhav

console.log("1" + 2); //12
console.log(1 + "2"); //12
console.log("2" + 3 + 3); //233
console.log(3 + 3 + "4"); //64
console.log(5 + "5" + "5"); //555
