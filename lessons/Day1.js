/* Variables and constants */
console.log("Lavanya");

//Variables
const accountId = 122345 // can't be changed
let accountEmail = "Lavanyatutika123@gmail.com" // best to use
var accountPassword = "12344" // due to scope if this variable is used anywhere in another block this value will also affected
// prefer not to use var
accountCity = "Hyderbad"

let accountState; // value will be undefined

//accountId = 2 not allowed

accountEmail = "lavanyatutika"

console.table([accountId,accountEmail,accountPassword,accountCity])


/* Datatypes */
"use strict"; //treat all JS code as newer version

//alert(3+3);// 

let name = "lavanya"
let age = 20
let isLoggedIn = false

///Primitive types
//number
//bigInt
//string "" or ''
//boolean true || false
//null => stand alone value and type let state = null;
//undefined => let state;
//symbol => unique

console.log(typeof age);
console.log(typeof null); //object
console.log(typeof undefined); //undefined



//conversions
let score = 33
console.log(typeof score)

let number = "33"
let valueInNumber = Number(number);

let a = "33abc" // for undefined also same
let value = Number(a);
console.log(typeof value) //Number
console.log(value); //NaN

let val = null
console.log(typeof Number(val)); //number
console.log(val);//0

let valu = 1 // if empty or zero false
let booleanValue = Boolean(valu); // true

let s = 33;
console.log(String(s)) // 33

console.log(+true); //1

let num1,num2,num3
num1 = num2 = num3 = 2;

console.log("2">1) // true auto conversion to 2

console.log(null>0);
console.log(null == 0);
console.log(null>=0); // null<=0 //true it will convert null to 0

//incase of undefined all are false
//=== strict comparison with datatypes also

//Dynamically typed

//Reference type (Non primitive)
//Arrays
//Objects
//Functions

const id = Symbol('123');
const id1 = Symbol('123');
console.log(id===id1) //false
const bigNumber = 12244324345345345n;

const fun =()=>{
    console.log("fdfdsf")
}

console.log(typeof fun) // function

/*Stack(Primitive) and Heap(Non primitive) memory*/

let myName = "lavanyatutika"
let yourName = myName
yourName = "lavs"
console.log(myName); //lavanyatutika
console.log(yourName) // lavs

//Stack works on copy
//Heap works on reference

const obj = {
    email: "lavanya",
    id: 1
}


let newObj = obj
newObj.email = "soumya"
console.log(obj.email) // soumya
console.log(newObj.email) // soumya both of them point to same reference


/* Strings */
const firstName = "lavanya";
const repoCount = 50;
console.log(firstName+repoCount) // can be used but nowadays 
//people are using string interpolation using ``

console.log(`Hi this is ${name} having rank ${repoCount}`);

const gameName = new String("pokemon"); // array of characters but is String onlye
// this has built in methods 
//gameName.length

