console.log("Welcome to EmployeeWage Computation Program");

const wagePerHour = 20
const fullTimeHour = 8
const partTimeHour  = 4
let employeeStatus = ""
const fullTimeWage =  fullTimeHour * wagePerHour 
const partTimeWage =  partTimeHour * wagePerHour



let employeeAttendence = () =>{
    let attendence = Math.floor(Math.random() * 3)
   
    if(attendence == 1){
        employeeStatus = "fullTime"
        console.log("\nthe employee is full-timely present\n");

    }

    else if(attendence == 2){
        employeeStatus = "partTime"
        console.log("\nthe employee is  part-timely present\n");
    }

     else{
        employeeStatus = "absent"
        console.log("\nthe employee is absent\n");
    }
  
}


let employeeDailyWage = () => {
if(employeeStatus == "fullTime"){ 
return `the daily wage for full time employee : ${fullTimeWage}\n`
}
else if(employeeStatus == "partTime"){

    return `the daily wage for part time employee : ${partTimeWage}\n`
}
else {
    return `the employee is absent ,so he can't get wage today\n`
}
}

employeeAttendence()
console.log(employeeDailyWage());