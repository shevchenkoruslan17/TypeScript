type DataItem = {
    id: number;
    title: string;
};

const data: DataItem[] = Array.from({ length: 100 }, (_, i) => ({
    id: i + 1,
    title: 'object'
}));

const pageSize: number = 10;
let page: number = 0;

const list = document.getElementById('list') as HTMLDivElement;
const prev = document.getElementById('prev') as HTMLButtonElement;
const next = document.getElementById('next') as HTMLButtonElement;

function renderList(): void {
    const start: number = page * pageSize;
    const end: number = Math.min(start + pageSize, data.length);

    list.innerHTML = '';

    for (let i = start; i < end; i++) {
        const item = document.createElement('div');
        item.textContent = `${data[i].id} ${data[i].title}`;
        list.appendChild(item);
    }

    prev.disabled = page === 0;
    next.disabled = end >= data.length;
}

prev.onclick = (): void => {
    if (page > 0) {
        page--;
        renderList();
    }
};

next.onclick = (): void => {
    if ((page + 1) * pageSize < data.length) {
        page++;
        renderList();
    }
};

renderList();
