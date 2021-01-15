let form = document.querySelector('[name="form"]');
let sum = document.querySelector('#sum');
let suma = 0;

form.addEventListener('submit', function(e){
    e.preventDefault();
    let firstNumber = Number(e.target.elements.firstNumber.value);
    let secondNumber = Number(e.target.elements.secondNumber.value);
    suma = firstNumber + secondNumber;
    sum.innerHTML = suma;
});