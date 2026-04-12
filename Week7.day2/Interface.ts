interface add{
    //100% abstract method
    add1():void
}
//for interface we cannot create object-
//let obj=new add()

//connect class and Interface -> implements

interface sub{
    sub1():void
}


class addition implements add,sub{
    sub1(): void {
        throw new Error("Method not implemented.")
    }
    add1(): void {
        console.log("Addition method implementation")
    }
}

interface a{
    a1():void
}

interface b{
    b1():void
}

//connecting interface to interface -> extends
//multiple inheritance is possible in interface but not in class
interface c {

}

class d implements c,a,b{
    a1(): void {
        throw new Error("Method not implemented.")
    }
    b1(): void {
        throw new Error("Method not implemented.")
    }


}