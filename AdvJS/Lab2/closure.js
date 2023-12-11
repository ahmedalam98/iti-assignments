const MyObj = {
  id: null,
  phone: null,

  // I will use bracket notation to access properties through loop because property is a variable and not a literal property
  getSetGen: function () {
    const properties = Object.keys(this).filter(
      (property) => typeof this[property] !== "function"
    );

    // Properties ---> Only Keys

    // Method 1

    var obj = this; // Reference to the object because IIFE function don't have access to (this) keyword
    for (var i = 0; i < properties.length; i++) {
      const propName =
        properties[i].charAt(0).toUpperCase() + properties[i].slice(1);

      (function (i) {
        obj["get" + propName] = function () {
          return obj[properties[i]];
        };

        obj["set" + propName] = function (newValue) {
          obj[properties[i]] = newValue;
        };
      })(i);
    }

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    // Method 2

    // To access values ---> this[property]

    // properties.forEach((property) => {
    //   const propName = property.charAt(0).toUpperCase() + property.slice(1);

    //   this["get" + propName] = function () {
    //     return this[property];
    //   };

    //   this["set" + propName] = function (newValue) {
    //     this[property] = newValue;
    //   };
    // });
  },
};

var child1 = Object.create(MyObj);
child1.address = "Port Said";

child1.getSetGen();
console.log(child1.getAddress());

var child2 = {
  name: "Ahmed",
};

MyObj.getSetGen.call(child2);
console.log(child2.getName());
