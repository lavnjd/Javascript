// Immediately invoked function expression (IIFE)
//()() first ()->definiton second () ->calling
//to avoid global pollution in the program
(function chai(){
    console.log("DB CONNECTED");
})();
// in case of two function ; should be there to let IIFE where it should end one funciton execution

(()=>{
    console.log("DB CONNECTED");
})();

((name) => { 
    console.log(`${name}`);
    
})("lavanya"); // Named IIFE