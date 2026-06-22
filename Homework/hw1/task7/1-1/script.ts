
// @ts-ignore
class User {

    id: number;
    name: string;
    surname: string;
    email: string;
    phone: string;


    constructor(id:number, name:string, surname:string, email:string, phone:string) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
    }
}
const user = new User(1, 'kokos', 'kokosovch', 'koko','+0989767562455');
console.log(user);

let users = [
    new User(1, 'kokos', 'kokosovch', 'koko', '+0989767562455'),
    new User(2, 'makar', 'makarovch', 'makk', '+0973726456816'),
    new User(3, 'chocko', 'chockovch', 'chocko','+09897675624'),
    new User(4, 'persi', 'persivch', 'persivch', '+09897675624'),
    new User(5, 'cheri', 'cherivovch', 'cherivo','+09897675624'),
    new User(6, 'kokos', 'kokos', 'koko','+09897675624'),
    new User(7, 'makar', 'makarovch', 'makk', '+09897675624'),
    new User(8, 'chocko', 'chockovch', 'chocko','+09897675624'),
    new User(9, 'persi', 'persivch', 'persivch', '+09897675624'),
    new User(10, 'cheri', 'cherivo', 'cherivo','+09897675624'),
]
console.log(users);
