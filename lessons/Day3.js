const myArr = [1,2,3,4]
const a = [3,4,5]
myArr.push(a) // [1,2,3,4,[3,4,5]]
myArr[4][1]; //4

//concat return new array 
const all = myArr.concat(a); // [1,2,3,4,3,4,5]
//spread operator
const all_new = [...myArr,...a]; // [1,2,3,4,3,4,5]
const another = [1,2,3,[4,5,6],6,[6,7,[4,5]]]
const my = another.flat(Infinity); // 1,2,3,4,5,6,6,6,7,4,5

Array.isArray([1,2,3]) // true
Array.from("Hitesh") // ['H','i','t','e','s','h']
Array.from({name:"hitesh"}) //tell whether key or value []

let score1 = 100, score2 = 200, score3 = 300;
Array.of(score1,score2,score3)