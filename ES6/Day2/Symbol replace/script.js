const myReplacer = {
  [Symbol.replace](str) {
    return str.length > 15 ? str.slice(0, 15) + "..." : str;
  },
};

const myString = "This function displays only 15 characters";

const newString = myString.replace(myReplacer);

console.log(newString);
