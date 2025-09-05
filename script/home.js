const validPin=1234;

// add money feature
document.getElementById('btn-add-money').addEventListener('click', function(e){
    e.preventDefault();
    // console.log('add money button clicked');

    const bank = document.getElementById('bank').value;
    const accountNumber= document.getElementById('account-number').value;
    const addAmount=parseInt(document.getElementById('add-amount').value);
    const pin = parseInt(document.getElementById('add-pin').value);

    // console.log(bank, accountNumber, addAmount, pin);
    const availableBalance = parseInt(document.getElementById('available-balance').innerText);
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
    document.getElementById('available-balance').innerText = totalNewAvailableBalance;

});



// cash out feature
const validPinNum = 1234;
document.getElementById('btn-withdraw').addEventListener('click', function(e){
    e.preventDefault();
    // console.log('withdraw money bttn clicked');
    const amount = parseInt(document.getElementById('withdraw-amount').value);
    const availableBalance = parseInt(document.getElementById('available-balance').innerText);
    // console.log(amount, availableBalance);

    const agentNumber = document.getElementById('agent-number').value;
    const pinNum = parseInt(document.getElementById('pin-num').value);

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
    document.getElementById('available-balance').innerText=totalNewAvailableBalance;
})

const logOut = document.getElementById('log-out').addEventListener('click', function(){
    window.location.href='./index.html';
})









// toggling feature
// add money
document.getElementById('add-button').addEventListener('click', function(){
    document.getElementById('cash-out-parent').style.display='none';
    document.getElementById('add-money-parent').style.display= 'block'

})
// cash out
document.getElementById('cash-out-button').addEventListener('click', function(){
    document.getElementById('add-money-parent').style.display= 'none';
    document.getElementById('cash-out-parent').style.display='block';

})