document.getElementById('btn-calculate').addEventListener('click', function () {
    const playerBudegt = getInputValueById('player-budget');

    const expenseText = getText('player-exp')

    expenseText.innerText = playerBudegt * 5;
})


document.getElementById('calculate-total').addEventListener('click', function () {
    const playerExp = getTextValue('player-exp');
    const managerExp = getInputValueById('exp-manager');
    const coachExp = getInputValueById('exp-coach');

    const totalExp = playerExp + managerExp + coachExp;

    const totalExpText = getText('total-exp');
    totalExpText.innerText = totalExp;
})