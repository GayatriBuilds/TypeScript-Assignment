"use strict";
var department;
(function (department) {
    department["IT"] = "IT";
    department["HR"] = "HR";
    department["Finance"] = "Finance";
    department["Sales"] = "Sales";
    department["Marketing"] = "Marketing";
})(department || (department = {}));
let employee1 = {
    employeeID: 111,
    empName: "Gayatri",
    Email: "Gayatri@123",
    Department: "IT",
    Salary: 80000,
    Experience: "2years"
};
let employee2 = {
    employeeID: 112,
    empName: "Vishakha",
    Email: "Vishakha@123",
    Department: "HR",
    Salary: 70000,
    Experience: "1years"
};
let employee3 = {
    employeeID: 113,
    empName: "Lina",
    Email: "Lina@123",
    Department: "Finance",
    Salary: 90000,
    Experience: "4years"
};
let employee4 = {
    employeeID: 114,
    empName: "Mohit",
    Email: "Mohit@123",
    Department: "Sales",
    Salary: 50000,
    Experience: "fresher"
};
let employee5 = {
    employeeID: 115,
    empName: "Nachiket",
    Email: "nandu@123",
    Department: "Marketing",
    Salary: 60000,
    Experience: "fresher"
};
console.log("Employee1 is:", employee1);
console.log("Employee2 is", employee2);
console.log("Employee3 is", employee3);
console.log("Employee4 is", employee4);
console.log("Employee5 is", employee5);
/***************************************************************************
 //TASK2:DEPARTMENT MANGEMENT
 //create a department enum with IT,HR,Finance,Sales and Marketing.
 //Display employees based on the selected department.
 ****************************************************************************/
// interface employee{
//    employeeID:number;
//     empName:string;
//     Email:string;
//     Department:string;
//     Salary:number;
//     Experience:string;
// }
// console.log(department.IT);
// console.log(department.HR);
// console.log(department.Finance);
// console.log(department.Sales);
// console.log(department.Marketing);
//Display employess based on the selected department
// interface employee1 {
//     employeeID:number;
//     empName:string;
//     Email:string;
//     Department1:department;
//     Salary:number;
//     Experience:string;
// }
// let employee6:employee1={
//     employeeID:116,
//     empName:"Janvi",
//     Email:"Janvi@123",
//     Department1:department.IT,
//     Salary:60000,
//     Experience:"fresher"
// };
// let employee7:employee1={
//     employeeID:117,
//     empName:"Diksha",
//     Email:"Diksha@123",
//     Department1:department.HR,
//     Salary:70000,
//     Experience:"2years"
// };
// let employee8:employee1={
//     employeeID:118,
//     empName:"Rahul",
//     Email:"Rahul@123",
//     Department1:department.Finance,
//     Salary:80000,
//     Experience:"fresher"
// };
// let employee9:employee1={
//     employeeID:119,
//     empName:"Trisha",
//     Email:"Trisha@123",
//     Department1:department.Sales,
//     Salary:90000,
//     Experience:"2years"
// };
// let employee10:employee1={
//     employeeID:220,
//     empName:"Grantha",
//     Email:"Grantha@123",
//     Department1:department.Marketing,
//     Salary:100000,
//     Experience:"5years"
// };
// console.log(employee6);
// console.log(employee7);
// console.log(employee8);
// console.log(employee9);
// console.log(employee10);
/**********************************************************************************************************
//Task: Display Employees Based on Selected Department
//Purpose:This function is used to display employees belonging to a selected department.
//Description:An array named employees1 contains all employee records. The displaydepartment()
function accepts a department as a parameter and uses the filter() method
to find all employees whose department matches the selected department.
 **********************************************************************************************************/
let employees1 = [
    employee1,
    employee2,
    employee3,
    employee4,
    employee5
];
//display employees on selected department
function displaydepartment(selectedDepartment) {
    let result = employees1.filter(function (emp) {
        return emp.Department === selectedDepartment;
    });
    console.log(result);
}
console.log("IT Employees:");
displaydepartment(department.IT);
console.log("HR Employees:");
displaydepartment(department.HR);
/******************************************************************************************
//SALARY MANGEMENT
//create function to calculate annual salary,bonous,total,highest salary and average salary
 ********************************************************************************************/
