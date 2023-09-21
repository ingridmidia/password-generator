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
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

function generatePassword() {
  
}

function getLength() {
  passwordLength = prompt("Type the number of characters your password needs to have:");

  if ((passwordLength >= 8) && (passwordLength <= 128)) {
    askLowercase();
  } else {
    alert("You password needs to have at least 8 characters and no more than 128 characters");
    getLength();
  }
}

function askLowercase() {
  containsLowercase = confirm("Do you want to include lowercase characters?");
  askUppercase();
}

function askUppercase() {
  containsUppercase = confirm("Do you want to include uppercase characters?");
  askNumber();
}

function askNumber() {
  containsNumber = confirm("Do you want to include numbers?");
  askSpecialCharacters();
}

function askSpecialCharacters() {
  containsSpecialCharacters = confirm("Do you want to include special characters?");
  validateInput();
}

function validateInput() {
  if (containsLowercase || containsUppercase || containsNumber || containsSpecialCharacters) {
    generatePassword();
  } else {
    alert("You must chose at least one type of characters");
    askLowercase();
  }
}