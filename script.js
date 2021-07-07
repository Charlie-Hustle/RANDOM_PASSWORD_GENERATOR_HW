var button = document.querySelector("#generate");

function getPasswordOptions(numberCharacter) {
  if (isNaN(numberCharacter)) {
    alert("Please enter a valid number.");
    return false;
  } else if (parseInt(numberCharacter) < 8) {
    alert("Password length must be at least 8 characters.");
    return false;
  } else if (parseInt(numberCharacter) >= 129) {
    alert("Password must be less than 129 characters.");
    return false;
  }
  return true;    
}

function getRandomElement(newPassword) {
  return newPassword[Math.floor(Math.random() * newPassword.length)];
}

function generatePassword() {
  var numberCharacters = prompt(
    "How many characters does your password need?"
  );
  var passwordValid = getPasswordOptions(numberCharacters);
  if (passwordValid) {
    var UpperCase = confirm(
      "Click OK if you need uppercase characters for your password."
    );
    var LowerCase = confirm(
      "Click OK if you need lowercase characters for your password."
    );
    var Numbers = confirm("Click OK if you need numbers for your password.")
    ;
    var SpecialCharacters = confirm(
      "Click OK if you need special characters for your password."
    );
  }

  if (
    [UpperCase, LowerCase, Numbers, SpecialCharacters ].includes(
      true
    )
  )
    var newChar = [];
  var pickedChar = [];
  
  if (UpperCase) {
    newChar = newChar.concat(ALLupperCaseCharacters);
    pickedChar.push(
      ALLupperCaseCharacters[
        Math.floor(Math.random() * ALLupperCaseCharacters.length)
      ]
    );
  }

  if (LowerCase) {
    newChar = newChar.concat(ALLlowerCaseCharacters);
    pickedChar.push(
      ALLlowerCaseCharacters[
        Math.floor(Math.random() * ALLlowerCaseCharacters.length)
      ]
    );
  }

  if (Numbers) {
    newChar = newChar.concat(ALLnumericCharacters);
    pickedChar.push(
      ALLnumericCharacters[Math.floor(Math.random() * ALLnumericCharacters.length)]
    );
  }

  if (SpecialCharacters) {
    newChar = newChar.concat(ALLspecialCharacters);
    pickedChar.push(
      ALLspecialCharacters[Math.floor(Math.random() * ALLspecialCharacters.length)]
    );
  }
 
  var randomChar = [];
  for (var i = 0; i < numberCharacters; i++) {
    var index = Math.floor(Math.random() * newChar.length);
    randomChar.push(newChar[index]);
  }
  var replacedPosition = {};
  
  while (pickedChar.length > 0) {
    var replaceChar = Math.floor(Math.random() * randomChar.length);
    if (!replacedPosition[replaceChar]) {
      randomChar[replaceChar] = pickedChar.pop();
      replacedPosition[replaceChar] = true;
    }
  }
  return randomChar.join("");
}
var ALLspecialCharacters = ["@","%","+","\\","/","'","!","#","$","^","?",":",",",")","(","}","{","]","[","~","-","_","."];
var ALLnumericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var ALLlowerCaseCharacters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var ALLupperCaseCharacters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q", "R", "S","T","U","V","W","X","Y","Z"];

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}



button.addEventListener("click", writePassword);


