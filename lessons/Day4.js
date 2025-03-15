// singleton  ->with constuctor not literals

/* Object literals */

//symbo
const sym = new Symbol("full name");
const jsUser = {
    name : "Lavanya",
    sym : "LavanyaTutika", // accessing like these treate it as string not symbol
    [sym] : "lavnaya", // symbol
    rollno : 123,  //"rollno" || rollno
    email : "lavanya@walmart.com",  /// behind scenes key is string
    isLoggedIn : true,
    lastLoginDays : ["Monday","Saturday"],
    "Date of Birth": "july"
}
jsUser.name //lavanya
jsUser["email"]
jsUser["Date of Birth"] // correct
//jsUser.Date of Birth wrong
console.log(typeof jsUser.sym); //string

//changing values
jsUser.email = "abc@adp.com"
// Object.freeze(jsUser);
jsUser.email = "" //no error will come but not updation will happen

//function in object
jsUser.greeting = () =>{
    console.log("Hello js user")
}

console.log(jsUser.greeting);//undefined
console.log(jsUser.greeting()) 

jsUser.greetingTwo = () =>{
    console.log(`this ${this.name}`) // name is there in same class 
}


const tinder = new Object(); //singleton object

console.log(tinder); // {}

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"c", 4:"d"}

// const obj3 = {obj1,obj2}; // {{},{}}
//obj1 == obj3 will be equal
const obj3 = Object.assign(obj1,obj2)
const assign = Object.assign({},obj1,obj2); //{} target array if {} not given everything goes to obj1
const obje ={...obj1,...obj2}

const users = [
    {
        id:1,
        name:"titu"
    },
    {
        id:2,
        name:"gitu"
    }
]

console.log(Object.keys(tinder)); //[1,3,4]
Object.values(tinder);
Object.entries(tinder) // key value in array [[key,value], [key,value]]
tinder.hasOwnProperty('isLoggineIn') //false

// destructuring 
const course = {
    courseName: "js in hindi",
    price: 999,
    courseInstructor: "hitesh"
}

const {courseInstructor} = course

console.log(courseInstructor)

const {courseName : name} = course
console.log(name);
//{varialbename} ->destructuring

/*API*/
//JSON - Javascript Onject notation