//Annual salary
/******************************************************************************************************************
//Function:AnnualSalary(emp: employee)
//Description:This function calculates an employee's annual salary by multiplying the monthly salary by 12.
//Formula:Annual Salary = Monthly Salary × 12
*********************************************************************************************************************/
function AnnualSalary(emp) {
    return emp.Salary * 12;
}
/**********************************************************************************************************************
//Function: Bonus(emp: employee)
//Description:This function calculates a 10% bonus based on the employee's annual salary.
//Formula:Bonus = Annual Salary × 10 / 100
 ***********************************************************************************************************************/
function Bonus(emp) {
    return AnnualSalary(emp) * 10 / 100;
}
/*********************************************************************************************************************
//Function: totalSalary(emp: employee)
//Description:This function calculates the total salary by adding the annual salary and the bonus.
//Formula:Total Salary = Annual Salary + Bonus
*************************************************************************************************************************/
function totalSalary(emp) {
    return AnnualSalary(emp) + Bonus(emp);
}
console.log("AnnualSalary is:", AnnualSalary(employee1));
console.log("Bonus is:", Bonus(employee1));
console.log("total salary is", totalSalary(employee1));
//  console.log("Emplyee Average Salary is:",AverageSalary);
//  console.log(highSalary);
/***********************************************************************************************************************
//4. Average Salary
Function: AverageSalary()
Description:This function calculates the average monthly salary of all employees.
Formula:Average Salary = Total Salary of All Employees / Number of Employees
 ************************************************************************************************************************/
function AverageSalary() {
    let total = 0;
    employees.forEach(function (emp) {
        total = total + emp.Salary;
    });
    let Average = total / employees.length;
    console.log("Average Salary is:", Average);
}
/*******************************************************************************************
//5. Highest Salary
Function: highSalary()
Description:This function finds the employee salary with the highest monthly salary.
 ********************************************************************************************/
function highSalary() {
    let highSalary = 0;
    employees.forEach(function (emp) {
        if (emp.Salary > highSalary) {
            highSalary = emp.Salary;
        }
    });
    console.log("Highest salary is:", highSalary);
}
let employees = [
    employee1,
    employee2,
    employee3,
    employee4,
    employee5
];
//==================================================================================================
//6. Display Annual Salary of All Employees
//The forEach() method is used to iterate through all employees and display each employee's name 
// along with their annual salary.
//=====================================================================================================
employees.forEach((emp) => {
    console.log(emp.empName, AnnualSalary(emp));
});
//Highest Salary
AverageSalary();
highSalary();
/*********************************************************************************************
 //Task 4: Employee Class
//Create an EmployeeManager class with methods to add, remove, search and display employees
 ***********************************************************************************************/
// class EmployeeManager{
// EmployeeID:number;
// Name:string;
// Email:string;
// Department:string
// Salary:number;
// Experience:string;
// constructor (EmployeeID:number,Name:string,Email:string,Department:string,Salary:number,Experience:string){
//     this.EmployeeID = EmployeeID;
//     this.Name = Name;
//     this.Email = Email;
//     this.Department = Department;
//     this.Salary = Salary;
//     this.Experience = Experience;
// }
// display():void{
//     console.log(this.EmployeeID,this.Name,this.Email,this.Department,this.Salary,this.Experience);
// }
// }
// let Employee1 = new EmployeeManager(200,"Kunal","Kunal@123","IT",30000,"fresher");
// Employee1.display();
/********************************************************************************************
 //Task 4: Employee Class
//Create an EmployeeManager class with methods to add, remove, search and display employees
 ********************************************************************************************/
