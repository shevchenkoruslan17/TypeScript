const PRICE_KEY = 'price';
const TIME_KEY = 'lastReloadTime';

let currentPrice: number = Number(localStorage.getItem(PRICE_KEY) ?? '100');
let lastReloadTime: number = Number(localStorage.getItem(TIME_KEY) ?? '0');

const now: number = Date.now();

if (now - lastReloadTime >= 10000) {
    currentPrice += 10;

    localStorage.setItem(PRICE_KEY, String(currentPrice));
    localStorage.setItem(TIME_KEY, String(now));
}

const priceElement = document.getElementById('price') as HTMLSpanElement;

if (priceElement) {
    priceElement.textContent = `${currentPrice} грн`;
}
