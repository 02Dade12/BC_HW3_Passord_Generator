// Assignment Code
var generateBtn = document.querySelector("#generate");

// Global Variables
var pwlength = 0;
var confirmNumbers = false;
var confirmUppercase = false;
var confirmLowercase = false;
var confirmSpecial = false;

// Function
function generatePassword() {

  var character;
  var lower = "abcdefghijklmnopqrstuvwxyz";
  var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var special = "!@#$%^&*()-_=+;:',<.>/?";
  var numbers = "0123456789";
  var all = "";
  if (confirmLowercase) {
    all = all + lower;
  }
  if (confirmUppercase) {
    all = all + upper;
  }
  if (confirmSpecial) {
    all = all + special;
  }
  if (confirmNumbers) {
    all = all + numbers;
  }

  // Create variable that gets set when user hits generate
  var password = "";

  // Create for loop to choose various passwords
  for (var i = 0; i < pwlength; i++) {
    character = (Math.floor(Math.random() * all.length));
    password += all.substring(character, character + 1);
  }

  return password;
};

// Write password to the #password input
function writePassword() {

  //user will decide how many characters they want in their password
  pwlength = parseInt(prompt("How long do you want your new password? Choose beteewn 8-128 characters."));

  while (pwlength <= 7 || pwlength >= 128 || isNaN(pwlength)) {
    alert("Password much be between 8-128 characters long, try again");
    pwlength = parseInt(prompt("How long do you want your new password? Choose beteewn 8-128 characters."));
  };

  alert("Your password will be comprised of " + pwlength + " characters.");

  //validates whether user selected options for password characters
  while (confirmNumbers === false && confirmUppercase === false && confirmLowercase === false && confirmSpecial === false) {
    alert("You must choose at least one criteria")
    confirmNumbers = confirm("Include numbers in this password?");
    confirmUppercase = confirm("Include Uppercase lettering in this password?");
    confirmLowercase = confirm("Include Lowercase lettering in this password?");
    confirmSpecial = confirm("Include special characters in this password?");
  };

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

    pwlength = 0;
    confirmNumbers = false;
    confirmUppercase = false;
    confirmLowercase = false;
    confirmSpecial = false;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
