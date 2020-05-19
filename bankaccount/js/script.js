/*eslint-env browser*/
window.document.addEventListener("DOMContentLoaded", init);
function init() {

    let BtnName = document.getElementById('name');
    let BtnDeposit = document.getElementById('deposit');
    let BtnWithdrawal = document.getElementById('withdrawal');

    BtnDeposit.addEventListener('click', () => {
        deposit = window.prompt('Enter your name');
        window.console.log(name);
    });

    Btn.addEventListener('click', () => {
        name = window.prompt('Enter your name');
        window.console.log(name);
    });

    BtnName.addEventListener('click', () => {
        name = window.prompt('Enter your name');
        window.console.log(name);
    });



};



