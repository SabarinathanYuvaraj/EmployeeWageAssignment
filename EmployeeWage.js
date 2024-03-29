console.log("Welcome to EmployeeWage Computation Program");

const readline = require("readline-sync")
const wagePerHour = 20
const fullTimeHour = 8
const partTimeHour  = 4
let employeeStatus = ""
const fullTimeWage =  fullTimeHour * wagePerHour 
const partTimeWage =  partTimeHour * wagePerHour

let condition = true
while(condition){
    console.log("\nPlease select the operation from below : \n1. generate the employee attendence \n2. calculate the daily wage of the employee \n3. Exit");
    const userInput = parseInt(readline.question("Enter the choice :  "))

    switch(userInput){

      case 1 :
        employeeAttendence()
        break
    

      case 2 :
        console.log(employeeDailyWage());
        break
    

      case 3 :
        condition = false
        console.log("\nThankyou for visiting our Employee Wage Portal\n");
        break;
    
      default :
        console.log("\nPlease enter the valid option");
    
}
}

    function employeeAttendence(){
    let attendence = Math.floor(Math.random() * 3)
   
    if(attendence == 1){
        employeeStatus = "fullTime"
        console.log("\nthe employee is full-timely present");

    }

    else if(attendence == 2){
        employeeStatus = "partTime"
        console.log("\nthe employee is  part-timely present");
    }

     else{
        employeeStatus = "absent"
        console.log("\nthe employee is absent");
    }
  
}


function employeeDailyWage (){
if(employeeStatus == "fullTime"){ 
return `\nthe daily wage for full time employee : ${fullTimeWage}`
}
else if(employeeStatus == "partTime"){

    return `\nthe daily wage for part time employee : ${partTimeWage}`
}
else if(employeeStatus == "absent"){
    return `\nthe employee is absent ,so he can't get wage today`
}
else{
    return "\nPlease generate employee attendence to calculate daily wage of employee"
}
}

