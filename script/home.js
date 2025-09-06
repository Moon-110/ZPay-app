const validPin=1234;

const transactionData= [];

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

// function to toggle
function handleToggle(id){
    const forms= document.getElementsByClassName('form');
    // console.log(forms);
    for(const form of forms){
        // console.log(form);
        form.style.display = 'none';
    }
    document.getElementById(id).style.display = "block";
}

// function to toggle buttons
function handleButtonToggle (id){
    const fromBtns = document.getElementsByClassName('form-btn');
    for(const btn of fromBtns){
        btn.classList.remove('border-[#D1D5DB]', 'bg-[#0808081A]')
        btn.classList.add("border-gray-300");
    }
    document.getElementById(id).classList.remove('border-gray-300');
    document.getElementById(id).classList.add('border-[#0874f2]', 'bg-[#0874f20d]');
}





// add money feature
document.getElementById('btn-add-money').addEventListener('click', function(e){
    e.preventDefault();
    // console.log('add money button clicked');

    const bank = getInputValue('bank');
    const accountNumber= document.getElementById('account-number').value;
    const addAmount= getInputValueNumber('add-amount');

    if(addAmount<=0){
        alert("Invalid Amount");
        return;
    }
    
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

    const data= {
        name:'Add Money',
        date: new Date().toLocaleTimeString()
    }
    transactionData.push(data);
    console.log(transactionData);
});



// cash out feature
const validPinNum = 1234;
document.getElementById('btn-withdraw').addEventListener('click', function(e){
    e.preventDefault();
    // console.log('withdraw money bttn clicked');
    const agentsNumber= document.getElementById('agent-number').value;
    const amount = getInputValueNumber('withdraw-amount');
    const availableBalance = getInnerText('available-balance');
    // console.log(amount, availableBalance);
    if(amount<=0 || amount>availableBalance){
        alert('Invalid Amount');
        return;
    }

    const agentssNumber = getInputValueNumber('agent-number');
    const pinNum = getInputValueNumber('pin-num');

    // console.log(agentNumber, pinNum);
    if(agentsNumber.length<11){
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

    const data= {
        name:'Cash Out',
        date: new Date().toLocaleTimeString()
    }
    transactionData.push(data);
    console.log(transactionData);
})

const logOut = document.getElementById('log-out').addEventListener('click', function(){
    window.location.href='./index.html';
})




// transfer money
const validPinNumb = 1234;
document.getElementById('btn-transfer').addEventListener('click', function(e){
    e.preventDefault();
    // console.log('transfer money bttn clicked');
    const usersNumber= document.getElementById('user-number').value;
    const amount = getInputValueNumber('transfer-amount');
    const availableBalance = getInnerText('available-balance');
    // console.log(amount, availableBalance);
    if(amount<=0 || amount>availableBalance){
        alert('Invalid Amount');
        return;
    }
    

    const userNumber = getInputValueNumber('user-number');
    const pinNum = getInputValueNumber('transfer-pin-num');

    // console.log(userNumber, pinNum);
    if(usersNumber.length<11){
        alert("Please provide valid account number");
        return;
    }
    
    if(pinNum != validPinNumb){
        alert('Please provide valid pin number');
        return;
    }

    const totalNewAvailableBalance = availableBalance-amount;
    // console.log(totalNewAvailableBalance);
    setInnerText(totalNewAvailableBalance);

    const data= {
        name:'Transfer Money',
        date: new Date().toLocaleTimeString()
    }
    transactionData.push(data);
    console.log(transactionData);
});











// transaction 
document.getElementById('transaction-button').addEventListener('click', function(){
    // console.log(transactionData);
    const transactionParent= document.getElementById('transaction-parent');
    transactionParent.innerText=''

    for(const data of transactionData){
        const div = document.createElement('div')
        div.innerHTML =`
        <div class="bg-white rounded-xl p-3 flex justify-between items-center">
            <div class="flex items-center">
                <div class="border-2 p-2 rounded-full ">
                    <img src="./assets/wallet1.png" alt="">
                </div>
                <div class="ml-2 ">
                    <h1>${data.name}</h1>
                    <p>${data.date}</p>
                </div>
                
            </div>
            <i class="fa-solid fa-ellipsis-vertical "></i>
        </div>   
        `

        transactionParent.appendChild(div);
    }
})


// 

document.getElementById('btn-get-bonus').addEventListener('click', function(e){
    e.preventDefault();

    const couponInput = document.getElementById('get-bonus-coupon').value;
    const availableBalance = getInnerText('available-balance');

    if(couponInput==='Coupon Code'){
        let discount = availableBalance* 0.10;
        let finalPrice = availableBalance -discount;
    
    alert('Coupon applied! You got 10% discount : ', +finalPrice);
    }
    else
    {
        alert('Invalid coupon.');
    }

})






// toggling feature
// add money
document.getElementById('add-button').addEventListener('click', function(){
    handleToggle('add-money-parent');

    handleButtonToggle('add-button');

})
// cash out
document.getElementById('cash-out-button').addEventListener('click', function(){
    handleToggle('cash-out-parent');

    handleButtonToggle('cash-out-button')
})

// transfer money
document.getElementById('transfer-button').addEventListener('click', function(){
   
    handleToggle('transfer-money-parent');

    handleButtonToggle('transfer-button')

})
document.getElementById('get-bonus-button').addEventListener('click', function(){
   
    handleToggle('get-bonus-parent');

    handleButtonToggle('get-bonus-button')

})
document.getElementById('pay-bill-button').addEventListener('click', function(){
    handleToggle('pay-bill-parent');

    handleButtonToggle('pay-bill-button')

})
document.getElementById('transaction-button').addEventListener('click', function(){
    handleToggle('transaction-parent');

    handleButtonToggle('transaction-button')

})

