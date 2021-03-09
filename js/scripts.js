$(document).ready(function() {
  let userSentence = prompt("Write a sentence:");
  console.log(userSentence)
  upperCaseFirstLast(userSentence);
});

const upperCaseFirstLast = function(sentence) {
  let firstChar = sentence.charAt(0).toUpperCase();
  let lastChar = sentence.charAt(sentence.length-1).toUpperCase();

  console.log("length: " + sentence.length);
  console.log("first char: " + firstChar);
  console.log("last char: " + lastChar);
  alert("first char: " + firstChar + " last char: " + lastChar);
  return;
};

