// Array
// Arrow Functions

const greet = (name) => {
    console.log(name);
}

greet("Ron");

        // Rest Operator
        function restOperator(first, ...restOfArgs) {
            console.log(first);
            console.log(restOfArgs);
        }

restOperator('one', 'two', 'three', 'four', 'five');

// Spread Operator
function sum(x, y, z) {
    return x + y + z;
}

const numbers = [1, 2, 3];
console.log(sum(...numbers));

// Filter

let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const even = nums.filter((num) => num % 2 == 0);
console.log(even)

const odd = nums.filter((num) => num % 2 != 0);
console.log(odd);