// num is odd or even
function checkEvenOrOdd (num) {
    if (num % 2 === 0) {
        return 'Even';
    } else {
        return 'Odd';
    }
}

// create num1 and num2 with different number values
let num1 = 10;
let num2 = 21;

// call checkEvenOrOdd unction with num1 and num2 as arguments
console.log(checkEvenOrOdd(num1));
console.log(checkEvenOrOdd(num2));