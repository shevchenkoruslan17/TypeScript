// let a:string = "hello okten";
//
//
// let a:number = 123;
// let b:boolean = true;
// let c:string = "okten";

// function foo(arg1:number, arg2:number):void{
//     return arg1 + arg2;
// }
//
// foo(1,'dffdfs')

// let arr:any = [];
// arr.push(1)
// arr.push('sdfsfs')
// arr.push(true)

// variant-1
// type UserType ={
//     name:string;
//     age:number;
//     status:boolean;
//     greeting: (str:string) => string
// }
//
// let Users:UserType[] = [
//     {greeting: (str:string) => 'hello1', name: 'vasya',age: 31, status:false},
//     {greeting: (str:string) => 'hello2', name: 'max',age: 32, status:true},
// ];


// variant-2
// interface IUser ={
//     name:string;
//     age:number;
//     status:boolean;
//     greeting: (str:string) => string
// }
//
// let Users:IUser[] = [
//     {greeting: (str:string) => 'hello1', name: 'vasya',age: 31, status:false},
//     {greeting: (str:string) => 'hello2', name: 'max',age: 32, status:true},
// ];

// variant-3
class User {
    name: string;
    age: number;
    status: boolean;


    constructor(name: string, age: number, status: boolean) {
        this.name = name;
        this.age = age;
        this.status = status;
    }

    greeting() {
        console.log('asdasd');
    }

}

let user = new User('asd', 123, false);


let users: User[] = [
    new User('adwqeqw', 123, true)

];

console.log(users);
