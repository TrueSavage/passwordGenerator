


//function to generate password
function generatePassword() {


  let lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

  let uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

  let specials = ['!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~']

  let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

  let newArray = [];

  let finalPassword = "";

  let passArray = [];

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
  for (let i = 0; i < length; i++) {
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
  }

  // grab first four characters of the new array
  let firstFour = newArray[0] + newArray[1] + newArray[2] + newArray[3];
  console.log("first 4 = " + firstFour)
  //for loop to get the remaining characters
  for (let i = 0; i < length - 4; i++) {
    passArray.push(newArray[Math.floor(Math.random() * newArray.length)])

  }
  //created a string with the first four and final reamianing char. 
  let finalArray = firstFour + passArray.join('');
  console.log(finalArray);
  //console.log(newArray)

  //shuffle the finalArray string to be more random
  finalPassword = finalArray.split('');
  //console.log(finalPassword);
  finalPassword.sort(function () {
    return 0.5 - Math.random()
  })

  finalPassword = finalPassword.join('')



  //this line will display to the DOM
  document.getElementById('password').innerHTML = finalPassword;
}




