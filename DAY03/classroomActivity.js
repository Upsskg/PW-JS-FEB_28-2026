

let companyName = "Testleaf"
let reverse=""

for (let index = companyName.length-1; index >=0 ; index--) {
   reverse= reverse+companyName[index]    
}

console.log(reverse);

if (companyName===reverse) {
    console.log("Its a palindrome");   
}
else{
    console.log(`Its not a palindrome`);
    
}