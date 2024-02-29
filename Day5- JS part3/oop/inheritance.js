//Inheritance

class Animal {
    constructor(name) {
        this.name = name;
    }
    eat() {
        console.log(`${this.name} is eating`);
    }
}

// child class Dog
class Dog extends Animal {
    bark() {
        console.log("Woof Woof!");
    }
}

class Cat extends Animal {
    meow() {
        console.log("Meow Meow!");
    }
}

const myDog = new Dog("Fluffy");
myDog.bark();
myDog.eat();

const cat = new Cat("Sparky");
cat.meow();
cat.eat();