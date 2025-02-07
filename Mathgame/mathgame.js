const arr =['+','-','X','÷'];
let randomIndex = Math.floor(Math.random() * arr.length);
let b;
let expression;

const generateExpression = (arr) =>{
    randomIndex = Math.floor(Math.random() * arr.length);
    if(randomIndex == 1){
        const a = Math.floor(Math.random()*(1,100));
        return a + arr[randomIndex] +Math.floor(Math.random()*(1,a));
    }else if(randomIndex == 3){
        const a = Math.floor(Math.random() * (1,10));
        return (Math.floor(Math.random()*(1,20)))*a + arr[randomIndex] + a;
    }else if(randomIndex == 2){
        return Math.floor(Math.floor(Math.random()*(1,10))) + arr[randomIndex] +Math.floor(Math.random()*(1,10));
    }else{
        return Math.floor(Math.random()*(1,100)) + arr[randomIndex] + Math.floor(Math.random()*(1,100));
    }
}

let totalExpressions = 0;
expression = generateExpression(arr);
document.getElementById("question").innerHTML = expression;
let result ="";
function val(i){
    if(i === -1){
        result=result.substring(0,result.length-1);
    }
    else if(i === -2){
        result = "";
    }else{
        result+=i;
        let expre = expression;
        if(expression.includes('X')){
            expre = expre.replace('X','*');
        }else if(expression.includes('÷')){
            expre = expre.replace('÷','/');
        }
        if(eval(expre)==result){
            expression = generateExpression(arr);
            document.getElementById("question").innerHTML = expression;
            result = "";
        }
        else if(eval(expre)<result){
            document.getElementById('warning').innerHTML = "Wrong";
            result = "";
        }
    }
    
}
