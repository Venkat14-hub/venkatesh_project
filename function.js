// Initialize variables a and b / மாறிகள் a மற்றும் b ஐ துவக்கவும்
let a = 12, b = 24;

// Function 'operation' takes two variables (var1, var2) and performs a calculation
// 'operation' செயல்பாடு இரண்டு மாறிகள் (var1, var2) ஐ எடுத்து கணக்கீடு செய்கிறது
function operation(var1, var2) {
    // Calculation: (var1 * var2 / var1 + var2)
    // கணக்கீடு: (var1 * var2 / var1 + var2)
    let c = (var1 * var2 / var1 + var2);
    return c; // Return the result / முடிவை திருப்பவும்
}
console.log(operation(45, 23)); // Output: 68 / வெளியீடு: 68

// Trivia Question / சுவாரஸ்யமான கேள்வி
let n = 2;

// Function 'oddoreven' checks if a number is odd or even
// 'oddoreven' செயல்பாடு ஒரு எண் ஒற்றை அல்லது இரட்டை என்பதை சரிபார்க்கிறது
function oddoreven(n) {
    if (n % 2 == 0) {
        return 'even'; // Even if divisible by 2 / 2 ஆல் வகுபடுமானால் 'even'
    } else {
        return 'odd'; // Otherwise odd / இல்லையெனில் 'odd'
    }
}

// Assigning the function to a variable / செயல்பாட்டை ஒரு மாறிக்கு ஒதுக்குதல்
let oddeven = oddoreven;
console.log(oddeven(n)); // Output: even / வெளியீடு: even