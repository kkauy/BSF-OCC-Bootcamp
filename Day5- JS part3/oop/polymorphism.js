//Polymorphism

class Animal {
    makeSound() {
        return 'The animal makes a sound';
    }
}

class Dog extends Animal {
    makeSound() {
        return  super.makeSound + 'The dog makes a sound';
    }
}

class cat extends Animal {
    makeSound(){
        return supermakeound() + "The cat makes a sound";
    }
}
 
const myAnimal = new Animal();
console.log(myAnimal.makeSound()); // Output: The animal makes a sound

const dog = new Dog();
console.log(dog.makeSound()); // Output: The dog makes a sound

const myCat = new Cat();
console.log(cat.makeSound());//Output: The animal makes a sound

