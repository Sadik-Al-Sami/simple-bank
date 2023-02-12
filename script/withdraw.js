const withdrawButton = document.getElementById("btn-withdraw");
const withdraw = document.getElementById("user-withdraw");
const withdrawTotalElement = document.getElementById("withdraw-total");

withdrawButton.addEventListener("click", function(){
    const newWithdrawAmount = parseFloat(withdraw.value);
    if(isNaN(newWithdrawAmount)){
        alert('Please provide a valid amount')
        return;
    }
    const previousWithdrawAmount = parseFloat(withdrawTotalElement.innerText);
    const currentWithdrawTotal = newWithdrawAmount + previousWithdrawAmount;
    const balanceTotalElement = document.getElementById("balance-total");
    const previousBalanceTotal = parseFloat(balanceTotalElement.innerText);
    const currentBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    if(newWithdrawAmount > currentBalanceTotal){
        alert('You do not have enough balance');
        return;
    }
    withdrawTotalElement.innerText = currentWithdrawTotal;
    balanceTotalElement.innerText = currentBalanceTotal;
    withdraw.value = "";
})