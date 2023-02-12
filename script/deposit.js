// * Declaring Variables
const depositButton = document.getElementById("btn-deposit"); // ! deposit button

//? step-2 : get hold of the deposit amount id of the deposit input field
const deposit = document.getElementById("user-deposit"); // ! deposit input field

// ? step-3 : get the current deposited total to be displayed
const depositTotalElement = document.getElementById("deposit-total"); //! total deposited display value


//? step-1 : adding event listener to the deposit button
depositButton.addEventListener('click', function(){
    // ? step-2.1 : getting the "to be deposited" amount from the deposit input field
    //* all the inputs and stuffs need to be parse floated or parse inted to get the sum
    const newDepositAmount = parseFloat(deposit.value); //!deposit amount
    
    const previousDepositTotal = parseFloat(depositTotalElement.innerText);

    // ? step-7 : getting the total sum of previous and new deposit amount
    const currentDepositTotal = previousDepositTotal + newDepositAmount;

    // ? step-5 : updating the total "total deposited display value" with the deposit amount
    // depositTotalElement.innerText = newDepositAmount;

    // ? step-8 : updating the total "total deposited display value" with the summed value
    depositTotalElement.innerText = currentDepositTotal;

    // * now update the balance total
    // ? step-9 : getting balance total and updating after summing everything;
    const balanceTotalElement = document.getElementById("balance-total");
    const previousBalanceTotal = parseFloat(balanceTotalElement.innerText);
    const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
    balanceTotalElement.innerText = currentBalanceTotal;

    
    // ? step-6 : clearing the input field
    deposit.value = '';
})