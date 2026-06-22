

class Client1 {
    id: number;
    name: string;
    surname: string;
    email: string;
    phone: string;
    products: Product[];

    constructor (id: number, name: string, surname: string, email: string, phone: string, products: Product[]) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.products = products;
    }
}
class Product {
    title: string;
    price: number;


    constructor(title: string, price: number) {
        this.title = title;
        this.price = price;
    }
}


let clients:Client1[] = [
    new Client1(1, 'asd', 'qwe', 'asd@asd.com', '+39764645', [{title: 'tv', price: 13000}, {title: 'phone', price: 987654}, {title: 'phone', price: 987654},]),
    new Client1(1, 'asd', 'qwe', 'asd@asd.com', '+39764645', [{title: 'tv', price: 13000}, {title: 'phone', price: 987654}, {title: 'tv', price: 13000}, {title: 'phone', price: 987654},]),
    new Client1(1, 'asd', 'qwe', 'asd@asd.com', '+39764645', [{title: 'tv', price: 13000}, {title: 'phone', price: 987654}]),
    new Client1(1, 'asd', 'qwe', 'asd@asd.com', '+39764645', [{title: 'tv', price: 13000}]),
    new Client1(1, 'asd', 'qwe', 'asd@asd.com', '+39764645', [{title: 'tv', price: 13000}, {title: 'phone', price: 987654}]),
    new Client1(1, 'asd', 'qwe', 'asd@asd.com', '+39764645', [{title: 'tv', price: 13000}, {title: 'phone', price: 987654}, {title: 'phone', price: 987654}]),
];

const sort = clients.sort((a, b) => a.products.length - b.products.length);
console.log(sort);

