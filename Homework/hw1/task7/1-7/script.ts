



type Driver = { name: string };

class Car {
    model: string;
    producer: string;
    yearOfCar: number;
    maxSpeed: number;
    engineVolume: number;
    driver?: Driver;


    constructor(model: string, producer: string, year: number, maxSpeed: number, engineVolume: number) {
        this.model = model;
        this.producer = producer;
        this.yearOfCar = year;
        this.maxSpeed = maxSpeed;
        this.engineVolume = engineVolume;


    }

    drive(): void {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
    };

    info(): void {
        for (const key in this) {
            console.log(key, this[key]);
        }
    };

    increaseMaxSpeed(speedToAdd: number): void {
        if (speedToAdd > 0) this.maxSpeed = this.maxSpeed + speedToAdd;
    };

    changeYear(year: number): void {
        if (year > 1815) {
            this.yearOfCar = year;

        }
    }

    addDriver(driver: Driver) {
        this.driver = driver;
    }


}

const car = new Car('asd', 'qwe', 1234, 122, 4);
console.log(car);

car.drive();
car.info();
car.increaseMaxSpeed(100);
car.changeYear(2000);
car.addDriver({name: 'ahsfdhagsfd'});
console.log(car);
