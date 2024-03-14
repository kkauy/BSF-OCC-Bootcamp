//Encapsulation

class Shape {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  calculateArea(){
    throw new Error("Method Not Implemented");
  }
}

//Polymorphism
class Rectangle extends Shape {
    displayFormula(){
        console.log(`The area of a rectangle is: ${this.width} * ${this.height}`);
    }
    calculateArea(){
        let area = this.width * this.height;
        console.log(`${this.width} * ${this.height} = ${area}`); 
    }
}

let shape1 = new Rectangle(5,15);
shape1.displayFormula();
shape1.calculateArea();

 