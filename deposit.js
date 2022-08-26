document.getElementById('btn-deposit').addEventListener('click', function () {

    const inputDeposit = document.getElementById('input-deposit')
    const inputDepositString = inputDeposit.value
    const inputDepositNumber = parseFloat(inputDepositString)

    const depositField = document.getElementById('deposit-total')
    const depositFieldString = depositField.innerText
    const depositNumber = parseFloat(depositFieldString)

    const currentTotalDeposit = inputDepositNumber + depositNumber

    depositField.innerText = currentTotalDeposit

    inputDeposit.value = ''

    const balanceField = document.getElementById('balance-total')
    const balanceFieldString = balanceField.innerText
    const balanceNumber = parseFloat(balanceFieldString);

    const currentTotalBalance = balanceNumber + inputDepositNumber
    balanceField.innerText = currentTotalBalance

})