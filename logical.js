 //eligible for marriage

// Marriage eligibility check (any gender ≥21 or female ≥18)
// விவாகத் தகுதி சோதனை (எந்த பாலினமும் ≥21 அல்லது பெண் ≥18)
let age = 16;
let gender = 'f';

if (age >= 21 || (age >= 18 && gender == 'f')) {
    console.log('eligible'); // Eligible for marriage
    // திருமணத்திற்கு தகுதி உள்ளவர்
} else {
    console.log('not eligible'); // Not eligible for marriage
    // திருமணத்திற்கு தகுதி இல்லை
}

// Nullish coalescing - returns right value if left is null/undefined
// பூஜ்ய ஒருங்கிணைப்பு - இடது பக்கம் null/undefined இருந்தால் வலது மதிப்பை தரும்
let Age;
let current_age = Age ?? 19; // Since Age is undefined, returns 19
// Age வரையறுக்கப்படாததால் 19 தரும்
console.log(current_age);