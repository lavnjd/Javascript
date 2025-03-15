/* Functions */
function say(sagar = "sam"){
    console.log(`hi ${sagar}`);
}

say() // hi undefined
say() // if not given any thing then sam 
say("lavanya") // hi lavanya

// if you don't know how may params you will be getting
function calculate(...num1){
    return num1
}

console.log(calculate(200,400,500));
//rest operator used

/*Scopes*/


if(true){
    let a = 10
    const b = 20
    var  c =30
}

console.log(a) // not able to access block scoped
console.log(b) //not able to access block scoped
console.log(c) // able to access global scoped

function one(){
    const username = "hitesh"
    function two(){
        const website = "youtube"
        console.log(username)
    }
    // console.log(website) // can't print and erro website not defined
    two()
    console.log(website)
}

one()
add(5); // hoisting won't work here calling before defining
const add = function(num){
    return num+2;
}

addTwo(5,6);//hoisting works here
function addTwo(a,b){
    return a+b;
}


const user ={
    username: "lavanya",
    price: 999,

    welcome: function(){
        console.log(`${this.username} welcome`);
        
    }
}
user.welcome() // lavanya welcome
user.username = "poppy"
user.welcome() // poppy welcome

console.log(this) //{}
// same in console.log(this) in browser global object is window

function chai(){
    let a = 5;
    console.log(this.a); //in function this.a won't work
    
    console.log(this);  //some data it will come
}
chai();

const chai = () => {
    console.log(this) //{}
}

chai();

const b = (m1,m2) => { //explicit return
    return m1+m2;
}

const a = (n1,n2) => (n1+n2); //implicit return
//if {n1+n2} return should be written
///(n1+n2) return not needed
// to return object you need to put ({})
const c =() => ({u:"lavanya"});





