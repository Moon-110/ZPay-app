document.getElementById('btn-add-money').addEventListener('click', function(e){
    e.preventDefault();
    // console.log('add money button clicked');

    const bank = document.getElementById('bank').value;
    const accountNumber= document.getElementById('account-number').value;
    const addAmount=parseInt(document.getElementById('add-amount').value);
    const pin = document.getElementById('add-pin').value;

    // console.log(bank, accountNumber, addAmount, pin);
    const availableBalance = parseInt(document.getElementById('available-balance').innerText);
    console.log(availableBalance);

    const totalNewAvailableBalance= addAmount+availableBalance;
    document.getElementById('available-balance').innerText = totalNewAvailableBalance;

})