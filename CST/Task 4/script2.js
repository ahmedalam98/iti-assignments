// 1.2

var headline = alert("Palindrome Strings Task");
var response = prompt("Enter your string");
var ignoreCase = confirm("Do you want to ignor case sensitive or not ?");

function isPalindrome(str, ignoreCase) {
  const formattedStr = ignoreCase ? str.toLowerCase() : str;

  const reversedStr = formattedStr.split("").reverse().join("");

  return formattedStr === reversedStr;
}

const result = isPalindrome(response, ignoreCase);

if (result) {
  console.log("The entered string is a palindrome.");
} else {
  console.log("The entered string is not a palindrome.");
}
