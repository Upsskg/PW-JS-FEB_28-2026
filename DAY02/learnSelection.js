// amazon prime 
// the  user is subscriber or not a subscriber
// true --> primeuser , false --> not a prime user
// event : (true)--> video player starts to plays the movie 
// event : (false)--> redirected to the subscription page
// what business logic we gonna apply ? 
let isPrime = false
if (isPrime==true) { // event : (true)--> video player starts to plays the movie 
    console.log("video player starts to plays the movie ")
}else{// event : (false)--> redirected to the subscription page
    console.log("redirected to the subscription page")
}

// income tax slab
//income <8---> no tax
//income >8  and income<15---> 5 %
// income > 15 --> 20%

let income = 11;
if (income<=8) {
    console.log("no tax deducted")
}else if(income>8 && income<15 ){
   console.log("5% tax is deducted")
}
else{
    console.log("tax deduceted is 20%")
}

let browserName ="firefox"

// business logic : if i enter the browser name it should return the latest version available 

// switch  case : INPUT value  == case
switch (browserName) {
    case "chrome":
        console.log('145.0.7632.117')
        break;
    case "firefox":
        console.log("148.0")
        break;
    default:
        console.log("invalid browser")
        break;
}