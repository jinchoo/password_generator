var generateBtn = document.querySelector("#generate");

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

passwordText.value = password;

}

generateBtn.addEventListener("click", writePassword);

var generateBtn = document.querySelector('#generate');
function getRandomIndex(maxLength) {
  return Math.floor(Math.random() * Math.floor(maxLength)); 
}; 

function generatePassword() {
  var passwordLength;
  var listOfCharacters = '';
  var newPassword = '';
  var index;
  
  passwordLength = prompt('How long should the new password be?');

  while (passwordLength < 8 || passwordLength > 128) {
    alert('The length of the password must be at least 8 characters but no more than 128 characters.  Please try again.');
    passwordLength = prompt('How long should the new password be?');
 } 
  
while (listOfCharacters === '') {
  if (confirm('Allow lower-case characters?'))  {
    listOfCharacters = listOfCharacters + 'abcdefghijklmnopqrstuvwxyz';
  }
    
  if (confirm('Allow upper-case characters?')) {
    listOfCharacters = listOfCharacters + 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }
  
  if (confirm('Allow numbers?')) {
    listOfCharacters = listOfCharacters + '0123456789';
  }
   
  if (confirm('Allow special characters?')) {
    listOfCharacters = listOfCharacters + '!@#$%^&*()+-';
  }
}
  
for (var i = 0; i < passwordLength; i++) {
  index = getRandomIndex(listOfCharacters.length);
  newPassword = newPassword + listOfCharacters.charAt(index);
  }

  return newPassword;
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
generateBtn.addEventListener("click", writePassword);