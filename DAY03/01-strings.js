// /* String declaration "",'',`` */

// const { resourceLimits } = require("worker_threads");

// /* 1,String literal
// 2, Object literal */

// let companyName = "Testleaf" //Value
// let firmName = "Testleaf" // value

// console.log(companyName===firmName);// true

// let companyNameNew = new String("Testleaf") // New memory location is created 101
// let firmNameNew = new String("Testleaf")// 102

// console.log(companyNameNew===firmNameNew);
// /* === operator will check for
// 1. Value
// 2. Datatype
// 3. Ref of the memory location */


// //String Method:

// //1.Escape Sequence

// //\,\n,\t  

// let testEsc = 'It\'s a regression \n testing' // \n => newline
// console.log(testEsc);

// let testEscDbl = "Hello \t this is a \"double quote\""// \t => tab
// console.log(testEscDbl);


// //2. Concatenation => "+", concat()

// let testCase = " Create a new Lead "// string
// let testCaseId = 123

// let resultPlus = " - "+testCaseId+" - "+testCase+" passed in the execution" //123 - Create a new Lead passed in the execution
// console.log(resultPlus);

// let resultConcat = testCase.concat(testCaseId) //=> "Create a new Lead".concat(123)
// console.log(resultConcat);

// let resultConcatToString = testCaseId.toString().concat(testCase) //123 => "123".concat( Create a new Lead )
// console.log(resultConcatToString);


//Template Literal - `${}`


function funName(x,y){ //x => is function paramter which is a temporary local variable to hold the value 123 x= 123

    // console.log("There is "+x+"test cases")  //There is 123 test cases"
  console.log(`There is ${x} test cases ${y}`)  //There is 123 test cases"
}

funName(123,"Passed")// At the time of Function call we are passing a value (argument) 


//length property\



// console.log(`The length of the string is ${course.length}`);

// //charAt()

// console.log(`The charAt() 0f 2 of the string is ${course.charAt(2)}`) //"a"

// //indexOf()

// console.log(`The indexOf() of a of the string is ${course.indexOf('a')}`);//2


let course = "Playwright"
//substring()

let outputString1 = course.substring(3,11) //ywright
console.log(outputString1);

let outputString2 = course.substring(11,3) //ywright
console.log(outputString2);

let outputString3 = course.substring(11,-5) //ywright //when we have negative value as end index it is taken as "0"
console.log(outputString3);

let outputString4 = course.substring(-5,11) //ywright //when we have negative value as end index it is taken as "0"
console.log(outputString4);

/* Note :
1. start index is included and end index is not included
2. start and end index is swappable
3. substring does not allow negative index */

//slice()



// let filename = "Ravi.pdf";
// let ext = filename.slice(-4); 
// console.log(ext);  // pdf

let outputSlice1 = course.slice(2,5)
console.log(outputSlice1); // ayw

let outputSlice2 = course.slice(5,2)
console.log(outputSlice2); // "" // whitespace

let outputSlice3 = course.slice(2,-5) // a,y,w
console.log(outputSlice3); // "" // whitespace


/* Notes:

1. start index included and end index not included
2. start index and end index is not swappable
(Which means the start index is lower than end index if it is the other way it will not accept and give "" string*
3. negative index is allowed*/

