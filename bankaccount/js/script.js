/*eslint-env browser*/
window.document.addEventListener("DOMContentLoaded", init);
function init() {


    let btnName = document.getElementById('name');
    let btnDeposit = document.getElementById('deposit');
    let btnWithdrawal = document.getElementById('withdrawal');

    btnName.addEventListener('click', () => {
        name = window.prompt('Enter your name:');
        document.getElementById('acctName').innerHTML = name;
        document.getElementById('acctBal').innerHTML = 0;
        window.console.log(name);
    });

    btnDeposit.addEventListener('click', () => {
        deposit = window.prompt('Enter amount to deposit:');
        bankAccount(amount);
        window.console.log(deposit);
    });

    btnWithdrawal.addEventListener('click', () => {
        withdrawal = window.prompt('Enter amount to withdraw:');
        bankAccount();
        window.console.log(withdrawal);
    });

    function bankAccount(){
        let balance;
        // let owner;

        balance = document.getElementById('acctBal').innerHTML;
        // owner = ownerName;

    
    };


};



