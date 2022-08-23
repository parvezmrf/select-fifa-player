document.getElementById('btn-calculate').addEventListener('click', function () {
    // for Budget Calculate 
    const playerBudegt = getInputValueById('player-budget');
    const expenseText = getText('player-exp');
    const totalSelectedPlayer = document.getElementById('total-added-players');
    const totalSelectedPlayerString = totalSelectedPlayer.innerText;
    const totalSelected = parseFloat(totalSelectedPlayerString);
    const expenseTextTotal = playerBudegt * totalSelected;

    // NaN checker
    if (isNaN(expenseTextTotal)) {
        const valueEmpty = document.getElementById('player-budget');
        valueEmpty.value = '';

        alert('Provide valid amount');
        return
    }


    expenseText.innerText = expenseTextTotal;

})


document.getElementById('calculate-total').addEventListener('click', function () {
    // for total amount for hire
    const playerExp = getTextValue('player-exp');
    const managerExp = getInputValueById('exp-manager');
    const coachExp = getInputValueById('exp-coach');

    const totalExp = playerExp + managerExp + coachExp;

    // NaN checker
    if (isNaN(totalExp)) {
        const valueEmpty = document.getElementById('exp-manager');
        const valueEmpty2 = document.getElementById('exp-coach');
        valueEmpty.value = '2000';
        valueEmpty2.value = '4000';
        alert('You need to give right amount for Manager and Coach');
        return
    }

    const totalExpText = getText('total-exp');
    totalExpText.innerText = totalExp;
})