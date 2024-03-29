console.log("Welcome to EmployeeWage Computation Program");

function employeeAttendence(){
    let attendence = Math.floor(Math.random() * 2)
    if(attendence == 0){
        console.log("\nthe employee is absent\n");
    }
    else{
        console.log("\nthe employee is present\n");

    }
}

employeeAttendence()