let myLocalStorage = {
  cookiesObj: {},

  setItem: function (key, val, daysToExpire = 365) {
    let expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + daysToExpire);
    document.cookie = `${key}=${val}; expires=${expirationDate.toUTCString()}`;
    this.cookiesObj[key] = val;
  },

  getItem: function (key) {
    return this.cookiesObj[key];
  },

  removeItem: function (key) {
    document.cookie = `${key}=; expires=Thu, 01 Jan 1970 00:00:00 UTC`;
    delete this.cookiesObj[key];
  },

  clear: function () {
    for (const key in this.cookiesObj) {
      this.removeItem(key);
    }
  },
};
