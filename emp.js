"use strict";
/****************************************************************
 //Employee Information
 //Description:Create employee information containg data like that.
 //create at least 5 employees.
 //Display the employee information using console.log().
 //In this task i can use the concept of arrayof object.
 //Input:number,string,string,string,string.
 //Output:number,string,string,string,string.
 **************************************************************/
let EmployeeInfo = [];
let Emplyee1 = {
    employeeID: 101,
    employeeName: "Gavrav",
    department: "Manger",
    email: "Gavrav@123",
    joiningDate: "12/2/2026"
};
console.log(Emplyee1);
let employee = [
    {
        leaveId: 1,
        employeeId: 201,
        leaveType: "Casual",
        numberOfDays: 1,
        status: "Pending"
    },
    {
        leaveId: 2,
        employeeId: 202,
        leaveType: "Sick",
        numberOfDays: 2,
        status: "Pending"
    },
    {
        leaveId: 3,
        employeeId: 203,
        leaveType: "Paid",
        numberOfDays: 9,
        status: "Rejected"
    },
    {
        leaveId: 4,
        employeeId: 204,
        leaveType: "Casual",
        numberOfDays: 10,
        status: "Pending"
    },
    {
        leaveId: 5,
        employeeId: 205,
        leaveType: "Sick",
        numberOfDays: 3,
        status: "Approved"
    },
    {
        leaveId: 6,
        employeeId: 206,
        leaveType: "Paid",
        numberOfDays: 7,
        status: "Rejected"
    },
    {
        leaveId: 7,
        employeeId: 207,
        leaveType: "Casual",
        numberOfDays: 4,
        status: "Pending"
    },
    {
        leaveId: 8,
        employeeId: 208,
        leaveType: "Sick",
        numberOfDays: 5,
        status: "Approved"
    }
];
console.log(employee);
/*************************************************************************************************
 // TASK4:Leave Record
 //Description:Store the leave records in an array.
 //In first question i can use for each and display all request.
 //In second Question i can use function parameter and filter to display approved leaves
 //In third question i can use function parameter and filter to display pending leaves
 //In fourth question i can use function parameter and filter to display rejected leaves
 //In fifth question i can use function parameter and filter to find a  leave request for particular employee.
 *************************************************************************************************/
//============================================
// Write function to:
//Display all leave request.
//=============================================
function allLeaveRequest() {
    employee.forEach((leave) => {
        console.log(leave);
    });
}
allLeaveRequest();
//==========================================
//Display Approved Leaves.
//============================================
function approvedLeaves(status) {
    const leaveApp = employee.filter((leave) => leave.status === status);
    console.log(leaveApp);
}
approvedLeaves("Approved");
//================================================
// Display pending  leaves.
//================================================
function pendingLeaves(status) {
    const leavePending = employee.filter((leave) => leave.status === status);
    console.log(leavePending);
}
pendingLeaves("Pending");
//===============================
//Display Rejected leaves.
//===============================
function rejectedLeaves(status) {
    const leaveReject = employee.filter((leave) => leave.status === status);
    console.log(leaveReject);
}
rejectedLeaves("Rejected");
//===============================================
//Find leave request for a particular employee.
//==============================================
function findLeaveRequest(employeeId) {
    const leaveRequest = employee.filter((leave) => leave.employeeId === employeeId);
    console.log(leaveRequest);
}
findLeaveRequest(201);
/**************************************************************************
 //Task5:LEAVE BALANCE
 //Description:It is use to calculate a total leaves , used leaves,remaining leave
 //for this task i can use filter and reduce last only aprroved leave should be considerd as used leave.
 //alredy gives the assume every employee receives : 20 leave days per year.
 ***************************************************************************/
let leavesPerYear = 20;
function calculateLeaveResult(status) {
    const leaveBalance = employee.filter((leave) => leave.status === status);
    let leaveBalance2 = leaveBalance.reduce(function (leaveBalanc2, item) {
        return leaveBalanc2 + item.numberOfDays;
    }, 0);
    let RemaingLeave = leavesPerYear - leaveBalance2;
    console.log("Total Leave", leavesPerYear);
    console.log("Used Leave", leaveBalance2);
    console.log("Remaining Leaves", RemaingLeave);
}
calculateLeaveResult("Approved");
/*************************************************************************
//TASK6:Leave Approval
//Description:It is used to display the updated leave request.
//In this task i can create function and the function should updated a leave request from
//pending -> Approved
// OR pending -> Rejected
 **************************************************************************/
