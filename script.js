// Assignment Code


// Write password to the #password input
// function writePassword() {
//   let lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

//   let upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

//   let specials = ['!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', ' ^ ', '_', '`', '{', '|', '}', '~']

//   let Numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]


let generateBtn = document.querySelector("#generate") {
}
let all = specials + lowercase + uppercase + numbers
function generatePassword() {
  let password = ''

  password += pick(password, specials, 1, 3)
  password += pick(password, lowercase, 1, 3)
  password += pick(password, uppercase, 1, 3)
  password += pick(password, all, 8)

  return shuffle(password)
}
function pick(exclusions, string, min, max) {
  let n, chars = ''
  if (max === undefined) {
    n = min;
  } else {
    n = min + Math.floor(Math.random() * (max - min + 1));
  }

  let i = 0;
  while (i < n) {
    const character = string.charAt(Math.floor(Math.random() * string.length));
    if (exclusions.indexOf(character) < 0 && chars.indexOf(character) < 0) {
      chars += character;
      i++;
    }
  }
  return chars;
}

let length = prompt('must have a minimum of 8 and max 128 characters')
let lowerCase = confirm('must have at least one lower case letter')
let uppercase = confirm('must have at least one uppercase letter')
let specials = confirm('must use at least one special character')
let numbers = confirm('must use at least one number')


function check_form() {
  let password = document.getElementById('password-input-0').value;
  let special = /[!@#$%^&*()]/;
  let letter = /[a-z]/;
  let letterUp = /[A-Z]/;
  let number = /[0-9]/;

  if (password.length < 8 || !special.test(password) || !letter.test(password) || !number.test(password)) {

    if (password.length < 8) {
      prompt("Please make sure password is longer than 8 characters.")
      return false
    }
    if (!special.test(password) {
      prompt("Please make sure password includes at least one special character")
      return false
    }

    if (!letter.test(password) || !letterUp.test(password)) {
      prompt("Please make sure Password Includes an UpperCase and LowerCase character")
      return false
    }
    if (!number.test(password)) {
      prompt("Please make sure Password Includes a Digit")
      return false
    }

    let password = generatePassword();
    let passwordText = document.querySelector("#password");
  }
      
}

      //create a for loop to loop through the arrays 

      //create conditional statement to print out characters



      //passwordText.value = password;


    //Add event listener to generate button
    //generateBtn.addEventListener("click", writePassword);


// create 4 arrays
// 1 = all upper case char, 2 = lower case 3 = spec characters 4 = numbers

// create prompts for criteria

