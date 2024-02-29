//Polymorphism

class Animal {
    makeSound() {
        return 'The animal makes a sound';
    }
}

class Dog extends Animal {
    makeSound() {
        return 'The dog makes a sound';
    }
}

const myAnimal = new Animal();
console.log(myAnimal.makeSound()); // Output: The animal makes a sound

const dog = new Dog();
console.log(dog.makeSound()); // Output: The dog makes a sound

