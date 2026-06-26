


// type Product3 = {
//     id: number;
//     title: string;
//     price: number;
// };
//
// const products3 = await foobar<Product[]>('https://example.com/products');
//
// products.forEach(p => console.log(p.title));




async function foobar<T>(url: string): Promise<T> {
    const response = await fetch(url);

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json() as T;
}


