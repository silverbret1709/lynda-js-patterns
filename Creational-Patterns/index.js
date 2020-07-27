// let instance = null;

class Car {
    // constructor(doors, engine, color) {
    //     if (!instance) {
    //         this.doors = doors;
    //         this.engine = engine;
    //         this.color = color;
    //         instance = this;
    //     } else {
    //         return instance;
    //     }

    // }

    constructor(doors, engine, color) {
        this.doors = doors;
        this.engine = engine;
        this.color = color;
    }

}

class CarFactory {
    createCar(type) {
        switch (type) {
            case 'civic':
                return new Car(4, 'V6', 'grey');
            case 'honda':
                return new Car(2, 'V8', 'red');
        }
    }
}


class SUV {
    constructor(doors, engine, color) {
        this.doors = doors;
        this.engine = engine;
        this.color = color;
    }

}

class SUVFactory {
    createCar(type) {
        switch (type) {
            case 'cx5':
                return new Car(4, 'V6', 'grey');
            case 'santafe':
                return new Car(2, 'V8', 'red');
        }
    }
}


// class SUV extends Car {
//     constructor(doors, engine, color) {
//         super(doors, engine, color);
//         this.wheels = 4;
//     }
// }

// const civic = new Car(4, 'V6', 'grey');
// const honda = new Car(4, 'V8', 'red');

// console.log(civic);
// console.log(suv);
const carFactory = new CarFactory();
const suvFactory = new SUVFactory();

const autoManufacturer = (type, model) => {
    switch (type) {
        case 'car':
            return carFactory.createCar(model);
        case 'suv':
            return suvFactory.createCar(model);
    }
}

const cx5 = autoManufacturer('suv', 'cx5');

console.log(cx5);