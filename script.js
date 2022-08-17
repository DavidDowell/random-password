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
    let start = parseInt(prompt("How many characters would you like your password to be? It must range from 8-128."));
    let choices = [];

    //if no valid number is chosen and entered at the start
    if (!start) {
        alert('You need to input a valid number.')
    
    } else if (start < 8 || start > 128) {
        start = parseInt(prompt('The range is from 8 to 128 characters.'))
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
        if (confirm('Would you like to include special characters?')) {
            choices.push(randomSpecialChar);
        }
    }

    if (choices.length == 0) {
        alert('You must choose a valid option');
        return;
    }

    var pass = [];

    for (let i = 0; i < start; i++) {
        let selected = choices[Math.floor(Math.random() * choices.length)];
        pass.push(selected());
    }

    var passW = pass.join('');
    return passW;
}

console.log(generatePassword());

//random lower case letters
function randomLowerCase() {
    let lower = 'abcdefghijklmnopqrstuvwxyz';
    return lower[Math.floor(Math.random() * lower.length)];
}
//random uppercase from character code
function randomUpperCase() {
    let upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    return upper[Math.floor(Math.random() * upper.length)];
}
//random number from character code
function randomNumber() {
    let number = '0123456789';
    return number [Math.floor(Math.random() * number.length)];
}
// random special char from character code
function randomSpecialChar() {
    let special = "!@#$%^&*()_-><[]}{";
    return special[Math.floor(Math.random() * special.length)];
}


// Add event listener to generate button
var generateBtn = document.getElementById('generateBtn')
generateBtn.addEventListener("click", writePassword)