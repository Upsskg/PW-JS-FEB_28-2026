class Access{


    public clearandtype(){
        console.log("clear and type");
    }

    private clear(){
        console.log("clear");
    }

    protected locator(){
        console.log("locator");
    }


    public addMethod(){
      this.clear()
      this.locator()  
    }

}
let obje=new Access()
obje.clearandtype()
obje.addMethod()