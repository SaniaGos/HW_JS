// -- Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
function Car(model, brand, year, maxSpeed, volume) {
    this.model = model;
    this.brand = brand;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.volume = volume;
    this.drive = () => {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
    };
    this.info = () => {
        console.log(`Model =>  ${this.model}`);
        console.log(`Brand =>  ${this.brand}`);
        console.log(`Year =>  ${this.year}`);
        console.log(`Max Speed =>  ${this.maxSpeed}`);
        console.log(`Volume =>  ${this.volume}`);
    };
    this.setMaxSpeed = (newSpeed) => {
        this.maxSpeed = newSpeed
    };
    this.setYear = (newYear) => {
        this.year = newYear
    };
    this.addDriver = (driver) => {
        this.driver = driver
    };
}

let myCar = new Car('Kangoo', 'Renault', 2012, 120, '44kVat');
console.log(myCar);
myCar.drive();
myCar.info();
myCar.setMaxSpeed(130);
myCar.setYear(2013);
myCar.info();
myCar.addDriver({name: 'Vasul', sName: 'Pupkin'});
console.log(myCar);

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
class OtherCar {
    constructor(model, brand, year, maxSpeed, volume) {
        this.model = model;
        this.brand = brand;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.volume = volume;
    };

    drive = () => {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
    };
    info = () => {
        console.log(`Model =>  ${this.model}`);
        console.log(`Brand =>  ${this.brand}`);
        console.log(`Year =>  ${this.year}`);
        console.log(`Max Speed =>  ${this.maxSpeed}`);
        console.log(`Volume =>  ${this.volume}`);
    };
    setMaxSpeed = (newSpeed) => {
        this.maxSpeed = newSpeed
    };
    setNewYear = (newYear) => {
        this.year = newYear
    };
    addDriver = (driver) => {
        this.driver = driver
    };
}

let myNewCar = new OtherCar('Kangoo', 'Renault', 2012, 120, '44kVat');

console.log(myNewCar);
myNewCar.drive();
myNewCar.info();
myNewCar.setMaxSpeed(130);
myNewCar.setNewYear(2013);
myNewCar.info();
myNewCar.addDriver({name: 'Vasul', sName: 'Pupkin'});
console.log(myNewCar);

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
class Cinderella {
    constructor(name, age, leg_size) {
        this.name = name;
        this.age = age;
        this.leg_size = leg_size;
    }
}

const cinderellas = [
    new Cinderella('lida', 20, 35),
    new Cinderella('Olia', 21, 38),
    new Cinderella('Alina', 23, 37),
    new Cinderella('Zoia', 33, 37),
    new Cinderella('Zolyshka', 30, 32),
    new Cinderella('Ira', 35, 39),
    new Cinderella('Tania', 31, 34),
    new Cinderella('Olena', 19, 35),
    new Cinderella('Alisa', 18, 33),
    new Cinderella('Masha', 39, 39)
];

// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

class Prince {
    constructor(name, age, shoe) {
        this.name = name;
        this.age = age;
        this.shoe = shoe;
    }

    findCinderella(arrCinderellas) {
        let princess = null;
        if (Array.isArray(arrCinderellas)) {
            arrCinderellas.forEach(w => {
                if ((w instanceof Cinderella) && w.leg_size === this.shoe)
                    princess = w;

            })
        }
        return princess;
    }
}

const prince = new Prince('Artyr', 32, 32);
console.log(prince);
console.log(prince.findCinderella(cinderellas));

console.log(cinderellas.find(p => p.leg_size === prince.shoe));

