
// @ts-ignore
class User1 {
    id: number;
    name: string;
    surname: string;
    email: string;
    phone: string;

    constructor(id: number, name: string, surname: string, email: string, phone: string) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
    }
}
let users: User1[] = [
    new User1(1, 'kokos', 'kokosovch', 'koko', '+0989767562455'),
    new User1(2, 'makar', 'makarovch', 'makk', '+0973726456816'),
    new User1(3, 'chocko', 'chockovch', 'chocko','+09897675624'),
    new User1(4, 'persi', 'persivch', 'persivch', '+09897675624'),
    new User1(5, 'cheri', 'cherivovch', 'cherivo','+09897675624'),
    new User1(6, 'kokos', 'kokos', 'koko','+09897675624'),
    new User1(7, 'makar', 'makarovch', 'makk', '+09897675624'),
    new User1(8, 'chocko', 'chockovch', 'chocko','+09897675624'),
    new User1(9, 'persi', 'persivch', 'persivch', '+09897675624'),
    new User1(10, 'cheri', 'cherivo', 'cherivo','+09897675624'),
]

const filterUsers = users.filter((user) => user.id % 2 === 0);
console.log(filterUsers);
