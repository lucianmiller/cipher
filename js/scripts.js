$(document).ready(function() {
  let userSentence = prompt("Write a sentence:");
  console.log(userSentence)
  mainFunction(userSentence);
});

const upperCaseFirstLast = function(sentence) {
  let firstChar = sentence.charAt(0).toUpperCase();
  let lastChar = sentence.charAt(sentence.length-1).toUpperCase();

  console.log("length: " + sentence.length);
  console.log("first char: " + firstChar);
  console.log("last char: " + lastChar);
  alert("first char: " + firstChar + " last char: " + lastChar);
  return firstChar + lastChar;
};

const reverseFirstLast = function(chars) {
  reverseString = chars.charAt(1) + chars.charAt(0);
  console.log(reverseString);
  return reverseString;
};

const halfOfSentence = function(sentence) {
  let oneHalf = sentence.charAt(sentence.length / 2);
  console.log(oneHalf);
  return oneHalf;
};

const mainFunction = function(string) {
  const capLetters = upperCaseFirstLast(string);
  let newString = halfOfSentence(string) + string + reverseFirstLast(capLetters);
  console.log(newString);
};