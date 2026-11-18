/****************************************************************
 //Employee Information
 //Description:Create employee information containg data like that.
 //create at least 5 employees.
 //Display the employee information using console.log().
 //In this task i can use the concept of arrayof object.
 //Input:number,string,string,string,string.
 //Output:number,string,string,string,string.
 **************************************************************/
let EmployeeInfo:{
    EmployeeID : number;
    EmployeeName : string;
    Department :string;
    Email:string;
    JoiningDate:string;
}[]=[];



//  let EmployeeInfo:{
//     EmployeeID : number;
//     EmployeeName : string;
//     Department :string;
//     Email:string;
//     JoiningDate:string;
// }[]=[
//     {
//     EmployeeID : 111,
//     EmployeeName : "Gayatri",
//     Department :"IT",
//     Email:"Gayatri@123",
//     JoiningDate:"1/12/2026"
//     },
//     {
//     EmployeeID : 112,
//     EmployeeName : "vishakha",
//     Department :"CS",
//     Email:"vishu@123",
//     JoiningDate:"5/3/2026"
//     },
//     {
//     EmployeeID : 113,
//     EmployeeName : "Lina",
//     Department :"Finance",
//     Email:"Lina@123",
//     JoiningDate:"26/8/2025"
//     },
//     {
//     EmployeeID : 114,
//     EmployeeName : "Mohit",
//     Department :"HR",
//     Email:"Mohit@123",
//     JoiningDate:"21/11/2026"
//     },
//     {
//     EmployeeID : 115,
//     EmployeeName : "Nachiket",
//     Department :"AI",
//     Email:"Nandu@123",
//     JoiningDate:"1/1/2026"
//     }
// ];
// console.log(EmployeeInfo);

/*********************************************************************************
 //Employee Interface
 //Discription:Create employee object using this interface.
 //In this task i can use create object using interface.
 //Input:number,string,string,string,string
 //Outpu:number,string,string,string,string
 ********************************************************************************/

 interface Employee{
    employeeID : number;
    employeeName : string;
    department :string;
    email:string;
    joiningDate:string;

 }
 let Emplyee1:Employee={
    employeeID : 101,
    employeeName : "Gavrav",
    department :"Manger",
    email:"Gavrav@123",
    joiningDate:"12/2/2026"

 }
 console.log(Emplyee1);

 /**************************************************************
  //TASK3:Leave Information
  //Description:Create at least 8 leave records.
  //In this task firstly use type keyword and also useunion.
  //create an leavRcord interface create 8 records
  //Input:number,number,leave,number,statuses.
  //Output:number,number,leave,number,statuses.
  ***************************************************************/
 type leave="Casual"|"Sick"|"Paid";

 type Statuses="Pending"|"Approved"|"Rejected";

