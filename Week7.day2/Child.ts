import { parent } from "./Parent";

class Child extends parent{


phone(){
    console.log("Iphone 16 pro max")
    super.phone() //super keyword is used to call the parent class method
}

}

let c=new Child()
c.phone()