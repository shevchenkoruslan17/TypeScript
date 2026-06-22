

class Cinderella {
    name: string;
    age: number;
    footSize: number;


    constructor(name: string, age: number, footSize: number) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}

class Prince {

    name: string;
    age: number;
    slipper: number;
    wife?: Cinderella;


    constructor(name: string, age: number, slipper: number) {
        this.name = name;
        this.age = age;
        this.slipper = slipper;
    }
}
const cinderellas: Cinderella[] = [
    new Cinderella('John', 18, 35),
    new Cinderella('Jane', 21, 36),
    new Cinderella('Feb', 23, 37),
    new Cinderella('Mar', 24, 38),
    new Cinderella('April', 25, 39),
    new Cinderella('May', 28, 40),
    new Cinderella('June', 38, 41),
    new Cinderella('July', 42, 42),
    new Cinderella('August',33, 39),
    new Cinderella('September',29,37),
];

const prince:Prince = new Prince('Jon',28,41);

const cinderellaMain = cinderellas.find(cinderella => cinderella.footSize === prince.slipper);

 // prince.wife = cinderellaMain;

if (cinderellaMain) {
    console.log(cinderellaMain.age);

}
