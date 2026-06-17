type Author= {name:string, age:number};
type Book ={
    title:string,
    pageCount:number,
    genre:string,
    authors:Author[],
}

let book1:Book = {
    title:'sfafafafafsfww',
    pageCount:2000,
    genre:'AA',
    authors:[
        {
            name:"John",
            age:20
        }
    ]
}
let book2:Book = {
    title:';lk;k;k',
    pageCount:3000,
    genre:'BB',
    authors:[
        {
            name:"vasya",
            age:30
        }
    ]
}
let book3:Book = {
    title:'asasasasas',
    pageCount:4000,
    genre:'CC',
    authors:[
        {
            name:"Anna",
            age:38
        }
    ]
}
