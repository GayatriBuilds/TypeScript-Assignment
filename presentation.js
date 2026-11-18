"use strict";
const Order = {
    name: "Gayatri",
    salary: 90000
};
console.log(Order);
function checkstatus(Status) {
    if (typeof Status === "string") {
        console.log("order successed");
    }
    else {
        console.log("oder is cancelles");
    }
}
checkstatus("Pending");
//# sourceMappingURL=presentation.js.map