const div:HTMLDivElement = document.createElement('div');
div.classList.add('wrap');
div.classList.add('collapse');
div.classList.add('alpha');
div.classList.add('beta');

const cloneNode:Node = div.cloneNode(true);
document.body.append(div, cloneNode);
