

// let x : any = "Succes 200"
// x=123
// x=true

// /* When we use "any" datatype it is similar to JavaScript */

function logData(x: unknown) { // here string explicit inference it will accept only string value
                                //When we use any datatype it can take any dattype
   if (typeof x === "string") {
        console.log(x.toUpperCase());
   }
}


logData("Hello");

/* unknown is similar to any but while using the value of the variable we will conform the datatype before manipulating */