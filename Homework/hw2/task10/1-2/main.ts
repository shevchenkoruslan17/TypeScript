const button2 = document.getElementById('verification');
const input = document.getElementById('age');

if (button instanceof HTMLButtonElement && input instanceof HTMLInputElement) {
    button.addEventListener('click', () => {
        const age = Number(input.value);

        if (age < 18) {
            alert('Менше 18 років!');
        } else {
            alert('Більше 18 років!');
        }
    });
}
