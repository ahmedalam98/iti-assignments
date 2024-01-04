if (window.localStorage) {
  let myLocalStorage = {
    cookiesObj: {},

    setItem: function (key, val) {
      document.cookie = key + "=" + val;
      this.cookiesObj[key] = val;
    },

    getItem: function (key) {
      return this.cookiesObj[key];
    },

    removeItem: function (key) {
      var date = new Date();
      date.setFullYear(date.getFullYear() - 1);
      document.cookie = key + "=" + ";expires=" + date.toUTCString();
    },

    clear: function () {
      var date = new Date();
      date.setFullYear(date.getFullYear() + 1);
      this.separate();
      for (const key in this.cookiesObj) {
        document.cookie = key + "=" + ";expires=" + date.toUTCString();
      }
    },

    separate: function () {
      var keyVal = document.cookie.split(/=|;/);

      for (var i = 0; i < keyVal.length; i++) {
        var key = keyVal[i].trim();
        var val = keyVal[i + 1];
        i++;
        this.cookiesObj[key] = val;
      }
    },
  };

  window.localStorage = myLocalStorage;

  myLocalStorage.clear();
  myLocalStorage.setItem("userName", "Ahmed Alam El-Deen");
  myLocalStorage.setItem("age", "25");
  myLocalStorage.getItem("userName");

  console.log(myLocalStorage.cookiesObj);
}
