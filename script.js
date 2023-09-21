// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

var passwordLength;
var containsLowercase;
var containsUppercase;
var containsNumber;
var containsSpecialCharacters;
var lowercaseCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercaseCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numberCharacters = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialCharacters = [" ", "!", "\"", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]","^", "_", "`", "{", "|", "}", "~"];

function generatePassword() {
  getLength();
  askLowercase();
  askUppercase();
  askNumber();
  askSpecialCharacters();
  validateInput();

  console.log(passwordLength);
  console.log(containsLowercase);
  console.log(containsUppercase);
  console.log(containsNumber);
  console.log(containsSpecialCharacters);
}

function getLength() {
  passwordLength = prompt("Type the number of characters your password needs to have:");

  if ((passwordLength < 8) || (passwordLength > 128)) {
    alert("You password needs to have at least 8 characters and no more than 128 characters");
    getLength();
  } 
}

function askLowercase() {
  containsLowercase = confirm("Do you want to include lowercase characters?");
}

function askUppercase() {
  containsUppercase = confirm("Do you want to include uppercase characters?");
}

function askNumber() {
  containsNumber = confirm("Do you want to include numbers?");
}

function askSpecialCharacters() {
  containsSpecialCharacters = confirm("Do you want to include special characters?");
}

function validateInput() {
  if (!containsLowercase && !containsUppercase && !containsNumber && !containsSpecialCharacters) {
    alert("You must choose at least one type of characters");
    generatePassword();
  }  
}