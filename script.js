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

// Declare variables for user input
var passwordLength;
var containsLowercase;
var containsUppercase;
var containsNumber;
var containsSpecialCharacters;

// Get lenght for user's password and stores information in variable passwordLength
function getLength() {
  passwordLength = prompt("Type the number of characters your password needs to have:");
  // Convert string to number in order to use variable in a for loop later in the code
  passwordLength = parseInt(passwordLength);
  //Validates if user entered a length within 8 and 128 characters
  if ((passwordLength < 8) || (passwordLength > 128)) {
    alert("You password needs to have at least 8 characters and no more than 128 characters");
    getLength();
  }
}
// Get type of characters that user wants in their password and stores information in variables
function getCharactersType() {
  containsLowercase = confirm("Do you want to include lowercase characters?");
  containsUppercase = confirm("Do you want to include uppercase characters?");
  containsNumber = confirm("Do you want to include numbers?");
  containsSpecialCharacters = confirm("Do you want to include special characters?");
}

// Validate if user picked at least one type of character
function validateInput() {
  if (!containsLowercase && !containsUppercase && !containsNumber && !containsSpecialCharacters) {
    alert("You must choose at least one type of characters");
    getCharactersType();
  }
}

// Generate password based on conditions
function generatePassword() {
  // Arrays with all characters in each type
  var lowercaseCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var uppercaseCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var numberCharacters = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  var specialCharacters = [" ", "!", "\"", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];
  // Array with all characters based on user's picks
  var possibleCharacters = [];

  getLength();
  getCharactersType();
  validateInput();

  // Add characters that user picked on possibleCharacters array that was previously empty
  if (containsLowercase) {
    possibleCharacters = possibleCharacters.concat(lowercaseCharacters);
  } if (containsUppercase) {
    possibleCharacters = possibleCharacters.concat(uppercaseCharacters);
  } if (containsNumber) {
    possibleCharacters = possibleCharacters.concat(numberCharacters);
  } if (containsSpecialCharacters) {
    possibleCharacters = possibleCharacters.concat(specialCharacters);
  }

  // Variable that will contain final password
  var password = "";

  // Add random character to password string as many times as user picked as their password length
  for (var i = 0; i < passwordLength; i++) {
    password = password.concat(possibleCharacters[Math.floor(Math.random() * possibleCharacters.length)]);
  }

  return password;
}

