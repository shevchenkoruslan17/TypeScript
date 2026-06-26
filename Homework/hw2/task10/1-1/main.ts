
const buttons = document.getElementsByTagName('button');
const button = buttons[0];

button.addEventListener('click', () => {
    const div = document.getElementById('text');

    if (div) {
        div.style.display = 'none';
    }
});


