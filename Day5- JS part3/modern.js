//Include

const sentence = "The quick brown fox jumps over the lazy dog.";
const containsWord = sentence.includes('fox');
console.log(containsWord);  //

//length

const str = "Welcome to Modern JS Features!";
console.log(str.length);

//to lowercase and to uppercase
let string = "Welcome to Modern JS Features!";
string = string.toLowerCase();

//trim (good for password)
string = "   Welcome to Modern JS Features!   ";
console.log(string.trim());


// Math
// max  and min
const maxNumber = Math.max(1, 2, 3, 4, 5);
const minNumber = Math.min(1,2,3,4,5);
console.log(`Max Number: ${maxNumber} and Min Number: ${minNumber}`);

//nested math method
console.log(Math.floor(Math.random()*100));

//Date
const currentDate = new Date();
console.log(currentDate);

