console.log("Welcome to EmployeeWage Computation Program");

const readline = require("readline-sync")
const wagePerHour = 20
const fullTimeHour = 8
const partTimeHour  = 4
let employeeStatus = ""
const fullTimeWage =  fullTimeHour * wagePerHour 
const partTimeWage =  partTimeHour * wagePerHour
let totalWorkingHour = 0



let condition = true
while(condition){
    console.log("\nPlease select the operation from below : \n1. generate the employee attendence \n2. calculate the daily wage of the employee \n3. calculate montly wage of the employee \n4. Exit");
    const userInput = parseInt(readline.question("Enter the choice :  "))

    switch(userInput){

      case 1 :
        console.log(employeeAttendence());
        break
    

      case 2 :
         let employeeWage = employeeDailyWage();
         if(employeeWage == fullTimeWage){ 
           console.log(`\nthe daily wage for full time employee : ${fullTimeWage}`);
            }
           
           else if(employeeWage == partTimeWage){
                console.log(`\nthe daily wage for part time employee : ${partTimeWage}`);
            }

            else if(employeeWage == 0){
                console.log(`\nthe employee is absent ,so he can't get wage today`);
            }
            else{
                console.log("\nPlease generate employee attendence to calculate daily wage of employee");
            }
        break
    

      case 3 :
            console.log(employeeMontlyWage());
            break
    
      case 4 :
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
        return "\nthe employee is full-timely present"

    }

    else if(attendence == 2){
        employeeStatus = "partTime"
         return "\nthe employee is  part-timely present"
    }

     else{
        employeeStatus = "absent"
         return "\nthe employee is absent"
    }
  
}


function employeeDailyWage (){

    if(employeeStatus == "fullTime"){ 
        totalWorkingHour += fullTimeHour
    return fullTimeWage
    }
    else if(employeeStatus == "partTime"){
        totalWorkingHour += partTimeHour
        return partTimeWage
    }
    else if(employeeStatus == "absent"){
        totalWorkingHour += 0
        return 0
    }
    else if(employeeStatus.length == 0){
        return -1
    }
}

function employeeMontlyWage(){
     
    let condition = true
    let totalWorkingDays = 0
    let montlyWage = 0
    while(condition){
        if(totalWorkingDays <= 20 &&  totalWorkingHour <= 100 ){
        employeeAttendence()
        montlyWage += employeeDailyWage()
        totalWorkingDays += 1
        }
        else{
            totalWorkingHour = 0
            condition = false
            return `\nthe montly wage for the employee : ${montlyWage}`
        }
    }


    
}

