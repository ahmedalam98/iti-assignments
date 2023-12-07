var linkeListObj = {
  values: [{ val: 1 }, { val: 3 }, { val: 5 }],

  // Add a value to the end of the list
  pushVal: function (obj) {
    var lastElement = this.values[this.values.length - 1];
    var existed = this.values.find((element) => element.val === obj.val);

    if (existed) {
      throw new Error(`You can't push this value, It's already existed`);
    } else {
      if (lastElement.val < obj.val) {
        this.values[this.values.length] = obj;

        return this.values;
      } else {
        throw new Error(
          `You can't push this value, Try value bigger than ${lastElement.val} or use insertVal() `
        );
      }
    }
  },

  // Pop a value from the end of the list
  popVal: function () {
    this.values.splice(this.values.length - 1, 1);

    return this.values;
  },

  // Dequeue a value from the beginning of the list
  shiftVal: function () {
    this.values.splice(0, 1);

    return this.values;
  },

  // Enqueue a value from the beginning of the list
  unShiftVal: function (obj) {
    var firstElement = this.values[0];
    var existed = this.values.find((element) => element.val === obj.val);

    if (existed) {
      throw new Error(`You can't unshit this value, It's already existed`);
    } else {
      if (firstElement.val > obj.val) {
        this.values.splice(0, 0, obj);

        return this.values;
      } else {
        throw new Error(
          `You can't unshit this value, Try value smaller than ${firstElement.val} or use insertVal() `
        );
      }
    }
  },

  // Insert a value in the list
  InsertVal: function (obj) {
    var position = this.values.findIndex((element) => element.val > obj.val);
    var existed = this.values.find((element) => element.val === obj.val);

    if (existed) {
      throw new Error(`You can't insert this value, It's already existed`);
    } else {
      if (position === -1) {
        // Number is greater than all existing values, push it to the end
        this.pushVal(obj);
      } else {
        // Number is less than or equal to an existing value, insert it after that value
        this.values.splice(position, 0, obj);
      }

      return this.values;
    }
  },

  // Delete a value from the list
  deleteVal: function (obj) {
    var existed = this.values.find((element) => element.val === obj.val);

    if (existed) {
      var position = this.values.findIndex(
        (element) => element.val === obj.val
      );

      this.values.splice(position, 1);

      return this.values;
    } else {
      throw new Error(`You can't delete this value, It's not existed`);
    }
  },

  // Display the content of the list
  displayContent: function () {
    return this.values;
  },
};
