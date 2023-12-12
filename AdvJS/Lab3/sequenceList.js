function List(start, end, step) {
  this.start = start;
  this.end = end;
  this.step = step;

  // Private Member
  var values = [];

  // Creation of values list
  var createValues = function () {
    if (this.start < this.end) {
      for (var i = this.start; i <= this.end; i += this.step) {
        values.push({ val: i });
      }
    }
  }.bind(this);

  // Instances values array immediate filler
  createValues();

  //////////////////////////////////////////////////////////////////////

  this.pushVal = function (val) {
    if (values.length === 0) {
      if (val % this.step === 0) {
        values.push(val);
      } else {
        throw new Error(`You can't push this value`);
      }
    } else {
      var lastElement = values[values.length - 1];
      var existed = values.find((element) => element.val === val);

      if (existed) {
        throw new Error(`You can't push this value, It's already existed`);
      } else {
        if (lastElement.val < val && val === lastElement.val + this.step) {
          values.push(val);
        } else {
          throw new Error(
            `You can't push this value, It's not related to sequence`
          );
        }
      }
    }
  };

  this.unShiftVal = function (val) {
    if (values.length === 0) {
      values.unshift(val);
    } else {
      var firstElement = values[0];
      var existed = values.find((element) => element.val === val);

      if (existed) {
        throw new Error(`You can't unshift this value, It's already existed`);
      } else {
        if (firstElement.val > val && val === firstElement.val - this.step) {
          values.unshift(val);
        } else {
          throw new Error(
            `You can't unshift this value, It's not related to sequence`
          );
        }
      }
    }
  };

  this.popVal = function () {
    if (values.length === 0) {
      throw new Error(`You can't pop from an empty list`);
    }

    values.pop();
  };

  this.shiftVal = function () {
    if (values.length === 0) {
      throw new Error(`You can't shift from an empty list`);
    }

    values.shift();
  };

  this.displayContent = function () {
    return values;
  };
}
