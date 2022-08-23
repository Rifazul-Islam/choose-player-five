
document.getElementById('btn-calculate').addEventListener('click', function () {
    const sectectedTextElement = document.getElementById('Total-count');
    const sectectedTextElementString = sectectedTextElement.innerText;
    const sectectedTextElementResult = parseFloat(sectectedTextElementString);

    const inputFieldElement = document.getElementById('input-field');
    const inputFieldElementString = inputFieldElement.value;
    const previusFieldAmount = parseFloat(inputFieldElementString);
    const newFieldAmount = previusFieldAmount * sectectedTextElementResult;


    const expensesTextElement = document.getElementById('sum-amount');
    const expensesTextElementString = expensesTextElement.innerText;
    const expensesTextElementResult = parseFloat(expensesTextElementString);

    const sumTotalAmount = expensesTextElementResult + newFieldAmount;

    expensesTextElement.innerText = sumTotalAmount;

    inputFieldElement.value = '';
})


function elementFieldId(fieldId) {

    const inputFieldElement = document.getElementById(fieldId);
    const inputFieldElementString = inputFieldElement.value;
    const fieldElementAmount = parseFloat(inputFieldElementString);
    inputFieldElement.value = '';
    return fieldElementAmount;
}


function inputTextElementId(elementText) {

    const textElement = document.getElementById(elementText);
    const textElementString = textElement.innerText;
    const textElementStringConvert = parseFloat(textElementString);

    return textElementStringConvert
}



function getElementById(element, newValue) {

    const inputTextElement = document.getElementById(element);

    inputTextElement.innerText = newValue;
}

document.getElementById('btn-total').addEventListener('click', function () {

    const managerTotalAmount = elementFieldId('manager-amount');

    const coachTotalAmount = elementFieldId('coach-amount');

    const sumElementTotalAmount = inputTextElementId('sum-amount');


    const totalAmount = managerTotalAmount + coachTotalAmount + sumElementTotalAmount;

    const sumTotalAvarge = inputTextElementId('total-avarge');

    const avarge = totalAmount + sumTotalAvarge;

    getElementById('total-avarge', avarge);
})