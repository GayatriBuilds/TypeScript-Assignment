type status = "Pending"|"Falied"|"Successed";

interface order {
    name:string;
    salary:number;

}

const Order:order={
name:"Gayatri",
salary:90000
}
console.log(Order);

function checkstatus(Status:string|number){
if(typeof Status === "string"){
    console.log("order successed");
}else{
    console.log("oder is cancelles");
}
}

checkstatus("Pending");