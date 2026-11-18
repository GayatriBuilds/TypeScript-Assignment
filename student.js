"use strict";
/**********************************************************************************
 //TASK1:Student Information
 //Description: I have created a Student object with a specific TypeScript structure.
 //Defined the student object's properties and their data types
 //Create the student object and assigned values
 //Input:String,Number,Number,String,String,Boolean
 //Output:String,Number,Number,String,String,Boolean
**************************************************************************************/
let student = {
    Name: "Gayatri",
    Id: 101,
    Age: 21,
    Email: "gayatri@123",
    Course: "reactjs",
    IsStudent: true
};
/**********************************************************************************
 //TASK2:Student Marks
 //Description:Create an array containing marks for 5 subjects.
 // I create array of object for subject and marks.
 //Display all marks of the student then i can calculate total marks,
 // Calculate average marks,Find highest marks,Find lowest marks.
 //Input:String,Number
 //Output:String,Number
**************************************************************************************/
let subject = [
    {
        subject: "ReactJs",
        marks: 95
    },
    {
        subject: "AWS",
        marks: 96
    },
    {
        subject: "Html",
        marks: 88
    },
    {
        subject: "Angular",
        marks: 90
    },
    { subject: "Python",
        marks: 75
    }
];
//=======================================================
//************display all marks*************
//Description:I can use for each to display all
//marks of student and also use console.log for
//print ouput.
//=======================================================
subject.forEach(function (item) {
    console.log(item.subject, item.marks);
});
//=======================================================================
//***************calculate total marks***************
//Description:In this function i can use reduce to calulate
//total marks of student.return for sending a value back from a function.
// 0 is intial value of total
//========================================================================
let totalMarks = subject.reduce(function (total, item) {
    return total + item.marks;
}, 0);
console.log("Total marks:", totalMarks);
//=================================================================
//********************Calculate average marks******************
//Description:I can calculate average marks using sum arithmatic 
//operator and print it.
//=================================================================  
let average = totalMarks / subject.length;
console.log("averagemarks", average);
//====================================================================
//****************** find highest marks****************
//Description: It is used to find highest marks student and i use
//for each , if condition to check which marks is highest.
//====================================================================
let highest = 0;
subject.forEach(function (item) {
    if (item.marks > highest) {
        highest = item.marks;
    }
});
console.log(highest);
//=====================================================================================
//**************find lowest marks***************
//Description:It is used to find lowest marks of student and i can use
//subject[0]! for gets the first subject and ! for tells ts i am sure subject[0]
// exists and for each , if condition to check whcih marks is lowest.
//=======================================================================================
let lowest = subject[0].marks;
subject.forEach(function (item) {
    if (item.marks < lowest) {
        lowest = item.marks;
    }
});
console.log(lowest);
/**********************************************************************************
 //TASK5:Enum
 //Description:It is use create an enum namedand added the
 courses like Html,Css,JavaScript,TypeScript.
 //Input:String
 //Output:String
**************************************************************************************/
var Course;
(function (Course) {
    Course[Course["Html"] = 0] = "Html";
    Course[Course["Css"] = 1] = "Css";
    Course[Course["JavaScript"] = 2] = "JavaScript";
    Course[Course["TypeScript"] = 3] = "TypeScript";
})(Course || (Course = {}));
console.log(Course.Html);
console.log(Course.Css);
console.log(Course.JavaScript);
console.log(Course.TypeScript);
let student1 = {
    studentId: 101,
    name: "Gayatri",
    age: 21,
    email: "gayatri@123",
    course: Course.Html,
    marks: 95
};
let student2 = {
    studentId: 102,
    name: "vishakha",
    age: 21,
    email: "vishu@123",
    course: Course.Css,
    marks: 96
};
let student3 = {
    studentId: 103,
    name: "Lina",
    age: 21,
    email: "Lina@123",
    course: Course.JavaScript,
    marks: 88
};
let student4 = {
    studentId: 104,
    name: "nachiket",
    age: 18,
    email: "nachiket@123",
    course: Course.TypeScript,
    marks: 88
};
console.log(student1);
console.log(student2);
console.log(student3);
console.log(student4);
/**************************************************************************************
//***************TASK5:Tuple***************
//Description:It is used to create array and gives the fixed poisting of
//data type and value of data type define before.
****************************************************************************************/
let student5 = [105, "Mohit"];
console.log(student5);
/**************************************************************************************
//***************TASK6:Function***************
//Description:It is use for create function and gives the value of parameter
//with its data type.
****************************************************************************************/
//======================================================================
//Description:create function to perform the following operations:
//CALCULATE TOTAL MARKS.
//========================================================================
function totalmarks(total, item) {
    return total + item.marks;
}
let totalMarks1 = subject.reduce(totalmarks, 0);
console.log("Total marks:" + totalMarks1);
//======================================
//Calculate average marks
//======================================
function avgmarks(total, item) {
    return totalMarks / subject.length;
}
let average1 = subject.reduce(avgmarks, 0);
console.log("averagemarks", average1);
//=====================================
// Find highest marks
//======================================
let highmarks = 0;
subject.forEach(function (item) {
    if (item.marks > highmarks) {
        highmarks = item.marks;
    }
});
console.log(highmarks);
//====================================
// Find Lowest marks
//====================================
let lowmarks = subject[0].marks;
subject.forEach(function (item) {
    if (item.marks < lowmarks) {
        lowmarks = item.marks;
    }
});
console.log(lowmarks);
/****************************************************************************************************
//TASK7:student result
//Description:It is use calculate average of marks using function parameter and if else condition.
*****************************************************************************************************/
//===================================
//PASS:AVERAGE MARKS ARE 4O OR ABOVE
//FAIL:AVERAGE MARKS ARE BELOW 40
//==================================
function calculateResult(average) {
    if (average >= 40) {
        return "PASS";
    }
    else {
        return "FAIL";
    }
}
console.log(calculateResult(90));
console.log(calculateResult(35));
/***************************************************************************************
//Task:8 STUDENT CLASS
//Description: I can display to additional student data Using Class , Constructor ,
and this and void.
*****************************************************************************************/
class Student {
    constructor(StudentId, StudentName, Course, marks) {
        this.StudentId = StudentId;
        this.StudentName = StudentName;
        this.Course = Course;
        this.Marks = marks;
    }
    displayStudent() {
        console.log(this.StudentId, this.StudentName, this.Course, this.Marks);
    }
}
let Student1 = new Student(111, "Pratiksha", "Angular", 97);
let Student2 = new Student(112, "Janvi", "SQL", 80);
Student1.displayStudent();
Student2.displayStudent();
/*****************************************************************************
//Task9:Basic DOM Handling
//Description:It is used to display all data on browser using dom manipulation
//using some html property I can add student data on browser.after fillup this
information click on addstudent  button the information is saved in  webpage.
******************************************************************************/
//create a simple webpage containing:
//Student Name input
let studentname = document.querySelector("#studentname");
let studentID = document.querySelector("#studentID");
let studentcourse = document.querySelector("#studentcourse");
let studentmarks = document.querySelector("#studentmarks");
let addStudentBtn = document.querySelector("#addStudentBtn");
let studentProfile = document.querySelector(".student-Profile");
function calculateResult2(marks) {
    if (marks >= 40) {
        return "PASS";
    }
    else {
        return "FAIL";
    }
}
function addStudent() {
    let student11 = {
        Name: studentname.value,
        Id: Number(studentID.value),
        Course: studentcourse.value,
        marks: Number(studentmarks.value)
    };
    let result = calculateResult2(student11.marks);
    studentProfile.innerHTML = `
 <h2>Student Information</h2> 
<p>Name: ${student11.Name}</p>
 <p>Student ID: ${student11.Id}</p>
  <p>Course: ${student11.Course}</p> 
  <p>Marks: ${student11.marks}</p> 
<p>Result: ${result}</p> 
`;
}
addStudentBtn.addEventListener("click", addStudent);
// Save in JSON Server
fetch("http://localhost:3000/LeaveRequest1", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(student)
})
    .then((response) => {
    if (!response.ok) {
        throw new Error("failed to save leave request");
    }
    return response.json();
})
    .then((data) => {
    console.log("leave saved suceessfully:", data);
})
    .catch((error) => {
    console.log("error:", error);
});
//# sourceMappingURL=student.js.map