function updateLeaveStatus(status) {
    const udatetedLeave = employee.map((leave) => {
        if (leave.status === "Pending") {
            leave.status = status;
        }
        return leave;
    });
    console.log(udatetedLeave);
}
updateLeaveStatus("Approved");
// updateLeaveStatus("Rejected");
/************************************************************************************
 //Task7:Employee Search
 //Description:In this tsak i can create a function to serach employee byy:
 //Employee ID
 //Employee Name
 //Department
 ************************************************************************************/
function searchName(searchtext) {
    const result = EmployeeInfo.filter((employee) => employee.EmployeeID.toString() === (searchtext) ||
        employee.EmployeeName.toLowerCase() === (searchtext.toLowerCase()) ||
        employee.Department.toLowerCase() === searchtext.toLowerCase());
    console.log("Search:", searchtext);
    console.log("Result");
    result.forEach((employee11) => {
        console.log(employee11.EmployeeID);
        console.log(employee11.EmployeeName);
        console.log(employee11.Department);
    });
}
let LeaveRequest1 = [];
let EmployeeID = document.querySelector("#EmployeeId");
let EmployeeName = document.querySelector("#EmployeeName");
let Department = document.querySelector("#Department");
let leaverequest = document.querySelector("#leaverequest");
let NumberOfDays = document.querySelector("#NumberOfDays");
let Submit = document.querySelector("#Submit");
let LeaveRequest = document.querySelector("#LeaveRequest");
Submit.addEventListener("click", (event) => {
    event.preventDefault();
    const empId = Number(EmployeeID.value);
    const empname = EmployeeName.value;
    const department = Department.value;
    const LeaveType = leaverequest.value;
    const NumberOfDaysValue = Number(NumberOfDays.value);
    const newId = String(LeaveRequest1.length + 1);
    const leaveRequest = {
        id: newId,
        empId: empId,
        empname: empname,
        department: department,
        LeaveType: LeaveType,
        NumberOfDays: NumberOfDaysValue,
        Status: "Pending"
    };
    LeaveRequest1.push(leaveRequest);
    displayLeaveRequests();
    fetch("http://localhost:3000/LeaveRequest1", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(leaveRequest)
    })
        .then((response) => {
        if (!response.ok) {
            throw new Error("failed to save leave request");
        }
        return response.json();
    })
        .then((data) => {
        console.log("Leave saved successfully:", data);
        console.log("Leave ID:", data.id);
        const lastIndex = LeaveRequest1.length - 1;
        LeaveRequest1[lastIndex] = data;
        displayLeaveRequests();
    })
        .catch((error) => {
        console.log("Error:", error);
    });
});
function displayLeaveRequests() {
    LeaveRequest.innerHTML = "";
    LeaveRequest1.forEach((leave) => {
        LeaveRequest.innerHTML += `
         <li> ID: ${leave.id}<br> 
         Employee ID: ${leave.empId}<br>
          Employee Name: ${leave.empname}<br> 
          Department: ${leave.department}<br> 
          Leave Type: ${leave.LeaveType}<br> 
          Number Of Days: ${leave.NumberOfDays}<br> 
          Status: ${leave.Status} </li> <br> 
          `;
    });
}
// Data Json File
function loadEmployee() {
    fetch("http://localhost:3000/EmployeeInfo")
        .then(response => {
        console.log("response:", response);
        if (!response.ok) {
            throw new Error("failed to load Employee");
        }
        return response.json();
    })
        .then(data => {
        console.log("data from server:", data);
        EmployeeInfo = data;
        console.log("Employee:", EmployeeInfo);
    })
        .catch(error => {
        console.log("error loading json", error);
    });
}
loadEmployee();
//   Display Leave Requests from JSON Server
function loadLeaveRequest() {
    fetch("http://localhost:3000/LeaveRequest1")
        .then(response => {
        if (!response.ok) {
            throw new Error("Failed to load leave requests");
        }
        return response.json();
    })
        .then((data) => {
        LeaveRequest1 = data.map((leave, index) => {
            return {
                id: String(index + 1),
                empId: Number(leave.empId),
                empname: leave.empname,
                department: leave.department,
                LeaveType: leave.LeaveType,
                NumberOfDays: Number(leave.NumberOfDays),
                Status: leave.Status
            };
        });
        /****************************************************
         *  DISPLAY LOADED DATA
         *  ****************************************************/
        displayLeaveRequests();
    })
        .catch((error) => {
        console.log("Error loading leave requests:", error);
    });
}
loadLeaveRequest();
//# sourceMappingURL=emp.js.map