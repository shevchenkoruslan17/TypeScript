

let currentNumber = Number(localStorage.getItem('number') ?? 0);

currentNumber++;

localStorage.setItem('number', currentNumber.toString());

const target22 = document.getElementById('target');

if (target) {
    target.innerText = currentNumber.toString();
}
