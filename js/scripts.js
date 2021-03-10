$(document).ready(function() {
  let userSentence = prompt("Write a sentence:");
  alert(mainFunction(userSentence));
});

const upperCaseFirstLast = function(sentence) {
  let firstChar = sentence.charAt(0).toUpperCase();
  let lastChar = sentence.charAt(sentence.length-1).toUpperCase();
  return firstChar + lastChar;
};

const reverseFirstLast = function(chars) {
  reverseString = chars.charAt(1) + chars.charAt(0);
  return reverseString;
};

const halfOfSentence = function(sentence) {
  let oneHalf = sentence.charAt(sentence.length / 2);
  return oneHalf;
};

const mainFunction = function(string) {
  const capLetters = upperCaseFirstLast(string);
  let newString = halfOfSentence(string) + string + reverseFirstLast(capLetters);
  let finalCipher = newString.split("").reverse().join("");
  return finalCipher;
};