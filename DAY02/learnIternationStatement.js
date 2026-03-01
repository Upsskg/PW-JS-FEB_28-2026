// iteration statement --> till a condition is satisfied
// action should be repeated
// requirement: to print the 1st 10 natural numbers
//let i =1; once it reaches 10 th digit ;i++
// let limit =10
// // 1<=10 --> true
// //...
// //...
// // 11<=10 --> false
// for(let i=1;i<=limit;i++){
// console.log(i)
// }

// requirement : print all the even number alone 
// even number between 1 to 20
for(let num =1; num<=20;num++){
    if (num%2==0) {
        console.log("even numbers is "+num)
    }
}
// While loop - entry level check 
let x =1;
while(x<=5){
    console.log("execute");
    x++;
}

// do while - exit level check 
// do{
//     console.log("Atleast executes once")
// }while(false)

// analogy : health --> 5 round  in a park
            // not health --> 2 round 
let ishealty = false;
for(let round =1; round<=5; round++){
    if(!ishealty && round>2){
        break;
    }
   console.log(round)
}