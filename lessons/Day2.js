/* Numbers */
const score = 400
console.log(score)
 
const balance = new Number(100);
console.log(balance); // Number[100] prototype :Number

balance.toString();
typeof balance // Object

a = balance.toString();
typeof a //String

//Number methods
balance.toFixed(2) // 100.00

t = 123.89
balance.toPrecision(2) //12
balance.toPrecision(3) //124

hund = 1000000;
hund.toLocaleString(); //1,000,000 US standard conversion of numbers
hund.toLocaleString('en-IN') // indian

Number.EPSILON() // and other properity

/* Math */
console.log(Math); // Math objec
Math.abs(-1); // - to +
Math.round(2.5) // 3
Math.ceil(2.2); //3
Math.floor(2.9) //2
Math.min(2,3,4,4); //2
Math.max(2,3,1,3); //3
Math.random() // always between 0 and 1
Math.floor((Math.random()*10) +1); //to avoid 0 using +1

const max = 20
const min = 10
(Math.random()*(max-min+1)) + min;

/*Dates*/ //object
const date = new Date()
console.log(date.toString());//same as date
console.log(date.toDateString());//Sat Feb 15 2025
console.log(date.toLocaleDateString()); //15/2/2025, 3:20:45 pm

const cusomeDate = new Date(2023,0,23); //month will start from 0 in js
const yymmdd = new Date("2023-01-14");

let myTimeStamp = Date.now(); /// only timestamp
let newDate = new Date();
let msec = Date.parse("March 21, 2012");
const d = new Date("JANUARY, 25, 2015");
newDate.toLocaleString('defaut',{

})

/* Array */
const arr = [1,2,3,4,5,true,"hi"]; // different datatypes also
arr[0]
// array copy operation create shallow copies
//shallow same refernce changes in originla array reflects in copied array
const arr2 = new Array(1,2,3,4);
//deep different reference

//methods
arr2.push(6);
console.log(arr2);
arr2.pop();
arr2.unshift(9) // adding at start nd returns length of new array
arr2.shift(); // deleteds first value and returns it
arr2.includes(9);
arr2.indexOf(9);
const list = arr2.join(); //0,1,2,3,4
const list2 = arr2.join("") //01234

arr2.slice(1,5);
arr2.splice(1,3,true); 
arr2.length();
arr2.sort();
