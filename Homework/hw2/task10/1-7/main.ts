function addToLocalStorage<T extends object>(arrayName: string, objToAdd: T): void {
    const lsItem = localStorage.getItem(arrayName);

    if (!lsItem) {
        throw new Error('There is no such array');
    }

    const array: T[] = JSON.parse(lsItem);

    array.push(objToAdd);

    localStorage.setItem(arrayName, JSON.stringify(array));
}

addToLocalStorage('sessionsList', {
    date: new Date().toISOString()
});
