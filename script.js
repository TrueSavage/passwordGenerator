
//Write password to the #password input
//function writePassword() {
let lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

let uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

let specials = ['!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', ' ^ ', '_', '`', '{', '|', '}', '~']

let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]



// let uppercase = /[A-Z]/;
// let lowercase = /[a-z]/;
// let numbers = /[0-9]/;
// let specials = /[!@#$%^&*()]/;
let newArray = [];
let finalPassword;

//function to generate password
function generatePassword() {



  //1- add prompt to get the total number of characters 8-128
  let length = parseInt(prompt('Choose a number between 8 and 128 for password?'))

  // validate length of char. check to see if char is a number  + between 8 and 128 
  while (isNaN(length) || length < 8 || length > 128) {
    length = parseInt(prompt('Choose a number between 8 and 128 for password?'))


  }
  // prompt user for character type
  // prompt user to confirm  if they want uppercase?  y/n?
  let uppercaseChar = confirm('Do you want uppercase?')
  // prompt user to confirm  if they want lowercase?  y/n?
  let lowercaseChar = confirm('Do you want lowecase?')
  // prompt user to confirm  if they want numbers?  y/n?
  let numberChar = confirm('Do you want numbers?')
  // prompt user to confirm  if they want specials char?  y/n?
  let specialChar = confirm('Do you want special characters')

  // create a loop to loop through the arrays to generate a new array of characters
  for (i = 0; i < length; i++) {
    if (uppercaseChar === true) {
      newArray.push(uppercase[Math.floor(Math.random() * uppercase.length)])
      // console.log('it works')
    }

    if (lowercaseChar === true) {
      newArray.push(lowercase[Math.floor(Math.random() * lowercase.length)])

      // console.log('it works')
    }

    if (numberChar === true) {
      newArray.push(numbers[Math.floor(Math.random() * numbers.length)])

      // console.log('it works')
    }

    if (specialChar === true) {
      newArray.push(specials[Math.floor(Math.random() * specials.length)])

      // console.log('it works')
    }

    console.log(newArray)


  }









}

document.getElementById('password').innerHTML = finalPassword;