
class User {
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

let users = [
    new User(6, 'kokos', 'kokosovch', 'koko', '+0989767562455'),
    new User(4, 'makar', 'makarovch', 'makk', '+0973726456816'),
    new User(7, 'chocko', 'chockovch', 'chocko','+09897675624'),
    new User(3, 'persi', 'persivch', 'persivch', '+09897675624'),
    new User(2, 'cheri', 'cherivovch', 'cherivo','+09897675624'),
    new User(1, 'kokos', 'kokos', 'koko','+09897675624'),
    new User(8, 'makar', 'makarovch', 'makk', '+09897675624'),
    new User(10, 'chocko', 'chockovch', 'chocko','+09897675624'),
    new User(5, 'persi', 'persivch', 'persivch', '+09897675624'),
    new User(9, 'cheri', 'cherivo', 'cherivo','+09897675624'),
]

// function sorter(user1, user2) {
//     return user1.id - user2.id;
// }
//
// console.log(users.sort(sorter));

console.log(users.sort((user1, user2) => user1.id - user2.id));
