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

    //asks for number of characters from the user
    let click = parseInt(prompt("How many characters would you like your password to be? It must range from 8-128."));
    let count = [];

    //if no valid number is chosen and entered at the start
    if(!click) {
        alert('You need to input a valid number.')

    } else if (click < 8 || click > 128){
        click = parseInt(prompt('The range is from 8 to 128 characters.'))
    } else {
        if (confirm('Would you like to include numbers?')) {
            choices.push(randomNumber);
        }
        if (confirm('Would you like to include lower case letters?')) {
            choices.push(randomLowerCase);
        }
        if (confirm('Would you like to include upper case letters?')) {
            choices.push(randomUpperCase);
        }
        if(confirm('Would you like to include special characters?')) {
            choices.push(randomSpecialChar);
        } 
    }
    
    if (choices.length == 0) {
        alert('You must choose a valid option');
        return;
    }



}



// Add event listener to generate button
var generateBtn = document.getElementById('generateBtn')
generateBtn.addEventListener("click", writePassword)