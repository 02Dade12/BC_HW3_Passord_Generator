// Assignment Code
var generateBtn = document.querySelector("#generate");

var pwlength
var confirmNumbers;
var confirmUppercase;
var confirmLowercase;
var confirmSpecial;

//user will decide how many characters they want in their password
pwlength = parseInt(prompt("How long do you want your new password? Choose beteewn 8-128 characters."));

while(pwlength <= 7 || pwlength >=128) {
  alert("Password much be between 8-128 characters long, try again");
  pwlength = parseInt(prompt("How long do you want your new password? Choose beteewn 8-128 characters."));
};

alert("Your password will be comprised of " + pwlength + " characters.");

//confirms use of casing, numbers, & special characters
confirmNumbers = confirm("Include numbers in this password?");
confirmUppercase = confirm("Include Uppercase lettering in this password?");
confirmLowercase = confirm("Include Lowercase lettering in this password?");
confirmSpecial = confirm("Include special characters in this password?");

//validates whether user selected options for password characters
while(confirmNumbers === false && confirmUppercase === false && confirmLowercase === false && confirmSpecial === false){
  alert("You must choose at least one criteria")
  confirmNumbers = confirm("Include numbers in this password?");
  confirmUppercase = confirm("Include Uppercase lettering in this password?");
  confirmLowercase = confirm("Include Lowercase lettering in this password?");
  confirmSpecial = confirm("Include special characters in this password?");
};

//Console Log - confirm choices
console.log("Password Length is " + pwlength);
console.log("Add numbers is " + confirmNumbers);
console.log("Add upper casing is " + confirmUppercase);
console.log("Add lower casing is " + confirmLowercase);
console.log("Add special characters is " + confirmSpecial);

////////////
function generatePassword(pwlength) {

var character = "";
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


//create variable that gets set when user hits generate
var password = "";

//create for loop to choose various passwords
for (var i = 0; i < pwlength; i++) {    
  chacracter = all.substring(Math.floor(Math.random() * all.length));
  password += all.substring(character, character + 1);

}
return character;
console.log(character)
};

document.getElementById("password").value = password;

//////////// 

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
