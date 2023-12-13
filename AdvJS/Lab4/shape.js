// Shape Constructor
function Shape() {
  // make it abstract
  if (this.constructor === Shape) {
    throw new Error("Shape is an abstract.");
  }
}

//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////

// Rectangle  Constructor
function Rectangle(width, height) {
  // Allow creation of only one instance
  if (Rectangle.instance) {
    return Rectangle.instance;
  }

  // inherits from Shape
  Shape.call(this);

  // count the number of generated Square
  Rectangle.count = (Rectangle.count || 0) + 1;

  this.width = width;
  this.height = height;

  this.calcArea = function () {
    return this.width * this.height;
  };

  this.calcPerimeter = function () {
    return 2 * this.width + 2 * this.height;
  };

  // Accessor property for area
  Object.defineProperty(this, "area", {
    get: function () {
      return calcArea();
    },
    configurable: false,
    enumerable: false,
  });

  // Accessor property for perimeter
  Object.defineProperty(this, "perimeter", {
    get: function () {
      return calcPerimeter();
    },
    configurable: false,
    enumerable: false,
  });

  // toString method
  this.toString = function () {
    return (
      "Rectangle { Width: " +
      this.width +
      " , Height: " +
      this.height +
      " , Area: " +
      this.calcArea() +
      ", Perimeter: " +
      this.calcPerimeter() +
      " }"
    );
  };

  // valueOf method
  this.valueOf = function () {
    return this.calcArea();
  };

  // Store the instance
  Rectangle.instance = this;
}

////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////

// Square Constructor
function Square(side) {
  if (Square.instance) {
    return Square.instance;
  }

  //  inherits from Rectangle
  Rectangle.call(this, side, side);

  // count the number of generated Square
  Square.count = (Square.count || 0) + 1;

  // toString method (overrides the Rectangle one)
  this.toString = function () {
    return (
      "Square {Side: " +
      this.width +
      ", Area: " +
      this.calcArea() +
      ", Perimeter: " +
      this.calcPerimeter() +
      "}"
    );
  };

  // Store the instance
  Square.instance = this;
}

var rectangle1 = new Rectangle(5, 6);
var rectangle2 = new Rectangle(3, 4);
var square1 = new Square(5);
var square2 = new Square(6);

console.log(rectangle1.toString());
console.log(rectangle2.toString());
console.log(square1.toString());

console.log("Operator + for rec areas =" + (rectangle1 + rectangle2));
console.log("Operator - for rec areas =" + (rectangle1 - rectangle2));

console.log("Number of generated Rectangle objects: ", Rectangle.count);
console.log("Number of generated Square objects: ", Square.count);
