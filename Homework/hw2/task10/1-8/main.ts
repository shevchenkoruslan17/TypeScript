const table = document.getElementById('table') as HTMLTableElement;
const tableGeneratorForm = document.forms.namedItem('tableGeneratorForm') as HTMLFormElement;

tableGeneratorForm.onsubmit = (e: SubmitEvent) => {
    e.preventDefault();

    table.innerHTML = '';

    const linesValue = Number(
        (tableGeneratorForm.elements.namedItem('lines') as HTMLInputElement).value
    );

    const cellsValue = Number(
        (tableGeneratorForm.elements.namedItem('cells') as HTMLInputElement).value
    );

    const dataValue = (
        tableGeneratorForm.elements.namedItem('data') as HTMLInputElement
    ).value;

    for (let i = 0; i < linesValue; i++) {
        const tr = document.createElement('tr');

        for (let j = 0; j < cellsValue; j++) {
            const td = document.createElement('td');
            td.innerText = dataValue;
            tr.appendChild(td);
        }

        table.appendChild(tr);
    }
};
