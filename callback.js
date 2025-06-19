// Check if a number is even or odd using a named function / ஒரு எண் இரட்டை அல்லது ஒற்றை என்பதை பெயரிடப்பட்ட செயல்பாட்டைப் பயன்படுத்தி சரிபார்க்கவும்
let n = 2;
let oddeven = function (n) {
    if (n % 2 == 0) {
        return 'even'; // Return 'even' if divisible by 2 / 2 ஆல் வகுபடுமானால் 'even' திருப்பவும்
    } else {
        return 'odd'; // Otherwise return 'odd' / இல்லையெனில் 'odd' திருப்பவும்
    }
};
console.log(oddeven(n)); // Output: even / வெளியீடு: even

// Using an arrow function (nameless function) / அம்பு செயல்பாட்டைப் பயன்படுத்தி (பெயரில்லாத செயல்பாடு)
let a = 2;
let oddoreven = (a) => (a % 2 == 0 ? "even" : "odd"); // Ternary operator for concise check / சுருக்கமான சோதனைக்கு டெர்னரி ஆபரேட்டர்
console.log(oddoreven(3)); // Output: odd / வெளியீடு: odd

// Higher-order function that takes an operation and applies it to two numbers / இரண்டு எண்களுக்கு ஒரு செயல்பாட்டைப் பயன்படுத்தும் உயர்-வரிசை செயல்பாடு
function operation(op, a, b) {
    return op(a, b); // Execute the given operation / கொடுக்கப்பட்ட செயல்பாட்டை இயக்கவும்
}

let add = (a, b) => a + b; // Arrow function for addition / கூட்டலுக்கான அம்பு செயல்பாடு
let sub = (a, b) => a - b; // Arrow function for subtraction / கழித்தலுக்கான அம்பு செயல்பாடு

console.log(operation(add, 2, 3)); // Output: 5 / வெளியீடு: 5

// Trivia: Arrow function to multiply a number by 5 / சுவாரஸ்யமானது: ஒரு எண்ணை 5 ஆல் பெருக்கும் அம்பு செயல்பாடு
let multiple = (c) => c * 5;
console.log(multiple(3)); // Output: 15 / வெளியீடு: 15