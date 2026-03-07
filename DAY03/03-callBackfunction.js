

function add(a,b,onSub,onMul){ // a = 10, b=20, onSub = sub, onMul= mul() // main function
    console.log(`Addition:`,a+b);

    // let a=10;
    // let b=20

    onSub(a,b)
    onMul(a,b)
    
}

function sub(a,b){ // sub function 1
console.log("Subtraction",a-b);

}

function mul(a,b){ // sub fuction 2
console.log("Multiplication",a*b);

}

add(30,20,sub,mul) // passed the values

/* add() is main function inside which i passing the sub function sub() and mul() */