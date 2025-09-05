const validPin=1234;

// function to get input values
function getInputValueNumber(id){
    const inputField = document.getElementById(id);
    const inputFieldValue = inputField.value;
    const inputFieldValueNumber = parseInt(inputFieldValue);

    return inputFieldValueNumber;
}

// function to get input values without convert number

function getInputValue(id){
    const inputField = document.getElementById(id);
    const inputFieldValue = inputField.value;

    return inputFieldValue;
}

// function to get innerText

function getInnerText (id){
    const element=document.getElementById(id);
    const elementValue = element.innerText;
    const elementValueNumber = parseInt(elementValue);

    return elementValueNumber;
}

// function to set innerText
function setInnerText(value){
    const availableBalanceElement = document.getElementById('available-balance');
    availableBalanceElement.innerText=value;
}



// add money feature
document.getElementById('btn-add-money').addEventListener('click', function(e){
    e.preventDefault();
    // console.log('add money button clicked');

    const bank = getInputValue('bank');
    const accountNumber= document.getElementById('account-number').value;
    const addAmount= getInputValueNumber('add-amount');
    const pin = getInputValueNumber('add-pin');

    // console.log(bank, accountNumber, addAmount, pin);
    const availableBalance = getInnerText('available-balance');
    console.log(availableBalance);

    if(accountNumber.length<11){
        alert("Please provide valid account number");
        return;
    }

    if(pin !== validPin){
        alert("Please provide valid pin number");
        return;
    }

    const totalNewAvailableBalance= addAmount+availableBalance;
    setInnerText(totalNewAvailableBalance);

});



// cash out feature
const validPinNum = 1234;
document.getElementById('btn-withdraw').addEventListener('click', function(e){
    e.preventDefault();
    // console.log('withdraw money bttn clicked');
    const amount = getInputValueNumber('withdraw-amount');
    const availableBalance = getInnerText('available-balance');
    // console.log(amount, availableBalance);

    const agentNumber = getInputValueNumber('agent-number');
    const pinNum = getInputValueNumber('pin-num');

    // console.log(agentNumber, pinNum);
    if(agentNumber.length<11){
        alert("Please provide valid account number");
        return;
    }
    
    if(pinNum != validPinNum){
        alert('Please provide valid pin number');
        return;
    }


    const totalNewAvailableBalance = availableBalance-amount;
    // console.log(totalNewAvailableBalance);
    setInnerText(totalNewAvailableBalance);
})

const logOut = document.getElementById('log-out').addEventListener('click', function(){
    window.location.href='./index.html';
})









// toggling feature
// add money
document.getElementById('add-button').addEventListener('click', function(){
    const forms= document.getElementsByClassName('form');
    // console.log(forms);
    for(const form of forms){
        // console.log(form);
        form.style.display = 'none';
    }
    document.getElementById('add-money-parent').style.display = "block";

})
// cash out
document.getElementById('cash-out-button').addEventListener('click', function(){
    const forms= document.getElementsByClassName('form');
    // console.log(forms);
    for(const form of forms){
        // console.log(form);
        form.style.display = 'none';
    }
    document.getElementById('cash-out-parent').style.display = "block";

})

// transfer money
document.getElementById('transfer-button').addEventListener('click', function(){
    const forms= document.getElementsByClassName('form');
    // console.log(forms);
    for(const form of forms){
        // console.log(form);
        form.style.display = 'none';
    }
    document.getElementById('transfer-money-parent').style.display = "block";

})
document.getElementById('get-bonus-button').addEventListener('click', function(){
    const forms= document.getElementsByClassName('form');
    // console.log(forms);
    for(const form of forms){
        // console.log(form);
        form.style.display = 'none';
    }
    document.getElementById('get-bonus-parent').style.display = "block";

})
document.getElementById('pay-bill-button').addEventListener('click', function(){
    const forms= document.getElementsByClassName('form');
    // console.log(forms);
    for(const form of forms){
        // console.log(form);
        form.style.display = 'none';
    }
    document.getElementById('pay-bill-parent').style.display = "block";

})
document.getElementById('transaction-button').addEventListener('click', function(){
    const forms= document.getElementsByClassName('form');
    // console.log(forms);
    for(const form of forms){
        // console.log(form);
        form.style.display = 'none';
    }
    document.getElementById('transaction-parent').style.display = "block";

})

