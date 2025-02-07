let expenseList = [];
const addExpense = () =>{
    const expenseReason = document.getElementById('expenseReason').value;
    const expenseDate = document.getElementById('expenseDate').value;
    const expenseMoney = document.getElementById('expenseMoney').value;
    if(expenseReason && expenseMoney!=0 && expenseDate){
        expenseList.push({expenseReason:expenseReason,expenseDate:expenseDate,expenseMoney:expenseMoney});
        updateExpense();
    }        
}


const updateExpense = () =>{
    const finalList = document.getElementById('transactionList');
    finalList.innerHTML = "";
    let sum =0;
    if(expenseList.length == 0){
        finalList.innerHTML = "NO EXPENSES";
    }
    expenseList.forEach((element,index) => {
        const li = document.createElement('li');
        li.innerHTML = `<div class="expenseDetails">
            <p>${element.expenseReason}</p>
            <p>${element.expenseDate}</p>
            <p>₹${element.expenseMoney}</p>           
            </div>`;

        finalList.append(li);
        sum = sum + Number(element.expenseMoney);

    });
    
    console.log(sum);
    document.getElementById('ExpenseSum').innerHTML = "₹"+sum;


}

if(expenseList.length == 0){
    const li = document.createElement('li');
    li.innerHTML ="No transactions available";
}



document.getElementById('add').addEventListener('click',(e)=>{
    e.preventDefault();
    addExpense();
})