interface leaveRecord{
    leaveId:number;
    employeeId:number;
    leaveType:leave;
    numberOfDays:number;
    status:Statuses;
}
let employee:leaveRecord[] = [
{
    leaveId:1,
    employeeId:201,
    leaveType:"Casual",
    numberOfDays:1,
    status:"Pending"

},
{

    leaveId:2,
    employeeId:202,
    leaveType:"Sick",
    numberOfDays:2,
    status:"Pending"

},
{

    leaveId:3,
    employeeId:203,
    leaveType:"Paid",
    numberOfDays:9,
    status:"Rejected"

},
{

    leaveId:4,
    employeeId:204,
    leaveType:"Casual",
    numberOfDays:10,
    status:"Pending"

},
 {

    leaveId:5,
    employeeId:205,
    leaveType:"Sick",
    numberOfDays:3,
    status:"Approved"

},
{

    leaveId:6,
    employeeId:206,
    leaveType:"Paid",
    numberOfDays:7,
    status:"Rejected"

},
 {

    leaveId:7,
    employeeId:207,
    leaveType:"Casual",
    numberOfDays:4,
    status:"Pending"

},
{

    leaveId:8,
    employeeId:208,
    leaveType:"Sick",
    numberOfDays:5,
    status:"Approved"

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

function allLeaveRequest():void{
     employee.forEach((leave)=>{
console.log(leave);

     }); 
}
allLeaveRequest();

//==========================================
//Display Approved Leaves.
//============================================
function approvedLeaves(status:Statuses):void{
   const leaveApp = employee.filter((leave)=>leave.status === status
        );
        console.log(leaveApp);
}
approvedLeaves("Approved");

//================================================
// Display pending  leaves.
//================================================
function pendingLeaves(status:Statuses):void{
    const leavePending = employee.filter((leave)=>leave.status === status
);
console.log(leavePending);
}
pendingLeaves("Pending");

//===============================
//Display Rejected leaves.
//===============================
function rejectedLeaves(status:Statuses):void{
    const leaveReject = employee.filter((leave)=>leave.status===status
);
console.log(leaveReject);

}

rejectedLeaves("Rejected");

//===============================================
//Find leave request for a particular employee.
//==============================================

function findLeaveRequest(employeeId:number):void{
    const leaveRequest = employee.filter((leave)=>leave.employeeId === employeeId
);
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
function calculateLeaveResult(status:Statuses):void{
    const leaveBalance = employee.filter((leave)=>leave.status === status
)
    let leaveBalance2 = leaveBalance.reduce(function(leaveBalanc2,item){
    return leaveBalanc2 + item.numberOfDays;
},0);

let RemaingLeave = leavesPerYear - leaveBalance2;


   console.log("Total Leave",leavesPerYear);
   console.log("Used Leave",leaveBalance2);
   console.log("Remaining Leaves",RemaingLeave);

}
calculateLeaveResult("Approved");

/*************************************************************************
//TASK6:Leave Approval
//Description:It is used to display the updated leave request.
//In this task i can create function and the function should updated a leave request from
//pending -> Approved
// OR pending -> Rejected
 **************************************************************************/
function updateLeaveStatus(status:Statuses):void{
    const udatetedLeave = employee.map((leave)=>{

 if(leave.status === "Pending"){

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

 function searchName(searchtext:string):void{
 
    const result = EmployeeInfo.filter((employee)=>
        employee.EmployeeID.toString()===(searchtext) ||
        employee.EmployeeName.toLowerCase()===(searchtext.toLowerCase()) ||
        employee.Department.toLowerCase() === searchtext.toLowerCase()

    );

    console.log("Search:",searchtext);

    console.log("Result");

    result.forEach((employee11)=>{
        console.log(employee11.EmployeeID);
        console.log( employee11.EmployeeName );
        console.log( employee11.Department);
    });
}
// searchName("IT");
// searchName("114");
// searchName("vishakha");
// searchName("Lina");
            
/*******************************************************************************
 //TASK8:BASIC DOM HANDLING
 //create a simple webpage containing:
 //Employee Id Input.
 //Employee Name Input
  //Department Input
 //Number Of Days Input
 //Submit Leave Button
 //Leave Request List
 using TypeScript:
 1.Read The Entered Information.
 2.Create a Leave Request.
 3.Store it in the array.
 4.Display the request on the webpage.
 5.Show its status as pending.
********************************************************************************/
// Read the enterted information
// Read the entered information

interface employee111 {
     id: string;
    empId: number;
    empname: string;
    department: string;
    LeaveType: string;
    NumberOfDays: number;
    Status: string;
}

let LeaveRequest1: employee111[] = [];

let EmployeeID = document.querySelector("#EmployeeId") as HTMLInputElement;
let EmployeeName = document.querySelector("#EmployeeName") as HTMLInputElement;
let Department = document.querySelector("#Department") as HTMLInputElement;
let leaverequest = document.querySelector("#leaverequest") as HTMLSelectElement;
let NumberOfDays = document.querySelector("#NumberOfDays") as HTMLInputElement;
let Submit = document.querySelector("#Submit") as HTMLButtonElement;
let LeaveRequest = document.querySelector("#LeaveRequest") as HTMLDivElement;

Submit.addEventListener("click", (event) => {
    event.preventDefault();
   
const empId = Number(EmployeeID.value); 
const empname = EmployeeName.value; 
const department = Department.value;
 const LeaveType = leaverequest.value; 
 const NumberOfDaysValue = Number(NumberOfDays.value);

 const newId = String(LeaveRequest1.length + 1);

  const leaveRequest:employee111 ={
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


function displayLeaveRequests(): void {

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

function loadEmployee():void{
    fetch("http://localhost:3000/EmployeeInfo")
    .then(response =>{
        console.log("response:",response);
        if(!response.ok){
            throw new Error("failed to load Employee");

        }
        return response.json();

    })
    .then(data =>{
        console.log("data from server:",data);
        EmployeeInfo = data;
        console.log("Employee:",EmployeeInfo);
       
    })
    .catch(error =>{
      console.log("error loading json",error);
    });
  
}
  loadEmployee();

//   Display Leave Requests from JSON Server

  function loadLeaveRequest(): void {

    fetch("http://localhost:3000/LeaveRequest1")
        .then(response => {
            if (!response.ok) {
                throw new Error("Failed to load leave requests");
            }

            return response.json();
        })
    .then((data: any[]) => {
    LeaveRequest1 = data.map((leave,index) => { 
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
        console.log( "Error loading leave requests:", error ); 
    });
 } 
loadLeaveRequest(); 