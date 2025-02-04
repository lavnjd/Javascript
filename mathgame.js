const arr =['+','-','X','÷'];
let randomIndex = Math.floor(Math.random() * arr.length);
let b;
let expression;

const generateExpression = (arr) =>{
    randomIndex = Math.floor(Math.random() * arr.length);
    if(randomIndex == 1){
        const a = Math.floor(Math.random() * 100);
        return Math.floor(Math.random() * a+1) + arr[randomIndex] + a;
    }else if(randomIndex == 3){
        const a = Math.floor(Math.random() * 10);
        return (Math.floor(Math.random()*10))*a + arr[randomIndex] + a;
    }else if(randomIndex == 2){
        return Math.floor(Math.random()*100) + arr[randomIndex] +Math.floor(Math.random()*10);
    }
}

let totalExpressions = 0;
expression = generateExpression(arr);
document.getElementById("question").innerHTML = expression;
let result ="";
function val(i){
    result+=i;
    let expre = expression;
    if(expression.includes('X')){
        expre.replace('X','*');
    }else if(expression.includes('÷')){
        expre.replace('÷','/');
    }
    if(eval(expre)==result){     
        expression = generateExpression(arr);
        totalExpressions+=1;
        document.getElementById("question").innerHTML = expression;
    }
    if(totalExpressions == 10){
        
    }
}
