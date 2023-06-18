// class Animal {
//     constructor(name, age, hasTale, isMale) {
//       this.name = name;
//       this.age = age;
//       this.hasTale = hasTale;
//       this.isMale = isMale;
//     }
//     static voice() {
//       console.log('This is animal voice');
//     }
//   }

//   class Cat extends Animal {
//     constructor(name, age, hasTale, isMale, eColor) {
//       super(name, age, hasTale, isMale);
//       this.eColor = eColor;
//     }
//     voice() {
//       console.log('miow miow');
//     }
//     toElement() {
//       const element = document.createElement('div');
//       element.innerHTML = `
//         <h2>${this.name}</h2>
//         <p>Age: ${this.age}</p>
//         <p>Has tale: ${this.hasTale? 'Yes' : 'No'}</p>
//         <p>Is male: ${this.isMale? 'Yes' : 'No'}</p>
//         <p>Eye color: ${this.eColor}</p>
//       `;
//       return element;
//     }
//   }

//   class Dog extends Animal {
//     constructor(name, age, hasTale, isMale, breed) {
//       super(name, age, hasTale, isMale);
//       this.breed = breed;
//     }
//     voice() {
//       console.log('woof woof');
//     }
//     toElement() {
//       const element = document.createElement('div');
//       element.innerHTML = `
//         <h2>${this.name}</h2>
//         <p>Age: ${this.age}</p>
//         <p>Has tale: ${this.hasTale? 'Yes' : 'No'}</p>
//         <p>Is male: ${this.isMale? 'Yes' : 'No'}</p>
//         <p>Breed: ${this.breed}</p>
//       `;
//       return element;
//     }
//   }

//   const cat = new Cat('Fluffy', 3, true, true, 'tabby');
//   const dog = new Dog('Fido', 2, false, false, 'labrador');

//   document.body.appendChild(cat.toElement());
//   document.body.appendChild(dog.toElement());


const container = document.querySelector('.container')
class Car {
    constructor(name, model, color, year, price, imageUrl) {
        this.name = name;
        this.color = color;
        this.year = year;
        this.price = price;
        this.model = model;
        // this.imageUrl = imageUrl;
    }
    getNameModel() {
        return `${this.name} ${this.model}`;
    }
}

class Sedan {
    constructor(car) {
        this.car = car;
    }
    toElement() {
        const element = document.createElement('div')
        element.classList.add('card');
        
        element.innerHTML = `
        <h1>Sedan</h1>
        <h2>${this.car.getNameModel()}</h2>
           <p>Year: ${this.car.year}</p>
           <p>Color: ${this.car.color}</p>
           <p>Price: ${this.car.price}$</p>
        `
        return element;
    }
}

class Kamaz {
    constructor(car) {
        this.car = car;
    }
    toElement() {
        const element = document.createElement('div')
        element.classList.add('card');
        element.innerHTML = `
        <h1>Kamaz</h1>
           <h2>${this.car.getNameModel()}</h2>
           <p>Year: ${this.car.year}</p>
           <p>Color: ${this.car.color}</p>
           <p>Price: ${this.car.price}$</p>
        `
        return element;
    }
}
class Pickup {
    constructor(car) {
        this.car = car;
    }
    toElement() {
        const element = document.createElement('div')
        element.classList.add('card');
        element.innerHTML = `
        <h1>Pickup</h1>
           <h2>${this.car.getNameModel()}</h2>
           <p>Year: ${this.car.year}</p>
           <p>Color: ${this.car.color}</p>
           <p>Price: ${this.car.price}$</p>
           
        `
        return element;
    }
}
class Hatchback {
    constructor(car) {
        this.car = car;
    }
    toElement() {
        const element = document.createElement('div')
        element.classList.add('card');
        element.innerHTML = `
        <h1>Hatchback</h1>
           <h2>${this.car.getNameModel()}</h2>
           <p>Year: ${this.car.year}</p>
           <p>Color: ${this.car.color}</p>
           <p>Price: ${this.car.price}$</p>
      `
      return element
    }
}
class Crossover {
    constructor(car) {
        this.car = car;
    }
    toElement() {
        const element = document.createElement('div')
        element.classList.add('card');
        element.innerHTML = `
        <h1>Crossover</h1>
           <h2>${this.car.getNameModel()}</h2>
           <p>Year: ${this.car.year}</p>
           <p>Color: ${this.car.color}</p>
           <p>Price: ${this.car.price}$</p>
      `
      return element
    }
}

const sedanCar = new Car('Toyota', 'Corolla', 'Red', 2019, 20000)
const sedanCar2  = new Car('Lacetti', 'Chevrolet', 'black', 2013, 9000)
const sedanCar3  = new Car('Nexia', 'Chevrolet', 'white', 2018, 13000)
const kamaz  = new Car('Zill', '5325', 'white', 2016, 22000)
const pickup  = new Car('Labo', 'Chevrolet', 'white', 2020, 11000)
const pickup2  = new Car('Ram', '1500', 'silver', 2022, 350000)
const hatchback  = new Car('Matiz', 'Daewoo', 'white', 2014, 6500)
const crossover  = new Car('Captiva', 'Chevrolet', 'black', 2017, 14000)
const crossover2  = new Car('Equinox', 'Chevrolet', 'black', 2023, 50000)
const crossover3  = new Car('Tracker', 'Chevrolet', 'Purple', 2021, 22000)
container.appendChild(new Sedan(sedanCar).toElement());
container.appendChild(new Sedan(sedanCar2).toElement());
container.appendChild(new Sedan(sedanCar3).toElement());
container.appendChild(new Kamaz(kamaz).toElement());
container.appendChild(new Pickup(pickup).toElement());
container.appendChild(new Pickup(pickup2).toElement());
container.appendChild(new Hatchback(hatchback).toElement());
container.appendChild(new Crossover(crossover).toElement());
container.appendChild(new Crossover(crossover2).toElement());
container.appendChild(new Crossover(crossover3).toElement());