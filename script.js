// Assignment Code
var generateBtn = document.querySelector("#password");

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
}

//function for creating the password
function generatePassword() {

    //window prompt asking for password length
    var passwordLength = prompt("How long would you like your password to be? It must range from 8 to 128 characters.")
    
    //determining if the length meets requirements. if not return to beginning of the function.
    if (passwordLength <= 7 || passwordLength >= 129) {
        alert("You must choose a valid number ranging from 8 to 129.");
        writePassword();
    };

    //variables defined for characters
    var number = confirm("Would you like your password to contain numbers?");

    var upper = confirm("Would you like your password to contain capital letters?");

    var lower = confirm("Would you like your password to contain lowercase letters?");

    var special = confirm("Would you like your password to contain special characters?");

    //create a variable to iterate if the value is confirmed and set to zero
    var count = 0;

    //empty variable strings to store values for the random char created
    var numberCreated = "";
    var upperCaseCreated = "";
    var lowerCaseCreated = "";
    var specialCharCreated = "";


    //create functions to generate random characters using Math.random and universally created arrays
    var randomNumber = numbers[Math.floor(Math.random() * numbers.length)];
    console.log(randomNumber);

   var randomUpper = upperCases[Math.floor(Math.random() * upperCases.length)];
    console.log(randomUpper);

    var randomLower = lowerCases[Math.floor(Math.random() * lowerCases.length)];
    console.log(randomLower);

    var randomChar = specialChar[Math.floor(Math.random() * specialChar.length)];
    console.log(randomChar);

    //if variables chosen are true add them to an empty string and iterate
    if (numbers === true) {
        numberCreated = randomNumber();
        count++;
    };

    if(upper === true) {
        upperCaseCreated = randomUpper;
        count++;
    }

    if(lower === true) {
        lowerCaseCreated = randomLower;
        count++;
    }

    if(specialChar === true) {
        specialCharCreated = randomChar;
        count ++;
    }

    
}



// Add event listener to generate button
// Create arrays for variables
const specialChar = ['!','@','#','$','%','^','&','*','(',')'];
const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
const lowerCases = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
const upperCases = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var generateBtn = document.getElementById('generateBtn')
generateBtn.addEventListener("click", writePassword)