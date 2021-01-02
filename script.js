// Assignment Code
var generateBtn = document.querySelector("#generate");

//user will decide how many characters they want in their password
var pwlength = parseInt(prompt("How long do you want your new password? Choose beteewn 8-128 characters."));

while(pwlength <= 7 || pwlength >=128) {
  alert("Password much be between 8-128 characters long, try again");
  var pwlength = parseInt(prompt("How long do you want your new password? Choose beteewn 8-128 characters."));
}

alert("Your password will be comprised of " + pwlength + " characters.");

console.log(pwlength)

var confirmnumbers = confirm("Include numbers in this password?");
var confirmUppercase = confirm("Include Uppercase lettering in this password?");
var confirmLowercase = confirm("Include Lowercase lettering in this password?");
var confirmSpecial = confirm("Include special characters in this password?");

//validates whether user selects options for password characters

while(confirmnumbers === false && confirmUppercase === false && confirmLowercase === false && confirmSpecial === false){
  alert("You must choose at least one criteria")
  var confirmnumbers = confirm("Include numbers in this password?");
  var confirmUppercase = confirm("Include Uppercase lettering in this password?");
  var confirmLowercase = confirm("Include Lowercase lettering in this password?");
  var confirmSpecial = confirm("Include special characters in this password?");
}




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


//var Numeric = "0,1,2,3,4,5,6,7,8,9";
//var Uppercase = "'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'";
//var Lowercase = "'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'";
//var Special = "'!','@','#','$','%','^','&','*','(',')',','_','+'";