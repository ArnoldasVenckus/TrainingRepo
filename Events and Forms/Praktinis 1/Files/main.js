let rand = Math.floor(Math.random() * 101);
let form = document.querySelector('[name=form]');
let result = document.querySelector('#resultText');
let resultCount = document.querySelector('#resultCount');
let count = 0;

form.addEventListener('submit', run);

function run(e){
    e.preventDefault();
    let guess = e.target.elements.input.value;
    if (guess == rand){
        result.innerHTML = "Bullseye!";
    }
    else if(guess > rand){
        result.innerHTML = "Skaicius yra mazesnis";
    }
    else if(guess < rand){
        result.innerHTML = "Skaicius yra didesnis";
    }
    count++;
    resultCount.innerHTML = "Bandymai: " + count;
    let conv = String(count);
    localStorage.setItem('bandymas' + conv, guess);
    console.log(localStorage);
}

localStorage.clear();

console.log(rand);

