"use strict";
//Create an enum named Department with: IT, HR, Finance, Sales, Admin.
var Department1;
(function (Department1) {
    Department1["IT"] = "IT";
    Department1["HR"] = "HR";
    Department1["Finance"] = "Finance";
    Department1["Sales"] = "Sales";
    Department1["Admin"] = "Admin";
})(Department1 || (Department1 = {}));
//Create an enum named Priority with: Low, Medium, High, Critical.
var Priority;
(function (Priority) {
    Priority["Low"] = "Low";
    Priority["Medium"] = "Medium";
    Priority["High"] = "High";
    Priority["Critical"] = "Critical";
})(Priority || (Priority = {}));
//Create an enum named Status with: Open, InProgress, Resolved, Closed.
var Status1;
(function (Status1) {
    Status1["Open"] = "Open";
    Status1["InProgress"] = "InProgress";
    Status1["Resolved"] = "Resolved";
    Status1["Closed"] = "Closed";
})(Status1 || (Status1 = {}));
let ServiceRequest1 = {
    Request_ID: 111,
    Title: "Laptop is not working",
    Description: "Laptop is not turning on",
    Employee_Name: "Gayatri",
    Department1: Department1.IT,
    Priority: Priority.Low,
    Status1: Status1.Open,
    Assigned_To: "IT support team",
    Hour: 2
};
let ServiceRequest2 = {
    Request_ID: 112,
    Title: "Internet Connection Issue",
    Description: "Internet connection is slow and disconnecting frequently",
    Employee_Name: "Vishakha",
    Department1: Department1.Finance,
    Priority: Priority.Critical,
    Status1: Status1.InProgress,
    Assigned_To: "Network Team",
    Hour: 3
};
let ServiceRequest3 = {
    Request_ID: 113,
    Title: "Software Installation",
    Description: "Need to install yhe required software on the office computer",
    Employee_Name: "Lina",
    Department1: Department1.Admin,
    Priority: Priority.High,
    Status1: Status1.Closed,
    Assigned_To: "IT support Team",
    Hour: 2
};
let ServiceRequest4 = {
    Request_ID: 114,
    Title: "Email Login Problem",
    Description: "Unable to log in to the offical email account",
    Employee_Name: "Pratiksha",
    Department1: Department1.HR,
    Priority: Priority.Medium,
    Status1: Status1.Closed,
    Assigned_To: "Support Engineer",
    Hour: 1
};
let ServiceRequest5 = {
    Request_ID: 115,
    Title: "Printer Not Working",
    Description: "Office printer is not printing documents properly",
    Employee_Name: "Diksha",
    Department1: Department1.Sales,
    Priority: Priority.Low,
    Status1: Status1.InProgress,
    Assigned_To: "Hardware Team",
    Hour: 2
};
let ServiceRequest6 = {
    Request_ID: 116,
    Title: "Password Reset Request",
    Description: "Need to reset the password for the company account",
    Employee_Name: "Mohit",
    Department1: Department1.Admin,
    Priority: Priority.Medium,
    Status1: Status1.Closed,
    Assigned_To: "IT support Team",
    Hour: 1
};
let ServiceRequest7 = {
    Request_ID: 117,
    Title: "System Update Request",
    Description: "Computer requires the latest system and security updates",
    Employee_Name: "Nachiket",
    Department1: Department1.Finance,
    Priority: Priority.High,
    Status1: Status1.Resolved,
    Assigned_To: "System Administrator",
    Hour: 2
};
let ServiceRequest8 = {
    Request_ID: 118,
    Title: "Employee Access Request",
    Description: "Need access to the required company system and application",
    Employee_Name: "Gaurav",
    Department1: Department1.Admin,
    Priority: Priority.Low,
    Status1: Status1.Open,
    Assigned_To: "System Administrator",
    Hour: 2
};
console.log("Service Request is:", ServiceRequest1);
console.log("Service Request is:", ServiceRequest2);
console.log("Service Request is:", ServiceRequest3);
console.log("Service Request is:", ServiceRequest4);
console.log("Service Request is:", ServiceRequest5);
console.log("Service Request is:", ServiceRequest6);
console.log("Service Request is:", ServiceRequest7);
console.log("Service Request is:", ServiceRequest8);
/**************************************************************************************
//Task 3: Request Management Class
//Create a class: RequestManager
//Implement methods to: Add a request, Remove a request, Search request by ID, Search request by employee, Update
//request status, Assign request to an employee, Display all requests.
// Maintain all requests inside an array
****************************************************************************************/
/***********************************************************************************
//Task 5: Static Property
• Inside RequestManager, create a static property: totalRequests.
• It should automatically maintain the number of service requests.
• Increment when a request is added.
• Decrement when a request is removed.
• Display the total request count without creating another RequestManager
***************************************************************************************/
class RequestManager {
    constructor() {
        this.RequestMangers = [];
    }
    //Create a class: RequestManager
    //Implement methods to: Add a request
    addRequest(req) {
        this.RequestMangers.push(req); //class madhil service cha array //.push(req) - aaleli new request array madhe add hoel
        RequestManager.totalReaquest++;
    }
    //Remove a request
    removeRequest(Request_ID) {
        const oldLength = this.RequestMangers.length;
        this.RequestMangers = this.RequestMangers.filter(function (req) {
            return req.Request_ID !== Request_ID;
        });
        if (this.RequestMangers.length < oldLength) {
            RequestManager.totalReaquest--;
        }
    }
    //Search request by ID
    searchIDRequest(Request_ID) {
        return this.RequestMangers.find(function (req) {
            return req.Request_ID === Request_ID;
        });
    }
    //Search request by employee
    searchnameRequest(Employee_Name) {
        return this.RequestMangers.find(function (req) {
            return req.Employee_Name === Employee_Name;
        });
    }
}
RequestManager.totalReaquest = 0;
let Manger = new RequestManager();
Manger.addRequest(ServiceRequest1);
Manger.addRequest(ServiceRequest2);
Manger.addRequest(ServiceRequest3);
Manger.addRequest(ServiceRequest4);
Manger.addRequest(ServiceRequest5);
Manger.addRequest(ServiceRequest6);
Manger.addRequest(ServiceRequest7);
Manger.addRequest(ServiceRequest8);
console.log(Manger.RequestMangers);
console.log("total Request Count ", RequestManager.totalReaquest);
Manger.removeRequest(113);
console.log(Manger.RequestMangers);
console.log("total Request Count ", RequestManager.totalReaquest);
let result2 = Manger.searchIDRequest(112);
console.log(result2);
Manger.searchIDRequest(112);
let result3 = Manger.searchnameRequest("Gayatri");
console.log(result3);
Manger.searchnameRequest("Gayatri");
//update request status
function updateStatus() {
    let request = Manger.searchIDRequest(111);
    if (request) {
        request.Status1 = Status1.InProgress;
        console.log("update Status", request);
    }
}
updateStatus();
//Assign request to an employee
function requestAssign(Assigned_To) {
    let request = Manger.searchIDRequest(111);
    if (request) {
        request.Assigned_To = Assigned_To;
        console.log("assign Request is : ", Assigned_To);
    }
}
requestAssign("IT support team");
/**************************************************************************************************************
//Task 4: Encapsulation with Getter & Setter
• Create a class: RequestPriority
• Create a private property: priority
• Implement Getter and Setter.
• The setter should prevent invalid priority values.
• For example: Priority cannot be empty. / Invalid priority.
• Display the updated priority using the getter
***************************************************************************************************************/
class RequestPriority1 {
    constructor() {
        this.private_Priority = "Low"; //charatericts
    }
    get Priority() {
        return this.private_Priority;
    }
    set Priority(value) {
        if (value === "Low" || value === "High" || value === "Medium" || value === "Critical") {
            this.private_Priority = value;
        }
        else {
            console.log("Priority Is Invalid");
        }
    }
}
let request = new RequestPriority1();
// request.Priority = "High";
request.Priority = "urgent";
console.log("Updated Priority is:", request.Priority);
/************************************************************************************
//Task 6: Inheritance
• Create a parent class: ServiceRequestHandler
• Create child classes: ITSupport, HRSupport, FinanceSupport.
• Each child class should contain suitable request-handling information.
• ITSupport → Technical issues
• HRSupport → Employee-related issues
• FinanceSupport → Salary/expense issues.
***************************************************************************************/
/*******************************************************************************
//Task 7: Polymorphism
• Create a common method: calculateResolutionTime()
• Override this method in: ITSupport, HRSupport, FinanceSupport.
• Each class should calculate the estimated resolution time differently.
• ITSupport → Based on priority
• HRSupport → Based on request type
• FinanceSupport → Based on estimated hours
• Display the calculated resolution time for each request
*********************************************************************************/
class Service_Request_Handler {
    constructor(request_handling_information) {
        this.request_handling_information = request_handling_information;
    }
    calculateResolutionTime() {
        return 0;
    }
}
class ITSupport extends Service_Request_Handler {
    constructor(request_handling_information, Priority) {
        super(request_handling_information);
        this.Priority = Priority;
    }
    calculateResolutionTime() {
        if (this.Priority === "Low") {
            return 1;
        }
        else if (this.Priority === "Medium") {
            return 2;
        }
        else if (this.Priority === "High") {
            return 5;
        }
        else if (this.Priority === "Critical") {
            return 8;
        }
        return 0;
    }
}
class HRSupport extends Service_Request_Handler {
    constructor(request_handling_information, requestType) {
        super(request_handling_information);
        this.requestType = requestType;
    }
    calculateResolutionTime() {
        if (this.requestType === "Leave") {
            return 2;
        }
        if (this.requestType === "Complaint") {
            return 3;
        }
        if (this.requestType === "PayRoll") {
            return 5;
        }
        if (this.requestType === "EmployeeUpdate") {
            return 7;
        }
        return 0;
    }
}
class FinanceSupport extends Service_Request_Handler {
    constructor(request_handling_information, EstimatedHour) {
        super(request_handling_information);
        this.EstimatedHour = EstimatedHour;
    }
    calculateResolutionTime() {
        return this.EstimatedHour;
    }
}
let it = new ITSupport("Technical Issue", "High");
console.log("IT Support:", it.request_handling_information);
console.log("Resolution Time:", it.calculateResolutionTime(), "hours");
let hr = new HRSupport("Employee-related issues", "PayRoll");
console.log("HR Support:", hr.request_handling_information);
console.log("Resolution Time:", hr.calculateResolutionTime(), "hours");
// let finance =  new FinanceSupport("Salary/expense issue");
// finance.Salary(); 
let finance = new FinanceSupport("Salary/expense issues", 7);
console.log("finance Support:", finance.request_handling_information);
console.log("Resolution Time:", finance.calculateResolutionTime(), "hours");
/*****************************************************************************************************
Task 8: Type Guards
• Use instanceof to identify whether a handler is: ITSupport, HRSupport, FinanceSupport.
• Also create a function accepting: string | number.
• Use typeof to handle both values.
• Request ID → number
• Employee Name → string
******************************************************************************************************/
//Use instanceof to identify whether a handler is: ITSupport, HRSupport, FinanceSupport.
function empIT(ServiceRequest) {
    if (ServiceRequest instanceof ITSupport) {
        return ServiceRequest;
    }
}
function empHR(ServiceRequest) {
    if (ServiceRequest instanceof HRSupport) {
        return ServiceRequest;
    }
}
function empFinance(ServiceRequest) {
    if (ServiceRequest instanceof FinanceSupport) {
        return ServiceRequest;
    }
}
console.log(empIT(it));
console.log(empHR(hr));
console.log(empFinance(finance));
//  Also create a function accepting: string | number.
// • Use typeof to handle both values.
// • Request ID → number
// • Employee Name → string
function RequestAccept(value) {
    if (typeof value === "string") {
        console.log(value.toUpperCase());
    }
    else {
        console.log(value.toFixed());
    }
}
RequestAccept(111);
RequestAccept("Lina");
/**************************************************************************************************************************
// Task 9: Advanced Request Search
• Implement a search feature that allows the user to search by: Request ID, Employee Name, Department, Priority, Status.
• Display: No matching service request found. when no request matches the search criteria.
****************************************************************************************************************************/
function searchRequest(searchtext) {
    const result = Manger.RequestMangers.filter((ServiceRequest) => ServiceRequest.Request_ID.toString() === (searchtext) ||
        ServiceRequest.Employee_Name.toLowerCase() === (searchtext.toLowerCase()) ||
        ServiceRequest.Department1.toLowerCase() === (searchtext.toLowerCase()) ||
        ServiceRequest.Priority.toLowerCase() === (searchtext.toLowerCase()) ||
        ServiceRequest.Status1.toLowerCase() === (searchtext.toLowerCase()));
    console.log("search Request:", searchtext);
    if (result.length === 0) {
        console.log("No matching service request found");
        return;
    }
    result.forEach((req) => {
        console.log("search Request Id:", req.Request_ID);
        console.log("Employee Name is:", req.Employee_Name);
        console.log("Department is:", req.Department1);
        console.log("Priority is:", req.Priority);
        console.log("Status is:", req.Status1);
    });
}
searchRequest("111");
searchRequest("HR");
searchRequest("Mohit");
searchRequest("Critical");
searchRequest("InProgress");
searchRequest("Mayur");
let ServiceRequest11 = [];
let serviceID = document.querySelector("#RequestID");
let title = document.querySelector("#Title");
let EMPName = document.querySelector("#EmployeeName");
let Department11 = document.querySelector("#Department");
let priority = document.querySelector("#Priority");
let status1 = document.querySelector("#Status");
let assignedTo = document.querySelector("#AssignedTo");
let estimatedHour = document.querySelector("#EstimatedHours");
let AddRequestBtn = document.querySelector("#AddRequest");
let searchRequest1 = document.querySelector("#SearchRequest");
let SearchButton = document.querySelector("#SearchButton");
const departmentReport = document.querySelector("#departmentReport");
const priorityReport = document.querySelector("#priorityReport");
/******************************************************************
// Dashboard Elements
******************************************************************/
let totalRequest = document.querySelector("#totalreaquest");
let openRequest = document.querySelector("#openrequest");
let inProgress = document.querySelector("#inprogress");
let resolvedRequest = document.querySelector("#resolved");
let criticalRequest = document.querySelector("#criticalrequest");
/******************************************************************
// Search Result
******************************************************************/
let searchResult12 = document.querySelector("#searchResult");
/******************************************************************
// Update Dashboard
******************************************************************/
function updateDashboard() {
    // Total Requests
    totalRequest.textContent = ServiceRequest11.length.toString();
    // Open Requests
    openRequest.textContent = ServiceRequest11.filter(request => request.Status1 === Status1.Open)
        .length.toString();
    // In Progress Requests
    inProgress.textContent = ServiceRequest11.filter(request => request.Status1 === Status1.InProgress)
        .length.toString();
    // Resolved Requests
    resolvedRequest.textContent = ServiceRequest11.filter(request => request.Status1 === Status1.Resolved)
        .length.toString();
    // Critical Requests
    criticalRequest.textContent = ServiceRequest11.filter(request => request.Priority === Priority.Critical)
        .length.toString();
}
// function update
/********************************************************************************************************************
//Task 11: Dynamic Request Table
• Display all requests in an HTML table.
• Columns: Request ID, Title, Employee, Department, Priority, Status, Assigned To, Estimated Hours, Action.
• Add suitable buttons for: Update, Delete, Assign, View Details.
• All operations should update the table dynamically without refreshing the page.
*********************************************************************************************************************/
//he function brpwser madhun html table madhe sarv request dakhavnyasathi ahe
function displayRequestInfo() {
    const requestBody = document.querySelector("#RequestBody");
    if (!requestBody) { //html madhe requestbody sapdl nahi tr function exicute honar nahi
        console.log("RequestBody not found");
        return;
    }
    requestBody.innerHTML = ""; //table claer karnya sathi
    ServiceRequest11.forEach((request) => {
        //tya request chi actual value html madhe taka
        requestBody.innerHTML += `
            <tr>
                <td>${request.Request_ID}</td>  
                <td>${request.Title}</td>
                <td>${request.Employee_Name}</td>
                <td>${request.Department1}</td>
                <td>${request.Priority}</td>
                <td>${request.Status1}</td>
                <td>${request.Assigned_To}</td>
                <td>${request.Hour}</td>
                <td>
<button onclick="updateRequest(${request.Request_ID})"> Update</button> 
<button onclick="deleteRequest(${request.Request_ID})">Delete</button>
<button onclick="AssignedRequest(${request.Request_ID})">Assign</button>
<button onclick="viewDetails(${request.Request_ID})">View Details</button>                     
    </td>
    </tr>
    `;
    });
}
//add button vr click zal ki ha code exicute hoto
AddRequestBtn.addEventListener("click", () => {
    const request = {
        Request_ID: Number(serviceID.value),
        Title: title.value,
        Description: "",
        Employee_Name: EMPName.value,
        Department1: Department11.value,
        Priority: priority.value,
        Status1: status1.value,
        Assigned_To: assignedTo.value,
        Hour: Number(estimatedHour.value)
    };
    //save employee to json server
    fetch("http://localhost:3000/ServiceRequest11", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(request)
    })
        .then((response) => {
        if (!response.ok) {
            throw new Error("failed to save leave request");
        }
        return response.json();
    })
        .then((data) => {
        console.log("employee saved successfully:", data);
        ServiceRequest11.push(data);
        displayRequestInfo();
        updateDashboard();
    })
        .catch((error) => {
        console.log("Error:", error);
    });
});
//=====================================================
//update service request
//====================================================
//Id ghyacha ahe
const updatePopup = document.querySelector("#updatePopup");
const closeUpadtePopup = document.querySelector("#closeUpdatePopup");
const updateDepartment = document.querySelector("#updateDepartment");
const updatePriority = document.querySelector("#updatePriority");
const updateStatus1 = document.querySelector("#updateStatus");
const saveUpdate = document.querySelector("#saveUpdate");
function updateRequest(id) {
    let serviceRequest = ServiceRequest11.find(request => //ekch pahili request find karaychi mhanun
     request.Request_ID === id);
    if (!serviceRequest) {
        return;
    }
    updateDepartment.value = serviceRequest.Department1;
    updatePriority.value = serviceRequest.Priority;
    updateStatus1.value = serviceRequest.Status1;
    updatePopup.style.display = "block"; //popup open kartey
    saveUpdate.onclick = () => {
        serviceRequest.Department1 = updateDepartment.value; //exsting request chi values badalto
        serviceRequest.Priority = updatePriority.value;
        serviceRequest.Status1 = updateStatus1.value;
        // //popup sathi ahe
        // const newStatus = prompt(" Enter status:Open/InProgress/Resolved/Closed",serviceRequest.Status1);
        // if(!newStatus){
        //     return;
        // }
        // const newPriority = prompt(" Enter Priority:Low/Medium/High/Critical",serviceRequest.Priority);
        // if(!newPriority){
        //     return;
        // }
        // const newDepartment = prompt(" Enter Department:IT/HR/Finance/Sales",serviceRequest.Department1);
        // if(!newDepartment){
        //     return;
        // }
        //exsting request madhil values badalto
        // function savepopup (){
        //     let RequestAccept
        // }
        // serviceRequest.Status1 = newStatus as Status1;
        // serviceRequest.Priority = newPriority as Priority;
        // serviceRequest.Department1 = newDepartment as Department1;
        fetch(`http://localhost:3000/ServiceRequest11/${serviceRequest.id}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                Department1: serviceRequest.Department1, //server la sangte ki he tin feilds update kr
                Priority: serviceRequest.Priority,
                Status1: serviceRequest.Status1
            })
        })
            .then(Response => {
            if (!Response.ok) {
                throw new Error("Failed to update service request");
            }
            return Response.json();
        })
            .then(data => {
            console.log("Updated service request", data);
            displayRequestInfo();
            updateDashboard();
            // alert("Request Updated Successfully");
            updatePopup.style.display = "none"; //popup band karynasathi
        })
            .catch(error => {
            console.log("Update Error:", error);
        });
    };
}
//=========================================================
//delete request
//=============================================================
// =====================================================
// DELETE POPUP
// =====================================================
const deletePopup = document.querySelector("#deletePopup");
const confirmDeleteButton = document.querySelector("#confirmDelete");
const cancelDeleteButton = document.querySelector("#cancelDelete");
let selectedDeleteId;
function deleteRequest(id) {
    let serviceRequest = ServiceRequest11.find(request => request.Request_ID === id);
    if (!serviceRequest) {
        // alert("service request not found");
        // document.getElementById("delete-popup")
        console.log("Service request not found");
        return;
    }
    if (!serviceRequest.id) { //json server madhe database record cha actual id lagto
        // alert("service request id not found");
        console.log("Service request id not found");
        return;
    }
    // const confirmDelete = confirm(" Are you sure you want to delete this Request");
    // if(!confirmDelete){
    //     return;
    // }
    selectedDeleteId = id; //konti request delete karaychi te save kele ani confirmation popup dakhvne
    deletePopup.style.display = "block";
}
// Confirm Delete
confirmDeleteButton.addEventListener("click", () => {
    const serviceRequest = ServiceRequest11.find(request => //aapn aadhi save keleli id vaprun request punha shodhto
     request.Request_ID === selectedDeleteId);
    if (!serviceRequest) {
        return;
    }
    fetch(`http://localhost:3000/ServiceRequest11/${serviceRequest.id}`, {
        method: "DELETE"
    })
        .then(Response => {
        if (!Response.ok) {
            throw new Error("Failed to delete request");
        }
        return Response.json();
    })
        .then(data => {
        console.log("deleted service request:", data);
        ServiceRequest11 = ServiceRequest11.filter(request => //local array madhun sudha delete
         request.Request_ID !== selectedDeleteId);
        displayRequestInfo();
        updateDashboard();
        // popup close
        deletePopup.style.display = "none"; //popup band
        // loadRequest();
    })
        .catch(error => {
        console.log("Error deleting service request:", error);
    });
});
// Cancel Delete
cancelDeleteButton.addEventListener("click", () => {
    deletePopup.style.display = "none";
});
//===========================================================
//Assign Request
//===========================================================
const assignPopup = document.querySelector("#assignPopup");
const handlerInput = document.querySelector("#handlerInput");
const assignButton = document.querySelector("#assignButton");
const cancelAssign = document.querySelector("#cancelAssign");
let selectedAssignId;
function AssignedRequest(id) {
    const serviceRequest = ServiceRequest11.find(request => request.Request_ID === id);
    if (!serviceRequest) {
        return;
    }
    selectedAssignId = id;
    // input clear
    handlerInput.value = "";
    // popup open
    assignPopup.style.display = "block";
}
// Assign popup button
assignButton.addEventListener("click", () => {
    const handler = handlerInput.value.trim();
    if (!handler) {
        return;
    }
    assignhandler(selectedAssignId, handler);
    assignPopup.style.display = "none";
});
// Cancel Assign
cancelAssign.addEventListener("click", () => {
    assignPopup.style.display = "none";
});
//============================================================
//assign handler
//============================================================
function assignhandler(requestID, handler) {
    const serviceRequest = ServiceRequest11.find(request => //mla specific id chi ek request pahije ahe
     request.Request_ID === requestID);
    if (!serviceRequest) {
        // alert("request is not found");
        console.log("request is not found");
        return;
    }
    serviceRequest.Assigned_To = handler; // mhanje request ..... la assign zalli
    // Refresh table
    displayRequestInfo();
    alert("Handler Assigned Successfully");
    fetch(`http://localhost:3000/ServiceRequest11/${serviceRequest.id}`, {
        method: "PATCH",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify({
            Assigned_To: serviceRequest.Assigned_To
        })
    })
        .then(Response => {
        if (!Response.ok) {
            throw new Error("Failed to Assigned service request");
        }
        return Response.json();
    })
        .then(data => {
        console.log("Assigned service request", data);
        displayRequestInfo();
        updateDashboard();
    })
        .catch(error => {
        console.log("Assigned Error:", error);
    });
}
//=====================================================
//view
//=======================================================
const viewDetailsPopup = document.querySelector("#viewDetailsPopup");
const closeDetails = document.querySelector("#closeDetails");
// Details elements
const detailRequestID = document.querySelector("#detailRequestID");
const detailTitle = document.querySelector("#detailTitle");
const detailDescription = document.querySelector("#detailDescription");
const detailEmployeeName = document.querySelector("#detailEmployeeName");
const detailDepartment = document.querySelector("#detailDepartment");
const detailPriority = document.querySelector("#detailPriority");
const detailStatus = document.querySelector("#detailStatus");
const detailAssignedTo = document.querySelector("#detailAssignedTo");
const detailHours = document.querySelector("#detailHours");
function viewDetails(id) {
    const serviceRequest = ServiceRequest11.find(request => //specific id chi request shodhto
     request.Request_ID === id);
    if (!serviceRequest) {
        // alert("request is not found");
        return;
    }
    //sarv information popup maddhe dakhvaychii ahe
    //   alert(`
    // Request ID: ${serviceRequest.Request_ID}
    // Title: ${serviceRequest.Title}
    // Description: ${serviceRequest.Description}
    // Employee Name: ${serviceRequest.Employee_Name}
    // Department: ${serviceRequest.Department1}
    // Priority: ${serviceRequest.Priority}
    // Status: ${serviceRequest.Status1}
    // Assigned To: ${serviceRequest.Assigned_To}
    // Estimated Hours: ${serviceRequest.Hour}
    // `);
    // }
    //popup madhe values takto
    detailRequestID.innerText = serviceRequest.Request_ID.toString();
    detailTitle.innerText = serviceRequest.Title;
    detailDescription.innerText = serviceRequest.Description;
    detailEmployeeName.innerText = serviceRequest.Employee_Name;
    detailDepartment.innerText = serviceRequest.Department1;
    detailPriority.innerText = serviceRequest.Priority;
    detailStatus.innerText = serviceRequest.Status1;
    detailAssignedTo.innerText = serviceRequest.Assigned_To;
    detailHours.innerText = serviceRequest.Hour.toString();
    // popup open
    viewDetailsPopup.style.display = "block";
}
// Close Details
closeDetails.addEventListener("click", () => {
    viewDetailsPopup.style.display = "none";
});
//===============================================
//Search Request
//===============================================
function serachrequest1(searchtext) {
    const result = ServiceRequest11.filter((request) => //search madhe ekapeksha jast request match hou shaktat
     request.Request_ID.toString() === searchtext ||
        request.Employee_Name.toLowerCase() === searchtext.toLowerCase() ||
        request.Department1.toString().toLowerCase() === searchtext.toLowerCase() ||
        request.Priority.toString().toLowerCase() === searchtext.toLowerCase() ||
        request.Status1.toString().toLowerCase() === searchtext.toLowerCase());
    searchResult12.innerHTML = "";
    if (result.length === 0) { //result bhetla nahi tr
        searchResult12.innerHTML = "<p>Request is not found</p>";
        return;
    }
    result.forEach((req) => {
        //new result aadhich result la add kra
        searchResult12.innerHTML += `
            <div>
                <p>ID: ${req.Request_ID}</p>
                <p>NAME: ${req.Employee_Name}</p>
                <p>DEPARTMENT: ${req.Department1}</p>
                <p>PRIORITY: ${req.Priority}</p>
                <p>STATUS: ${req.Status1}</p>
               
            </div>
        `;
    });
}
SearchButton.addEventListener("click", () => {
    const searchText = searchRequest1.value.trim();
    serachrequest1(searchText);
});
function loadRequest() {
    fetch("http://localhost:3000/ServiceRequest11")
        .then(response => {
        console.log("response:", response);
        if (!response.ok) {
            throw new Error("failed to load Employee");
        }
        return response.json();
    })
        .then(data => {
        console.log("data from server:", data);
        ServiceRequest11 = data;
        console.log("ServiceRequest11:", ServiceRequest11);
        displayRequestInfo();
        updateDashboard();
        genrateReport();
    })
        .catch(error => {
        console.log("error loading json", error);
    });
}
loadRequest();
/**********************************************************************************************************************************
//Task 12: Service Request Report
// Generate a dynamic report containing: Total requests, Department-wise request count, Priority-wise request count, Open
//requests, Critical requests, Resolved requests, Average estimated resolution hours, Employee with the highest number of
//requests.
//Use TypeScript functions and array methods wherever appropriate
*********************************************************************************************************************************/
//id select
let ReportTotal = document.querySelector("#reportTotal");
let ReportOpen = document.querySelector("#reportOpen");
let ReportCritical = document.querySelector("#reportCritical");
let ReportResolved = document.querySelector("#reportResolved");
let ReportAverage = document.querySelector("#reportAverage");
let ReportHighestEmployee = document.querySelector("#reportHighestEmployee");
// Department-wise count
function DepartmentCount(Department) {
    let serviceRequest = ServiceRequest11.filter(request => request.Department1 === Department);
    return serviceRequest.length;
}
function displayReport() {
    departmentReport.innerHTML = "";
    departmentReport.innerHTML +=
        `<p>IT : ${DepartmentCount("IT")}</p>`;
    departmentReport.innerHTML +=
        `<p>HR:${DepartmentCount("HR")}</p>`;
    departmentReport.innerHTML +=
        `<p>Finance:${DepartmentCount("Finance")}</p>`;
    departmentReport.innerHTML +=
        `<p>Sales:${DepartmentCount("Sales")}</p>`;
    departmentReport.innerHTML +=
        `<p>Admin:${DepartmentCount("Admin")}</p>`;
}
// Priority-wise count
function PriorityCount(priority) {
    let serviceRequest = ServiceRequest11.filter(request => request.Priority === priority);
    return serviceRequest.length;
}
function displayPriorityReport() {
    priorityReport.innerHTML = "";
    priorityReport.innerHTML +=
        `<p>Low:${PriorityCount("Low")}</p>`;
    priorityReport.innerHTML +=
        `<p>Medium:${PriorityCount("Medium")}</p>`;
    priorityReport.innerHTML +=
        `<p>High:${PriorityCount("High")}</p>`;
    priorityReport.innerHTML +=
        `<p>Critical:${PriorityCount("Critical")}</p>`;
}
// Average Estimated Hours
function AverageEstimatedHour() {
    let totalHour = ServiceRequest11.reduce((total, request) => total + request.Hour, 0);
    if (ServiceRequest11.length === 0) {
        return 0;
    }
    return totalHour / ServiceRequest11.length;
}
AverageEstimatedHour();
ReportAverage.textContent = `Average Estimated Hour: ${AverageEstimatedHour().toFixed(2)}`;
//highest number of request
function HighestreportEmployee() {
    const employeeNames = [...new Set(ServiceRequest11.map(request => request.Employee_Name))];
    let employeeCount = employeeNames.map(employee => {
        const count = ServiceRequest11.filter(request => request.Employee_Name === employee).length;
        return {
            name: employee,
            count: count
        };
    });
    const highestEmployee = employeeCount.reduce((highest, current) => current.count > highest.count ? current : highest);
    ReportHighestEmployee.textContent = `Employee with Highest Requests: ${highestEmployee.name} - ${highestEmployee.count} requests`;
}
//report madhe total open critical resolved dakvnya sathi
function displayBasicReport() {
    ReportTotal.textContent = `Total request:${ServiceRequest11.length}`;
    ReportOpen.textContent = `open request:${ServiceRequest11.filter(request => request.Status1 === Status1.Open).length}`;
    ReportCritical.textContent = `Critical request:${ServiceRequest11.filter(request => request.Priority === Priority.Critical).length}`;
    ReportResolved.textContent = `Resolved request:${ServiceRequest11.filter(request => request.Status1 === Status1.Resolved).length}`;
}
//main function ahe jyat sarv report ekach veli browser vr dakhvnyasathi.
function genrateReport() {
    displayBasicReport();
    displayReport();
    displayPriorityReport();
    ReportAverage.textContent = `Average Estimated Hours: ${AverageEstimatedHour().toFixed(2)}`;
    HighestreportEmployee();
}
//# sourceMappingURL=service.js.map