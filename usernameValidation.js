/*
Have the function CodelandUsernameValidation(str) take the str parameter being passed and determine if the string is a valid username according to the following rules:

1. The username is between 4 and 25 characters.
2. It must start with a letter.
3. It can only contain letters, numbers, and the underscore character.
4. It cannot end with an underscore character.

If the username is valid then your program should return the string true, otherwise return the string false.
Examples
Input: "aa_"
Output: false
Input: "u__hello_world123"
Output: true
*/

//reg = /^[0-9a-zA-Z_]+$/; Regex example

function CodelandUsernameValidation(str) { 
  const validChars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k",
  "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
  "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "_"];

  str = str.toLowerCase();

  if (str.length < 4 || str.length > 25) {
    return false;
  }

  if (!validChars.includes(str[0])) {
    return false;
  }

  if (str[str.length - 1] === "_") {
    return false;
  }

  for (let i = 0; i < str.length; i++) {
    const letter = str[i];
    if (!validChars.includes(letter)) {
      return false;
    }
  }
  
  return true; 
}
   
// keep this function call here 
console.log(CodelandUsernameValidation(readline()));