let age = 17;

if (age >= 18) {
    console.log("You are old enough to vote");
} else if(age == 17) {
    console.log("You can vote in the next year");
}

// if else if-else statement
let temperature = 25;
if(temperature <0) {
    console.log("It is freezing outside");
}else   if(temperature >= 0 && temperature < 20) {
    console.log("It is cold outside");
}else{
    console.log("It is hot outside");
}


// Conditionals : switch statement
let day = 'lunes';

switch(day) {
    case 'lunes':
        console.log("Today is lunes");
        break;
    default: 
        console.log("This is an ordinary day");
        break;    
}