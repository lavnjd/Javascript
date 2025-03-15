//XMLHttpRequest.readyState
//0- unsent,1-opened,2-headersrecieeved,3-loading,4-done
const xhr = new XMLHttpRequest();
xhr.open('GET','url')
xhr.send();

xhr.onreadystatechange = ()=>{
    console.log(xhr.readyState); // to print state continuauosly for continuous monitoring
    //output 2,3,4
    if(xhr.readyState === 4){
        console.log(responseText); //error
        console.log(this.responseText);//response of the url
        //response will come mostly in string
        const data = JSON.parse(responseText);
        console.log(typeof data); // object or json        
    }
}

/*Promises*/
//promise states : pending, fulfilled, rejected
fetch('http.fdfd').then().catch().finally() //consuming
//Q BlueBird used in past now integreted to js
const promiseOne = new Promise((resolve,reject)=>{
    //Do an async task DB calls
    setTimeout(()=>{
        console.log("Completed");
        resolve(); /// resolve will exeute then while consuming the promise
    },1000);
});

promiseOne.then(()=>{
    console.log("Promise consumed");    
})//with resolvein promiseOne only this will execute

new Promise(function(resolve,reject){
    setTimeout(()=>{
        console.log("async");  
        resolve();  
    },1000)
}).then(()=>{
    console.log("2 resolved");    
})

new Promise((resolve,reject) => {
    setTimeout(()=>{
       data = [1,2,3];
       resolve(data);
    },1000)
}).then((user) => {
    console.log(user);
    
})



new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let error = true;
        if(!error){
            resolve("success");
        }else{
            reject('Failed'); //catch it will go
        }
    },1000);
}).then((output)=>{
    console.log(output);
    
}).catch((output)=>{
    console.log(output);
    
})

new Promise((resolve,reject) => {
    setTimeout(()=>{
        resolve({"username":"lavanya","id":515451})
    },1000);
}).then((user)=>{
    return user.username
}).then((username)=>{
    console.log(username)
}).catch((err) => {
    console.log(err);
}).finally(()=>{
    console.log("always executes");   
})


const promiseFive = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let error = true;
        if(!error){
            resolve();
        }else{
            reject();
        }
    },1000)
});

async function consume(){
   try{
    const res = await promiseFive;
    console.log(res);
   }catch(error){
    console.log(error);
    
   }
} // async need catch it won't handle eroor

consume();


//fetch response is a promise which is resolve /rejext
async function allUsers(){
   try{
    const res = await fetch("www.google.com");
    const data = await res.json(); // this also takes time so await
    console.log(data);
   }
   catch(error){
    console.log(error);
   }
}

/* FETCH */

//when request it self didn't went then fetch throws error even 500, 404 will also come from response only in fetch
//fetch queue / micro task queue will execute faster than task queue

