document.getElementById('btn-withdraw').addEventListener('click', function () {

    const inputField = document.getElementById('input-withdraw')
    const inputFieldString = inputField.value
    const inputFieldNumber = parseFloat(inputFieldString)

    const withdrawField = document.getElementById('withdraw-total')
    const withdrawFieldString = withdrawField.innerText
    const withdrawFieldNumber = parseFloat(withdrawFieldString)

    const currentWithdrawFieldTotal = inputFieldNumber + withdrawFieldNumber
    withdrawField.innerText = currentWithdrawFieldTotal

    inputField.value = ''


    const balanceField = document.getElementById('balance-total')
    const balanceFieldString = balanceField.innerText
    const balanceNumber = parseFloat(balanceFieldString)

    const currentTotalBalance = balanceNumber - inputFieldNumber
    balanceField.innerText = currentTotalBalance


})