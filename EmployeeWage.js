console.log("Welcome to EmployeeWage Computation Program");

const wagePerHour = 20
const fullTimeHour = 8
let employeeStatus = ""

let employeeAttendence = () =>{
    let attendence = Math.floor(Math.random() * 2)
    if(attendence == 0){
        employeeStatus = "absent"
        console.log("\nthe employee is absent\n");
    }
    else{
        employeeStatus = "present"
        console.log("\nthe employee is present\n");

    }
}


let employeeDailyWage = () => {
if(employeeStatus == "present"){
let dailyWage =  fullTimeHour * wagePerHour 
return `the daily wage for employee : ${dailyWage}\n`
}
else{
    return `the employee is absent ,so he can't get wage today\n`
}
}

employeeAttendence()
console.log(employeeDailyWage());