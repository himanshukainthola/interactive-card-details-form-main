const id = (id) => document.querySelector(id);

const clas = (clas) => document.querySelector(clas);

const nameInput = id('#cardholder-name'),
    numberInput = id('#card-number'),
    expMonthInput = id('#month'),
    expYearInput = id('#year'),
    cvcInput = id('#cvc'),
    nameError = clas('.name-error'),
    numberError = clas('.number-error'),
    cvcError = id('#cvc-error'),
    nameDisplay = clas('.name-on-card'),
    numberDisplay = clas('.number-on-car'),
    expDateDisplay = clas('.date-on-card'),
    expMonthDisplay = clas('.month'),
    expYearDisplay = clas('.year'),
    cvcDisplay = clas('.cvc-on-card'),
    messageDisplay = clas('.form-message'),
    confirmBtn = clas('.form-btn'),
form = clas('.form');











nameInput.addEventListener('input', () => nameDisplay.innerText = nameInput.value)
numberInput.addEventListener('input', () => numberInput.innerText = numberInput.value)
expMonthInput.addEventListener('input', () => expMonthDisplay.innerText = expMonthInput.value)
expYearInput.addEventListener('input', () => expYearDisplay.innerText = expYearInput.value)
cvcInput.addEventListener('input', () => cvcDisplay.innerText = cvcInput.value)
form.addEventListener('submit', validate);
