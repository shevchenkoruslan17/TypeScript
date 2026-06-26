const someForm = document.forms.namedItem('someForm') as HTMLFormElement;
const target = document.getElementById('target') as HTMLDivElement;

someForm.addEventListener('submit', (e: SubmitEvent) => {
    e.preventDefault();

    const formData = new FormData(someForm);

    const obj = {
        name: formData.get('name'),
        surname: formData.get('surname'),
        age: formData.get('age'),
    };

    console.log(obj);

    target.innerText = `${obj.name} ${obj.surname} ${obj.age}`;
});
