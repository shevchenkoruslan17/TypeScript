
type Created = {id:number, name:string, age:number}

function foobar(users:Created[]):void {
    for ( let user of users){
        document.write(`<div>${user.id} ${user.name} ${user.age}</div>`);
    }
}
foobar(
    [
        {id: 1, name: "John", age: 15},
        {id: 2, name: "John", age: 25},
        {id: 3, name: "John", age: 25},
        {id: 4, name: "John", age: 25},
        {id: 5, name: "John", age: 25},
    ]
)
