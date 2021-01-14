// User input variables: 
document.querySelector("#generate").addEventListener("click", writePassword);

var confirmLength = "";
var confirmNumber;
var confirmSpecialCharacter;
var confirmLowerLetter;
var confirmUpperLetter;

// Start Password variable values:
var number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialcharacter = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "<", "=", ">", "?", "@", "[", "]", "^", "`", "{", "|", "}", "~"];
var lowerletter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperletter = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// Start function to generate password
function writePassword() {
  // Asks for user input
  var confirmLength = parseInt(prompt("How many characters do you want your password to have? (Please choose between 8-128)"));
  
  var confirmNumber = confirm("Select OK to include numbers");
  var confirmSpecialCharacter = confirm("Select OK to include special characters");
  var confirmLowerLetter = confirm("Select OK to include lowercase letters");
  var confirmUpperLetter = confirm("Select OK to include uppercase letters");

  var generatepassword = []
  if (confirmNumber) {
    generatepassword = generatepassword.concat(number);
  }

  if (confirmSpecialCharacter) {
    generatepassword = generatepassword.concat(specialcharacter);
  }

  if (confirmLowerLetter) {
    generatepassword = generatepassword.concat(lowerletter);
  }

  if (confirmUpperLetter) {
    generatepassword = generatepassword.concat(upperletter);
  }

  var finalPassword = ""
  for (var i = 0; i < confirmLength; i++) {
    finalPassword = finalPassword + generatepassword[Math.floor(Math.random() * generatepassword.length)];
  }

  document.querySelector("#password").value = finalPassword;

}

