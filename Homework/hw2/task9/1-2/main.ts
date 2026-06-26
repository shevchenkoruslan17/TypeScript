const arr92 = [`Main`, `Products`, `About us`, `Contacts`];

const menu:HTMLMenuElement = document.createElement('ul');
menu.classList.add('menu');

for (const item of arr92) {
    const li:HTMLLIElement = document.createElement('li');
    li.innerText = item;
    menu.appendChild(li);
}

document.body.appendChild(menu);
