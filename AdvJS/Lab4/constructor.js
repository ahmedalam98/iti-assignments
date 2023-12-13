function Vehicle(speed, color) {
  if (typeof arguments[0] !== "number" || typeof arguments[1] !== "number") {
    throw new Error("Arguments must be numbers");
  }

  Object.defineProperty(this, "speed", {
    value: speed,
    writable: false,
    configurable: false,
    enumerable: false,
  });

  Object.defineProperty(this, "color", {
    value: color,
    writable: false,
    configurable: false,
    enumerable: false,
  });

  this.turnLeft = function () {
    console.log("turn Left");
  };

  this.turnRight = function () {
    console.log("turn Right");
  };

  this.start = function () {
    if ("value") {
      return true;
    }
  };

  this.stop = function () {
    return true;
  };

  this.goBackWard = function () {
    this.speed -= 50;
  };

  this.goForward = function () {
    this.speed += 50;
  };
}

////////////////////////////////////////////////////////////

function Bicycle(speed, color) {
  Vehicle.call(this, speed, color);
  this.ringBell = function () {
    console.log("Beeb Beeb Beeb");
  };
}

// Ensure that the constructor property of Bicycle.prototype points to the Bicycle constructor function.
Bicycle.prototype = Object.create(Vehicle.prototype);
Bicycle.prototype.constructor = Bicycle;

////////////////////////////////////////////////////////////

function MotorVehicle(speed, color, sizeOfEngine, licencePlate) {
  if (typeof arguments[2] !== "number" || typeof arguments[3] !== "string") {
    throw new Error("Enter the right data types");
  }

  Vehicle.call(this, speed, color);

  Object.defineProperty(this, "sizeOfEngine", {
    value: sizeOfEngine,
    writable: false,
    configurable: false,
    enumerable: false,
  });

  Object.defineProperty(this, "licencePlate", {
    value: licencePlate,
    writable: false,
    configurable: false,
    enumerable: false,
  });
}

MotorVehicle.prototype.getSizeOfEngine = function () {
  return this.sizeOfEngine;
};

MotorVehicle.prototype.getLicencePlate = function () {
  return this.getLicencePlate;
};

MotorVehicle.prototype = Object.create(Vehicle.prototype);
MotorVehicle.prototype.constructor = MotorVehicle;

////////////////////////////////////////////////////////////

function Car(
  speed,
  color,
  sizeOfEngine,
  licencePlate,
  numOfDoors,
  numWheels,
  weight
) {
  if (
    typeof arguments[4] !== "number" ||
    typeof arguments[5] !== "number" ||
    typeof arguments[6] !== "number"
  ) {
    throw new Error("Enter Numbers for doors, wheels, and weight");
  }

  MotorVehicle.call(this, speed, color, sizeOfEngine, licencePlate);

  Object.defineProperty(this, "numOfDoors", {
    value: numOfDoors,
    writable: false,
    configurable: false,
    enumerable: false,
  });

  Object.defineProperty(this, "numWheels", {
    value: numWheels,
    writable: false,
    configurable: false,
    enumerable: false,
  });

  Object.defineProperty(this, "weight", {
    value: weight,
    writable: false,
    configurable: false,
    enumerable: false,
  });

  this.switchOnAirCon = function () {
    console.log("Switched on");
  };

  this.getNumOfDoors = function () {
    return this.numOfDoors;
  };
}

Car.prototype = Object.create(MotorVehicle.prototype);
Car.prototype.constructor = Car;

////////////////////////////////////////////////////////////

function DumpTruck(
  speed,
  color,
  sizeOfEngine,
  licencePlate,
  loadCapacity,
  numwheels,
  weight
) {
  if (
    typeof arguments[4] !== "number" ||
    typeof arguments[5] !== "number" ||
    typeof arguments[6] !== "number"
  ) {
    throw new Error("Enter the right data types");
  }
  MotorVehicle.call(this, speed, color, sizeOfEngine, licencePlate);

  Object.defineProperty(this, "loadCapacity", {
    value: loadCapacity,
    writable: false,
    configurable: false,
    enumerable: false,
  });

  Object.defineProperty(this, "numwheels", {
    value: numwheels,
    writable: false,
    configurable: false,
    enumerable: false,
  });

  Object.defineProperty(this, "weight", {
    value: weight,
    writable: false,
    configurable: false,
    enumerable: false,
  });

  this.lowerLoad = function () {
    console.log("lower load");
  };

  this.raiseLoad = function () {
    console.log("raise load");
  };
}

DumpTruck.prototype = Object.create(MotorVehicle.prototype);
DumpTruck.prototype.constructor = DumpTruck;

let tesla = new Vehicle(2, 50);
let honda = new Car(2, 6, 8, "ط ع أ", 4, 4, 7000);

console.log(tesla);
console.log(honda);
