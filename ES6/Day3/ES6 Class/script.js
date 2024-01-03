class Polygon {
  constructor(sides) {
    this.sides = sides;
  }

  toString() {
    return `Polygon with ${this.sides} sides`;
  }
}

//////////////////////////////////////////////

class Rectangle extends Polygon {
  constructor(width, height) {
    // Super to call the constructor of the parent class
    super(4);
    this.width = width;
    this.height = height;
  }

  get area() {
    return this.width * this.height;
  }

  toString() {
    return `Rectangle ---> A: ${this.width}, B: ${this.height}, Area: ${this.area}`;
  }
}

//////////////////////////////////////////////

class Square extends Polygon {
  constructor(side) {
    super(4);
    this.side = side;
  }

  get area() {
    return this.side * this.side;
  }

  toString() {
    return `Square ---> X: ${this.side}, Area: ${this.area}`;
  }
}

//////////////////////////////////////////////

class Circle extends Polygon {
  constructor(radius) {
    super(0); // Circles have infinite sides
    this.radius = radius;
  }

  get area() {
    return (Math.PI * this.radius * this.radius).toFixed(3);
  }

  toString() {
    return `Circle ---> r: ${this.radius}, Area: ${this.area}`;
  }
}

//////////////////////////////////////////////

class Triangle extends Polygon {
  constructor(side1, side2, side3) {
    super(3);
    this.side1 = side1;
    this.side2 = side2;
    this.side3 = side3;
  }

  get area() {
    const s = (this.side1 + this.side2 + this.side3) / 2;
    return Math.sqrt(
      s * (s - this.side1) * (s - this.side2) * (s - this.side3)
    );
  }

  toString() {
    return `Triangle ---> X: ${this.side1}, Y: ${this.side2}, Z: ${this.side3}, Area: ${this.area}`;
  }
}

//////////////////////////////////////////////
//////////////////////////////////////////////

const rectangle = new Rectangle(5, 10);
const square = new Square(7);
const circle = new Circle(4);
const triangle = new Triangle(3, 4, 5);

console.log(rectangle.toString());
console.log(square.toString());
console.log(circle.toString());
console.log(triangle.toString());
