/* let person;
let age = 19;

if (age >= 18) {
   person = "adult";  // 1. "adult" should be in quotes as it's a string
}
else if (age >= 13) {  // 2. "elseif" should be "else if" (two words)
                        // 3. Need a condition after "else if"
   person = "teenager"; // 4. "teenager" should be in quotes
}
else {
   person = "child";   // 5. "child" should be in quotes
}
console.log(person);

 */

// conditional operators

// English: Declare a variable 'person' without initializing it
// Tamil: 'person' என்பதை துவக்காமல் ஒரு மாறியை உருவாக்குதல்
let person;

// English: Set age to 10
// Tamil: வயதை 10 என அமைத்தல்
let age = 10;

// English: Use ternary operator to assign 'adult' if age >= 18, else 'child'
// Tamil: மூன்றிணை செயலி (ternary operator) பயன்படுத்தி, வயது >= 18 எனில் 'adult', இல்லையெனில் 'child' என நிர்ணயித்தல்
person = (age >= 18)? "adult" : "child";

// English: Print the value of 'person' to the console
// Tamil: 'person' மாறியின் மதிப்பை கன்சோலில் அச்சிடுதல்
console.log(person); // Output: "child"



//travia question


if('0'){
   console.log("hi")
}