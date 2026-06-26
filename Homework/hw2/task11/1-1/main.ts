// @ts-ignore
type Product = {
    id: number;
    title: string;
    price: number;
    quantity: number;
    total: number;
    discountPercentage: number;
    discountedTotal: number;
    thumbnail: string;
};

type Cart = {
    total: number;
    discountedTotal: number;
    userId: number;
    totalProducts: number;
    totalQuantity: number;
    products: Product[];
};

type CartsResponse = {
    carts: Cart[];
};

const cartsDiv = document.getElementById('carts') as HTMLDivElement;

fetch('https://dummyjson.com/carts')
    .then(res => res.json())
    .then((cartsObject: CartsResponse) => {
        const { carts } = cartsObject;

        for (const cart of carts) {
            const div = document.createElement('div');
            div.classList.add('cart-container');

            const divWithInfo = document.createElement('div');
            divWithInfo.innerText = `
total: ${cart.total}
discountedTotal: ${cart.discountedTotal}
userId: ${cart.userId}
totalProducts: ${cart.totalProducts}
totalQuantity: ${cart.totalQuantity}
            `;
            const ol = document.createElement('ol');

            for (const product of cart.products) {
                const li = document.createElement('li');

                const info = document.createElement('p');
                info.innerText = `
id: ${product.id}
title: ${product.title}
price: ${product.price}
quantity: ${product.quantity}
total: ${product.total}
discountPercentage: ${product.discountPercentage}
discountedTotal: ${product.discountedTotal}
                `;

                const img = document.createElement('img');
                img.src = product.thumbnail;

                li.append(img, info);
                ol.appendChild(li);
            }

            div.append(divWithInfo, ol);
            cartsDiv.appendChild(div);
        }
    });
