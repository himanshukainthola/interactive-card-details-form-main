const nameDisplay = document.querySelector('.name-on-card');
const nameInput = document.querySelector('#cardholder-name');

const numberDisplay = document.querySelector('.number-on-card');
const numberInput = document.querySelector('#card-number');

const expDateDisplay = document.querySelector('.date-on-card');
const expMonthDisplay = document.querySelector('.month');
const expMonthInput = document.querySelector('#month');

const expYearDisplay = document.querySelector('.year');
const expYearInput = document.querySelector('#year');

const cvcDisplay = document.querySelector('.cvc-on-card');
const cvcInput = document.querySelector('#cvc');

const confirmBtn = document.querySelector('.form-btn');

const form = document.querySelector('.form');
const messageDisplay = document.querySelector('.form-message');






nameInput.addEventListener('input', () =>{
    nameDisplay.innerText = nameInput.value
})
numberInput.addEventListener('input', () =>{
    numberDisplay.innerText = numberInput.value
})
expMonthInput.addEventListener('input', () =>{
    expMonthDisplay.innerText = expMonthInput.value
})
expYearInput.addEventListener('input', () =>{
    expYearDisplay.innerText = expYearInput.value
})
cvcInput.addEventListener('input', () =>{
    cvcDisplay.innerText = cvcInput.value
})


confirmBtn.addEventListener('click', function(event){
    form.classList.add('hidden');
    messageDisplay.classList.remove('hidden');

    event.preventDefault();
})