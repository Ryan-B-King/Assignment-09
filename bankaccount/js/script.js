/*eslint-env browser*/
window.document.addEventListener("DOMContentLoaded", init);
function init() {
    let balance = 0;

    let btnName = document.getElementById('name');
    let btnDeposit = document.getElementById('deposit');
    let btnWithdrawal = document.getElementById('withdrawal');

    btnName.addEventListener('click', () => {
        let name = window.prompt('Enter your name:');
        document.getElementById('acctName').innerHTML = name;
        document.getElementById('acctBal').innerHTML = 0;
        window.console.log(name);
    });

    btnDeposit.addEventListener('click', (e) => {
        e.preventDefault();
        let deposit = Number(window.prompt('Enter amount to deposit:'));

        balance = balance + deposit;
        document.getElementById('acctBal').innerHTML = balance;
    });

    btnWithdrawal.addEventListener('click', (e) => {
        e.preventDefault();
        let withdrawalAmount = Number(window.prompt('Enter amount to withdraw:'));
        balance = balance - withdrawalAmount;
        document.getElementById('acctBal').innerHTML = balance;
    });
};



