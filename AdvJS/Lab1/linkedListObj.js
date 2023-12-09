var linkedListObj = {
  values: [],

  pushVal: function (obj) {
    if (this.values.length === 0) {
      this.values.push(obj);
      return this.values;
    }

    var lastElement = this.values[this.values.length - 1];
    var existed = this.values.find((element) => element.val === obj.val);

    if (existed) {
      throw new Error(`You can't push this value, It's already existed`);
    } else {
      if (lastElement.val < obj.val) {
        this.values.push(obj);
        return this.values;
      } else {
        throw new Error(
          `You can't push this value, Try value bigger than ${lastElement.val} or use insertVal() `
        );
      }
    }
  },

  popVal: function () {
    if (this.values.length === 0) {
      throw new Error(`You can't pop from an empty list`);
    }

    this.values.pop();
    return this.values;
  },

  shiftVal: function () {
    if (this.values.length === 0) {
      throw new Error(`You can't shift from an empty list`);
    }

    this.values.shift();
    return this.values;
  },

  unShiftVal: function (obj) {
    if (this.values.length === 0) {
      this.values.unshift(obj);
      return this.values;
    }

    var firstElement = this.values[0];
    var existed = this.values.find((element) => element.val === obj.val);

    if (existed) {
      throw new Error(`You can't unshift this value, It's already existed`);
    } else {
      if (firstElement.val > obj.val) {
        this.values.unshift(obj);
        return this.values;
      } else {
        throw new Error(
          `You can't unshift this value, Try value smaller than ${firstElement.val} or use insertVal() `
        );
      }
    }
  },

  insertVal: function (obj) {
    var position = this.values.findIndex((element) => element.val > obj.val);
    var existed = this.values.find((element) => element.val === obj.val);

    if (existed) {
      throw new Error(`You can't insert this value, It's already existed`);
    } else {
      if (position === -1) {
        this.pushVal(obj);
      } else {
        this.values.splice(position, 0, obj);
      }

      return this.values;
    }
  },

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

  displayContent: function () {
    return this.values;
  },
};
