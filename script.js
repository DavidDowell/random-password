// Assignment Code
var generateBtn = document.querySelector("#generateBtn");
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    console.log(password);
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
      //go back to the beggining prompt if a value lower than 8 or greater than 128 is chosen
    } else if (start < 8 || start > 128) {
        start = parseInt(alert('The range is from 8 to 128 characters.'))
        writePassword();
      //prompts the user to choose what characters are used in the password and stores them in an array if chosen.
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

    //create empty array for the for loop
    var pass = [];
    //as long as the user input integer is greater than 0 run this loop
    for (let i = 0; i < start; i++) {
        let selected = choices[Math.floor(Math.random() * choices.length)];
        pass.push(selected());
        //push adds one or more elements to the end of an arry and returns the new length.
    }


    //The empty join method creates a new string by concantenating the pass array created here.
    var passW = pass.join('');
    return passW;
}

//Math random is a number between 0-1 this number will be multiplied by the index of the strings and Math.floor will round that number down to choose what index will be returned.
//string of lower case letters
function randomLowerCase() {
    let lower = 'abcdefghijklmnopqrstuvwxyz';
    return lower[Math.floor(Math.random() * lower.length)];
}
//string of uppercase letters
function randomUpperCase() {
    let upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    return upper[Math.floor(Math.random() * upper.length)];
}
//string of numbers
function randomNumber() {
    let number = '0123456789';
    return number [Math.floor(Math.random() * number.length)];
}
// string of special characters
function randomSpecialChar() {
    let special = "!@#$%^&*()_-><[]}{";
    return special[Math.floor(Math.random() * special.length)];
}