class EmployeeManager1 {
    constructor() {
        this.employees = [];
    }
    //This method adds an employee object to the employees array.
    addEmployee(emp) {
        this.employees.push(emp);
    }
    //This method removes an employee based on their employee ID. 
    removeEmployee(employeeID) {
        this.employees = this.employees.filter(function (emp) {
            return emp.employeeID !== employeeID;
        });
    }
    //This method searches for an employee using their employee ID.
    searchEmployee(employeeID) {
        return this.employees.find(function (emp) {
            return emp.employeeID === employeeID;
        });
    }
}
let manager = new EmployeeManager1();
manager.addEmployee(employee1);
manager.addEmployee(employee2);
manager.addEmployee(employee3);
manager.addEmployee(employee4);
manager.addEmployee(employee5);
console.log(manager.employees);
manager.removeEmployee(113);
console.log(manager.employees);
let result = manager.searchEmployee(112);
console.log("Search Result:");
console.log(result);
manager.searchEmployee(112);
let result1 = manager.searchEmployee(999);
console.log("Search Result:");
console.log(result1);
manager.searchEmployee(999);
/***************************************************************************
// Getter Setter
//Description:The getter is used to retrieve the current salary value.
****************************************************************************/
class EmplyeeSalary {
    constructor() {
        this.Private_Salary = 90000;
    }
    get Salary() {
        return this.Private_Salary;
    }
    //Description:The setter is used to update the salary.
    set Salary(value) {
        if (value > 0) {
            this.Private_Salary = value;
        }
        else {
            console.log("salary must be greter than 0");
        }
    }
}
const emp = new EmplyeeSalary();
console.log(emp.Salary);
emp.Salary = 100000;
console.log(emp.Salary);
emp.Salary = 0;
emp.Salary = -5000;
/*******************************************************************************
//Task 6: Static Property
//Maintain the total employee count using a static property.
//Display the count without creating another manager object
********************************************************************************/
class Employee {
    constructor() {
        Employee.totalEmployees++;
    }
}
Employee.totalEmployees = 0;
let emp1 = new Employee();
let emp2 = new Employee();
let emp3 = new Employee();
console.log(Employee.totalEmployees);
/*********************************************************************************
//Task 7: Inheritance & Polymorphism
//Create Employee as a parent class and Manager and Developer as child classes.
//Override calculateSalary() and implement different salary calculations
*********************************************************************************/
//parent class
class Employees {
    constructor(Salary) {
        this.Salary = Salary;
    }
    CalculateSalary() {
        return this.Salary;
    }
}
//child class
class Manager extends Employees {
    CalculateSalary() {
        return this.Salary + (this.Salary * 20 / 100);
    }
}
//child class
class Developer extends Employees {
    CalculateSalary() {
        return this.Salary + (this.Salary * 10 / 100);
    }
}
let Manager1 = new Manager(50000);
let Developer1 = new Developer(50000);
console.log("Manger salary is:", (Manager1.CalculateSalary()));
console.log("Devloper salary is:", (Developer1.CalculateSalary()));
/************************************************************************************
//Task 8: Type Guards
//Use instanceof to identify Manager and Developer objects.
//Create a function accepting string | number and handle both types using typeof.
**************************************************************************************/
function Employees1(value) {
    if (typeof value === "string") {
        console.log(value.toUpperCase());
    }
    else {
        console.log(value.toFixed(2));
    }
}
Employees1("Manger1");
Employees1(50000.00);
function Employees2(employee) {
    if (employee instanceof Manager) {
        return employee;
    }
    if (employee instanceof Developer) {
        return employee;
    }
}
console.log(Employees2(Manager1));
console.log(Employees2(Developer1));
/********************************************************************
//Task 9: Employee Search
//Allow searching by employee ID, name or department.
//Display Employee Not Found when no matching record exists
************************************************************************/
function SearchName1(searchtext) {
    const result = employees.filter((employee) => employee.employeeID.toString() === (searchtext) ||
        employee.empName.toLowerCase() === (searchtext.toLowerCase()) ||
        employee.Department.toLowerCase() === searchtext.toLowerCase());
    console.log("search:", searchtext);
    if (result.length === 0) {
        console.log("Employee not found");
        return;
    }
    console.log(result);
    result.forEach((emp) => {
        console.log(emp.employeeID);
        console.log(emp.empName);
        console.log(emp.Department);
    });
}
SearchName1("111");
SearchName1("HR");
SearchName1("Mohit");
SearchName1("ABC");
let employee12 = [];
//Id select kelya html madhun
let EmployeeId = document.querySelector("#EmployeeId");
let EmpName = document.querySelector("#EmployeeName");
let department1 = document.querySelector("#Department");
let email = document.querySelector("#EmployeeEmail");
let salary = document.querySelector("#Salary");
let submit = document.querySelector("#Submit");
let experience = document.querySelector("#Experience");
const searchEmployee = document.querySelector("#SearchEmployee");
const searchButton = document.querySelector("#SearchButton");
const searchResult = document.querySelector("#searchResult");
const removeEmployeeId = document.querySelector("#RemoveEmployeeId");
const removeButton = document.querySelector("#RemoveButton");
const employeeCount = document.querySelector("#employeeCount");
let employeeType = document.querySelector("#EmployeeType");
//he function update sathi ahe
function updateEmployeeCount() {
    employeeCount.textContent = `Total Employees: ${employee12.length}`;
}
//Display Employees
function displayemployeeInfo() {
    const employeeList = document.querySelector("#employeeList");
    employeeList.innerHTML = "";
    employee12.forEach((employee) => {
        employeeList.innerHTML += `
        <div>
                <p>ID: ${employee.employeeID}</p>
                <p>Name: ${employee.empName}</p>
                <p>Email: ${employee.Email}</p>
                <p>Department: ${employee.Department}</p>
                <p>Salary: ${employee.Salary}</p>
                <p>Experience: ${employee.Experience}</p>
                <p>Annual Salary: ${AnnualSalary(employee)}</p>
                <p>Employee Type:${employee.EmployeeType}</p>
                <hr>
            </div>
        `;
    });
    updateEmployeeCount();
}
// submit vr eventListner lavla ahe
submit.addEventListener("click", (event) => {
    event.preventDefault();
    const empId = Number(EmployeeId.value);
    const empname = EmpName.value;
    const department = department1.value;
    const Email = email.value;
    const Salary = Number(salary.value);
    const Experience = experience.value;
    const EmployeeType = employeeType.value;
    const employeeInfo = {
        employeeID: empId,
        empName: empname,
        Email: Email,
        Department: department,
        Salary: Salary,
        Experience: Experience,
        EmployeeType: EmployeeType
    };
    //add emp to array
    employee12.push(employeeInfo);
    //display emp
    displayemployeeInfo();
    //save employee to json server
    fetch("http://localhost:3000/employees", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(employeeInfo)
    })
        .then((response) => {
        if (!response.ok) {
            throw new Error("failed to save leave request");
        }
        return response.json();
    })
        .then((data) => {
        console.log("employee saved successfully:", data);
    })
        .catch((error) => {
        console.log("Error:", error);
    });
});
// load employee form json server
function loadEmployee1() {
    fetch("http://localhost:3000/employees")
        .then(response => {
        console.log("response:", response);
        if (!response.ok) {
            throw new Error("failed to load Employee");
        }
        return response.json();
    })
        .then(data => {
        console.log("data from server:", data);
        employee12 = data;
        displayemployeeInfo();
    })
        .catch(error => {
        console.log("error loading json", error);
    });
}
//load emp when page start
loadEmployee1();
//add emp function
function addEmployee111(emp) {
    employee12.push(emp);
    displayemployeeInfo();
}
//serach employee
function SearchName2(searchtext) {
    const result = employee12.filter((employee) => employee.employeeID.toString() === (searchtext) ||
        employee.empName.toLowerCase() === (searchtext.toLocaleLowerCase()) ||
        employee.Department.toLowerCase() === searchtext.toLowerCase());
    searchResult.innerHTML = "";
    if (result.length === 0) {
        searchResult.innerHTML = "<p>Employee Not Found</p>";
        return;
    }
    result.forEach((emp) => {
        searchResult.innerHTML += `
            <p>ID: ${emp.employeeID}</p>
            <p>Name: ${emp.empName}</p>
            <p>Department: ${emp.Department}</p>
            
        `;
    });
}
searchButton.addEventListener("click", () => {
    const searchText = searchEmployee.value.trim();
    SearchName2(searchText);
});
//he function remove sathi ahe
function removeEmployee111(employeeID) {
    employee12 = employee12.filter((employee) => employee.employeeID !== employeeID);
    //display updated emp
    displayemployeeInfo();
}
removeButton.addEventListener("click", () => {
    const id = Number(removeEmployeeId.value);
    removeEmployee111(id);
    updateEmployeeCount();
});
//# sourceMappingURL=Employee.js.map