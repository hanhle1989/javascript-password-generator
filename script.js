// Program starts when user clicks "Generate Password"
document.querySelector("#generate").addEventListener("click", writePassword);

// Password variables
var number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialcharacter = ["~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "-", "[", "]", "{", "}", "<", ">", "?"];
var lowerletter = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m"];
var upperletter = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "A", "S", "D", "F", "G", "H", "J", "K", "L", "Z", "X", "C", "V", "B", "N", "M"];

// User input variables
var confirmLength = "";
var confirmNumber;
var confirmSpecialCharacter;
var confirmLowerLetter;
var confirmUpperLetter;

//Generate Password Function
function writePassword() {

  //User Input Questions
  var confirmLength = parseInt(prompt("How many characters do you want your password to have? (Please choose a number between 8 and 128)"));
  var confirmNumber = confirm("Select OK to include numbers. Select Cancel to NOT include numbers.");
  var confirmSpecialCharacter = confirm("Select OK to include special characters. Select Cancel to NOT include special characters.");
  var confirmLowerLetter = confirm("Select OK to include lowercase letters. Select Cancel to NOT include lowercase letters.");
  var confirmUpperLetter = confirm("Select OK to include uppercase letters. Select Cancel to NOT include uppercase letters.");

  //Generating password based on user inputs
  var generatepassword = ""
  if (confirmNumber && confirmSpecialCharacter && confirmLowerLetter && confirmUpperLetter) {
    generatepassword = number.concat(specialcharacter, lowerletter, upperletter);
  }

  else if (confirmSpecialCharacter && confirmLowerLetter && confirmUpperLetter) {
    generatepassword = specialcharacter.concat(lowerletter, upperletter);
  }

  else if (confirmNumber && confirmLowerLetter && confirmUpperLetter) {
    generatepassword = number.concat(lowerletter, upperletter);
  }

  else if (confirmSpecialCharacter && confirmNumber && confirmUpperLetter) {
    generatepassword = specialcharacter.concat(number, upperletter);
  }

  else if (confirmNumber && confirmSpecialCharacter && confirmLowerLetter) {
    generatepassword = number.concat(specialcharacter, lowerletter);
  }

  else if (confirmLowerLetter && confirmUpperLetter) {
    generatepassword = lowerletter.concat(upperletter);
  }

  else if (confirmNumber && confirmUpperLetter) {
    generatepassword = number.concat(upperletter);
  }

  else if (confirmNumber && confirmSpecialCharacter) {
    generatepassword = number.concat(specialcharacter);
  }

  else if (confirmSpecialCharacter && confirmLowerLetter) {
    generatepassword = specialcharacter.concat(lowerletter);
  }

  else if (confirmSpecialCharacter && confirmUpperLetter) {
    generatepassword = specialcharacter.concat(upperletter);
  }

  else if (confirmNumber && confirmLowerLetter) {
    generatepassword = number.concat(lowerletter);
  }

  else if (confirmNumber) {
    generatepassword = number;
  }

  else if (confirmSpecialCharacter) {
    generatepassword = specialcharacter;
  }

  else if (confirmLowerLetter) {
    generatepassword = lowerletter;
  }

  else if (confirmUpperLetter) {
    generatepassword = upperletter;
  }

  //Random password result
  var finalPassword = ""
  for (var i = 0; i < confirmLength; i++) {
    finalPassword = finalPassword + generatepassword[Math.floor(Math.random() * generatepassword.length)];
  }

  //Random password displays in box
  document.querySelector("#password").value = finalPassword;

}

