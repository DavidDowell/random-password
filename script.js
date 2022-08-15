// Assignment Code
var generateBtn = document.querySelector("#password");

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
}

function generatePassword() {

    var passwordLength = prompt("How long would you like your password to be? It must range from 8 to 128 characters.")

    if (passwordLength <= 7 || passwordLength >= 129) {
        alert("You must choose a valid number ranging from 8 to 128.");
        writePassword();
    };

    var numbers = confirm("Would you like your password to contain numbers?");

    var upCases = confirm("Would you like your password to contain capital letters?");

    var lowCases = confirm("Would you like your password to contain lowercase letters?");

    var specialChar = confirm("Would you like your password to contain special characters?");

    
}



// Add event listener to generate button
var specialChar = "!@#$%^&*()";
var generateBtn = document.getElementById('generateBtn')
generateBtn.addEventListener("click", writePassword)