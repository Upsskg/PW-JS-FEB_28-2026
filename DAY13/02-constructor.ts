//Scenario 1 : Basic creation of class and calling the method

// class Employee {

// empName = "Hari" // Properties
// empNo = 123

//  payroll() { // actionables
//     console.log(`Emplyess payroll process of  ${this.empName}`);
// }

// }

// const emp = new Employee()
// emp.payroll()




//Scenario 2 : Methods with parameter (Local variable)


// class Employee1 {

// // empName1 = "Hari" // Properties
// // empId = 123 // Hard coding

// empDetails(empName1:string,empId : string){ //parameteriterized and captured by local variable
//     console.log(`Emp name is ${empName1}, id is ${empId} `);
// }

// }

// const emp1 = new Employee1()
// emp1.empDetails("Hari","Emp123")




//Scenario 3 :Special method called as "Constructor"


// class Employee3 {


//  payroll() { // actionables
//     console.log(`Emplyess payroll process`);
// }

// empDetails(){
//     console.log("Emplyee Deatils");
    
// }

// constructor(){ // The constrcutor is a special method that gets invoked at the time of object creation and gets invoked first
// console.log("This is a default constructor");
// }

// }

// const emp3 = new Employee3() // Object Creation
// emp3.empDetails()
// emp3.payroll()

/* Note a constructor will automatically be invoked at the time of object creation */


//Scenario 4 :Parameterized constrcutor

class Employee4 {

gEmpName : string // properties
gEmpId : string

constructor(empName1:string,empId : string){ //parameteriterized and captured by local variable
    console.log(`This is a parametrized constructor =>Emp name is ${empName1}, id is ${empId} `);
    this.gEmpName = empName1 // Hari
    this.gEmpId = empId // Emp456
}

printEmpDetails(){
    console.log(`Emp name is ${this.gEmpName}, id is ${this.gEmpId} `);
    
}

}

const emp4 = new Employee4("Hari","Emp456")
emp4.printEmpDetails()

