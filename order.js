/*************************************************************************************************************************
Task 1: JavaScript Data & ES6 Fundamentals
// Create order, customer and product data using JavaScript objects and arrays.
//Use let, const, template literals, destructuring, spread/rest operators and default parameters.
//Use map(), filter(), find(), some(), every() and reduce() to process order data.
//Convert the same basic data model into Typescript using explicit types.
*****************************************************************************************************************************/
//Create order, customer and product data using JavaScript objects and arrays.
//Customer
let Customer=[
    {
    customerID : 101,
    customerName : "Gayatri",
    customerEmail:"gayatri@123"
    
},
{
    customerID:112,
    customerName:"Vishakha",
    customerEmail:"vishakha@123"
},
{
    customerID:113,
    customerName:"Lina",
    customerEmail:"Lina@123"

}
];
console.log(Customer);

//Product
let product=[
    {
        productID:1,
        ProductName:"Laptop",
        ProductPrice:60000,
        Category:"Electronics",
        stock:10
    },
    {
        productID:2,
        ProductName:"Mobile",
        ProductPrice:30000,
        Category:"Electronics",
         stock:15
    },
    {
        productID:3,
        ProductName:"Headphones",
        ProductPrice:2000,
        Category:"Electronics",
        stock:20
    }
];
console.log(product);
//Order
let Order=[
    {
        orderID:1001,
        customer:"Gayatri",
        product:"Laptop",
        quantity:1,
        status:"Delivered"

    },
    {
        orderID:1002,
        customer:"Vishakha",
        product:"Mobile",
        quantity:2,
        status:"Pending"

    },
    {
        orderID:1003,
        customer:"Lina",
        product:"Headphones",
        quantity:3,
        status:"Delivered"

    }
];
console.log(Order);

//template literals
const Customers = Customer[0];
console.log(`customer Name: ${Customers.customerName} ,customer Email: ${Customers.customerEmail} `);

//destructuring
let product1 = ["smartwatch","washingMachine","AC","TV"];
let[first,second ,...rest]=product1
console.log(first);
console.log(second)
console.log(rest);

//spread operator

let customerName = ["Gayatri","Vishakha","Lina"];
let newCustomer=[...customerName];
console.log(newCustomer);

//map
let newCustomerName = Customer.map((customer)=>{
    return customer.customerName;

});
console.log(newCustomerName);

//Filter
let deliverOrder = Order.filter((order)=>{
    return order.status === "Delivered";
});
console.log(deliverOrder);

//reduce
let ProductPrice = [60000,30000,2000];
let Result = ProductPrice.reduce((res,cur)=>{

    return res + cur

});
console.log(Result);

//find
let Output = product.find((val)=>{
return val.productID === 2;

});
console.log(Output);

//some
let Output1 = Order.some((val)=>{
 return val.status === "Pending"
});
console.log(Output1);

//every
let Output2 = Order.every((val)=>{
    return val.quantity > 0;
});
console.log(Output2);

//default parameter

function createOrder(customerName,ProductName,quantity,status="Pending"){
    return{
        customerName,
        ProductName,
        quantity,
        status
    };

}
console.log(createOrder("Mohit","SmartWatch",1));

//// Task 6: JavaScript Promise & TypeScript Promise
// l In JavaScript, create a Promise that simulates fetching order data.
// l Handle the result using then(), catch() and finally()
// Rewrite the same operation using TypeScript with a typed Promise return type.
// l Use async/await to consume the typed Promise.
// l Handle rejected requests using try/catch.

// const fetchOrder = new Promise((resolve,reject)=>{
//     const success = true;
//     setTimeout(()=>{
//         if(success){
//             resolve({
//                 orderID:1001,
//             customerName:"Gayatri",
//         status:"Delicered"
//                 });

//         }else {
// reject("failed to fetch order data");

//         }
//     },2000);

// });
// fetchOrder
// .then((data)=>{
//     console.log("order data",data);

// })
// .catch((error)=>{
//     console.log("order error",error);
// })
// .finally(()=>{
//     console.log("order fetching process completed");
// });

//Task 11: JavaScript vs TypeScript Comparison
// l Implement one small order function first in JavaScript and then in TypeScript.
// l Show the difference between dynamic typing and static typing.
// l Demonstrate interface/type checking in TypeScript.
// l Demonstrate Promise vs Promise.
// l Demonstrate a JavaScript object being converted into a typed TypeScript object.
// l Document at least 5 practical advantages of TypeScript over JavaScript for a company project.

//Implement one small order function first in JavaScript and then in TypeScript.

let orderItem=[
    {ProductName:"Laptop",Quantity:10,Price:60000},
    {ProductName:"Mobile",Quantity:1,Price:30000},
    {ProductName:"AC",Quantity:5,Price:450000}
];

function CalculateOrder(items){
    return items.reduce((total,items)=>{
        return total + items.Quantity * items.Price;

    },0);
}
console.log("total Order price is",CalculateOrder(orderItem));

//Show the difference between dynamic typing and static typing
let Orders={
    ProductName:"Laptop",
    quantity:10,
    Price:"sixtity thousand"
}
console.log("Order Object is",Orders);

// Demonstrate Promise vs Promise.
const fetchOrder = new Promise((resolve,Reject)=>{
    const success = true;
    setTimeout(()=>{
        if(success){
            resolve({
                OrderId:1001,
                customerName:"Gayatri",
                Status:"Delivered"
            });

        }else{
            reject("Failed to fetch order data");
        }
    },2000);
});
    fetchOrder
    .then((data)=>{
        console.log("order data",data);
    })
    .catch((error)=>{
        console.log("order error",error);
    })
    .finally(()=>{
        console.log("order fetching process completed");
    });

// Demonstrate a JavaScript object being converted into a typed TypeScript object.
let customers={
customerName:"gayatri",
customerID:111
}
console.log("Enter Customer Object",Customers);