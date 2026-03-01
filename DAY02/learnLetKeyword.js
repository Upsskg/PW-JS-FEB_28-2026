//Redeclaration --> NOT ALLOWED
let empName="Bhuvanesh"
console.log(empName)
//let empName="Seeni"
//ReInitialization -->ALLOWED
empName="Krishnan"
console.log(empName)

// Hoisting --> memory is allocated even before the declaration
// declaring and initializing in the starting of the program - ALLOWED
let empid =7654
console.log(empid) 
// allocated even before the declaration - NOT ALLOWED
//let empid =7654  //  refferenc error


// Scope Restriction 
// let --> block scope 
{ //local variable
let  empDetails ="t.nager , chennai"// previousily var  empDetails ="t.nager , chennai"
}
console.log(empDetails)//  ReferenceError  // previousily resource leakage



