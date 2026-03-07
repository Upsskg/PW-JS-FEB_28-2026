//named function

function add(){ // add() no value
const a =10;
let b=20;
let c=a+b
//console.log(c)
return c // when we use retuenh keyword add() function is going to hold the result of c which is 30
}// when we use return c add() === c 

console.log(add()) // add()=30

//function expression / anonymous function

let funExp = function (){ // remove add function name and replace with an expression/variable to call it
let a =10;
let b=20;
let c=a+b
// console.log(c)
return c // when we use retuenh keyword add() function is going to hold the result of c which is 30
}

console.log(funExp()) 


//arrow function

//Example 1
let funArrow1  = (a,b) => { // remove add function name and replace with an expression/variable to call it
// let a =10;
// let b=20;
let c=a+b
// console.log(c)
return c // when we use retuenh keyword add() function is going to hold the result of c which is 30
}

console.log(funArrow1(10,20)) // passing the values of a and b through argument at the time calling the function

//Example 2

let funArrow2 = (x,y) =>  {
    z=x+y
    console.log(z);
    u=x-y
    console.log(u);
    
    
 } // remove add function name and replace with an expression/variable to call it

console.log(funArrow2(30,20)) 
