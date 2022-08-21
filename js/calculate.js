
document.getElementById('btn-calculate').addEventListener('click', function () {

    const inputFieldElement = document.getElementById('input-field');
    const inputFieldElementString = inputFieldElement.value;
    const previusFieldAmount = parseFloat(inputFieldElementString);
    const newFieldAmount = previusFieldAmount * 5;


    const expensesTextElement = document.getElementById('sum-total');
    const expensesTextElementString = expensesTextElement.innerText;
    const expensesTextElementResult = parseFloat(expensesTextElementString);

    const sumTotalAmount = expensesTextElementResult + newFieldAmount;

    expensesTextElement.innerText = sumTotalAmount;
})

