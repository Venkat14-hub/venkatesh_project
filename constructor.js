
let a={
    name:'venkat'
}

function User(a){
    // this={};
 this.name=a
 this.age = function(){
    return 21;
 }
}

let venkat = new User('venkat');
let bala = new User('kumar')

 console.log();
console.log( venkat, bala.age())


//travia question
// Constructor function 'Add' to create objects with num1, num2, and an add method
function Add() {
    // Assigns num1 = 2 for all instances
    this.num1 = 2;  
    // Assigns num2 = 4 for all instances
    this.num2 = 4;  
    // Method to add num1, num2, and an external value 'c'
    this.add = function(c) {  
        return this.num1 + this.num2 + c;
    };
}

// Creates a new instance of 'Add' (object with num1=2, num2=4, and add method)
let sum = new Add();  

// Calls the 'add' method with argument 23 and logs the result (2 + 4 + 23 = 29)
console.log(sum.add(23));  // Output: 29