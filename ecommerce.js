"use strict";
/*************************************************************************************************************************
Task 1: JavaScript Data & ES6 Fundamentals
// Create order, customer and product data using JavaScript objects and arrays.
//Use let, const, template literals, destructuring, spread/rest operators and default parameters.
//Use map(), filter(), find(), some(), every() and reduce() to process order data.
//Convert the same basic data model into Typescript using explicit types.
// *****************************************************************************************************************************/
// interface Customer{
//     customerID:number
//     customerName:string;
//     customerEmail:string;
// }
// let Customer1:Customer={
//     customerID:111,
//     customerName:"Gayatri",
//     customerEmail:"gayatri@123"
// }
// let Customer2:Customer={
//     customerID:112,
//     customerName:"Vishakha",
//     customerEmail:"vishakha@123"
// }
// let Customer3:Customer={
//     customerID:113,
//     customerName:"Lina",
//     customerEmail:"lina@123"
// }
// console.log("Customer1 is:",Customer1);
// console.log("Customer2 is:",Customer2);
// console.log("Customer3 is:",Customer3);
// interface Product{
//     productID:number;
//     productName:string;
//     productPrice:number;
//     category:string;
//      stock:number;
// }
// let Product1:Product={
//     productID:1,
//     productName:"Laptop",
//     productPrice:60000,
//     category:"Electronics",
//      stock:10
// }
// let Product2:Product={
//     productID:2,
//     productName:"Mobile",
//     productPrice:30000,
//     category:"Electronics",
//     stock:20
// }
// let Product3:Product={
//     productID:3,
//     productName:"HeadPhones",
//     productPrice:2000,
//     category:"Electronics",
//     stock:15
// }
// console.log("Product1 is:",Product1);
// console.log("Product2 is:",Product2);
// console.log("Product3 is:",Product3);
// interface Order{
//     orderID:number;
//     customer:string;
//     product:string;
//     quantity:number;
//     status:string
// }
// let Order1:Order={
//    orderID:1001,
//     customer:"Gayatri",
//     product:"Laptop",
//     quantity:1,
//     status:"Delivered" 
// }
// let Order2:Order={
//     orderID:1002,
//     customer:"Vishakha",
//     product:"Mobile",
//     quantity:2,
//     status:"Pending"
// }
// let Order3:Order={
//     orderID:1003,
//     customer:"Lina",
//     product:"HeadPhones",
//     quantity:3,
//     status:"Delivered"
// }
// console.log("Order1 is",Order1);
// console.log("Order2 is",Order2);
// console.log("Order3 is",Order3);
// //Use let, const, template literals, destructuring, spread/rest operators and default parameters.
// //let const template literals
// const CustomerData: Customer = Customer1;
// console.log(`Customer Name is:${CustomerData.customerName}, Customer Email is:${CustomerData.customerEmail}`);
// //destructring
// let Product11:string[] = ["SmartWatch","WashingMachine","AC","TV"];
// let[first,second,...rest]=Product11;
// console.log(first);
// console.log(second);
// console.log(rest);
// //spread operator
// let customerName:string[] = ["Gayatri","Vishakha","Lina"];
// let newCustomer = [...customerName];
// console.log(newCustomer);
// //Map
// const Customers: Customer[] = [
//     Customer1,
//     Customer2,
//     Customer3
// ];
// let newCustomerName:string[] = Customers.map((customer:Customer)=>{
//  return customer.customerName;
// });
// console.log(newCustomerName);
// //Filter
// const Orders:Order[]=[
//     Order1,
//     Order2,
//     Order3
// ];
// let deliverOrder=Orders.filter((order:Order)=>{
//     return order.status === "Delivered";
// });
// console.log(deliverOrder);
// //reduce
// let productPrice:number[] = [60000,30000,2000];
// let Result:number = productPrice.reduce((res,cur)=>{
//     return res + cur;
// });
// console.log(Result);
// //find
// const Products:Product[]=[
//     Product1,
//     Product2,
//     Product3
// ];
// let Output = Products.find((val)=>{
// return val.productID === 2;
// });
// console.log(Output);
// //Some
// let Output1 = Orders.some((val)=>{
//     return val.status === "pending";
// });
// console.log(Output1);
// //every
// let Output2 = Orders.every((val)=>{
//     return val.quantity > 0;
// });
// console.log(Output2);
// //Default Parameter
// const Customers1: Customer[] = [
//     Customer1,
//     Customer2,
//     Customer3
// ];
// const Orders1:Order[]=[
//     Order1,
//     Order2,
//     Order3
// ];
// const Products1:Product[]=[
//     Product1,
//     Product2,
//     Product3
// ];
// function createOrders(customerName:string,productName:string,quantity:number,status:string="Pending"){
//     return{
//         customerName,
//         productName,
//         quantity,
//         status
//     };
// }
// console.log(createOrders("Nachiket","WashingMachin",1,));
/******************************************************************************************************************
//Task 2: TypeScript Types & Interfaces
l Create interfaces for Customer, Product, OrderItem and Order.
l Use type aliases for suitable reusable types.
l Use optional properties where appropriate.
l Create at least 5 orders and ensure the data follows the TypeScript definitions.
l Demonstrate how TypeScript prevents invalid values that JavaScript would allow at runtime.
********************************************************************************************************************/
// interface Customer{
//     customerID:number
//     customerName:string;
//     customerEmail:string;
//     phone?:string;
// }
// let Customer1:Customer={
//     customerID:111,
//     customerName:"Gayatri",
//     customerEmail:"gayatri@123",
//     phone:"123456789"
// }
// let Customer2:Customer={
//     customerID:112,
//     customerName:"Vishakha",
//     customerEmail:"vishakha@123"
// }
// let Customer3:Customer={
//     customerID:113,
//     customerName:"Lina",
//     customerEmail:"lina@123"
// }
// console.log("Customer1 is:",Customer1);
// console.log("Customer2 is:",Customer2);
// console.log("Customer3 is:",Customer3);
// interface Product{
//     productID:number;
//     productName:string;
//     productPrice:number;
//     category:string;
//      stock:number;
// }
// let Product1:Product={
//     productID:1,
//     productName:"Laptop",
//     productPrice:60000,
//     category:"Electronics",
//      stock:10
// }
// let Product2:Product={
//     productID:2,
//     productName:"Mobile",
//     productPrice:30000,
//     category:"Electronics",
//     stock:20
// }
// let Product3:Product={
//     productID:3,
//     productName:"HeadPhones",
//     productPrice:2000,
//     category:"Electronics",
//     stock:15
// }
// console.log("Product1 is:",Product1);
// console.log("Product2 is:",Product2);
// console.log("Product3 is:",Product3);
// interface orderItem {
//     product:string;
//     quantity:number;
// }
// let orderItem1:orderItem={
//     product:"refregrator",
//     quantity:10
// }
// let orderItem2:orderItem={
//     product:"Tab",
//     quantity:5
// }
// let orderItem3:orderItem={
//     product:"Lamp",
//     quantity:15
// }
// let orderItem4:orderItem={
//     product:"AC",
//     quantity:1
// }
// let orderItem5:orderItem={
//     product:"SmartWatch",
//     quantity:2
// }
//type
// type orderStatus = "Pending"|"Delivered"|"Cancelled";
// interface Order{
//     orderID:number;
//     customer:string;
//     items:orderItem[];
//     totalAmount: number;
//     status:orderStatus
// }
// let Order1:Order={
//    orderID:1001,
//     customer:"Gayatri",
//     items:[
//         {
//          product:"refregrator",
//     quantity:10
//         }
//     ],
//     status:"Delivered" ,
//     totalAmount: 50000
// }
// let Order2:Order={
//     orderID:1002,
//     customer:"Vishakha",
//     items:[
//         {
//             product:"Tab",
//     quantity:5
//         }
//     ],
//     status:"Pending",
//     totalAmount: 70000
// }
// let Order3:Order={
//     orderID:1003,
//     customer:"Lina",
//     items:[
//         {
//          product:"Lamp",
//     quantity:15
//         }
//     ],
//     status:"Cancelled",
//     totalAmount:5000
// }
// let Order4:Order={
//     orderID:1004,
//     customer:"Mohit",
//     items:[
//         {
//          product:"AC",
//     quantity:1
//         }
//     ],
//     status:"Delivered",
//     totalAmount: 45000
// }
// let Order5:Order={
//     orderID:1005,
//     customer:"Nachiket",
//     items:[
//         {
//          product:"SmartWatch",
//     quantity:2
//         }
//     ],
//     status:"Pending",
//     totalAmount: 90000
// }
// const AllOrders: Order[] = [
//     Order1,
//     Order2,
//     Order3,
//     Order4,
//     Order5
// ];
// console.log(AllOrders);
// l Demonstrate how TypeScript prevents invalid values that JavaScript would allow at runtime.
// let inValidOrder:Order={
// orderID:"1006",
//     customer:"Raul",
//     items:[
//         {
//          product:"refregrator",
//     quantity:10
//         }
//     ],
//     status:"Delivered" 
// }
// let inValidOrder1:Order={
// orderID:1006,
//     customer:"Raul",
//     items:[
//         {
//          product:"refregrator",
//     quantity:10
//         }
//     ],
//     status:"Processing" 
// }
/******************************************************************************************
Task 3: Union Types & Type Guards
l Create an OrderStatus type using a union of valid status strings.
l Create a function accepting string | number and handle both values using typeof.
l Use instanceof for class-based order/customer objects.
l Display a suitable message for invalid or unsupported values
******************************************************************************************/
//Create a function accepting string | number and handle both values using typeof.
//Use instanceof for class-based order/customer objects.
//Display a suitable message for invalid or unsupported values.
// function ProductOrder(value:string|number){
//     if(typeof value ==="string"){
//         console.log(value.toLowerCase());
//     }else{
//         console.log(value.toFixed(2));
//     }
// }
// ProductOrder("SmartWatch");
// ProductOrder(60000);
// class CustomerInfo {
//     constructor(
//         public customerID: number,
//         public customerName: string
//     ) {}
// }
// class OrderInfo {
//     constructor(
//         public orderID: number,
//         public status: string
//     ) {}
// }
// function CustomerOrder(Customer:CustomerInfo|OrderInfo){
// if(Customer instanceof CustomerInfo ){
//     console.log("Enter Customer Info :",Customer.customerName);
// }
// else if(Customer instanceof OrderInfo){
// console.log("Enter Order Info",Customer.orderID);
// }
// }
// const customerObj = new CustomerInfo(111, "Gayatri");
// const orderObj = new OrderInfo(1001, "Pending");
// CustomerOrder(customerObj);
// CustomerOrder(orderObj);
////Display a suitable message for invalid or unsupported values.
// function statusMsg(status:string){
//     if(
//         status === "Pending" ||
//         status === "Delivered"||
//         status=== "Cancelled"
//     ){
// console.log("Valid status is",status);
//     }
//     else{
//         console.log("Invalid or Unsupported values",status);
//     }
// }
// statusMsg("Pending");
// statusMsg("Cancelled");
// statusMsg("Processing");
/************************************************************************************
//Task 4: Classes, Constructor & Encapsulation
> Create an OrderManager class using a constructor.
> Implement methods to add, remove, search and update orders.
> Keep order data private where appropriate.
> Use getter and setter methods to safely update order status or total amount.
> Prevent invalid values such as negative quantity or negative order amount.
**************************************************************************************/
// class OrderManager1{
//     private Orders:Order[] = [];
// constructor(orders: Order[] = []) {
//     this.Orders = orders;
// }
//     addOrder(order:Order):void{
//         this.Orders.push(order);
//Check quantity inside order items
//   const invalidQuantity = order.items.some(
//      item => item.quantity < 0 
//     ); 
//     if (invalidQuantity) { 
//         console.log("Negative quantity is not allowed");
//          return;
//          }
//           this.Orders.push(order);
//           console.log("Order added successfully"); }
//     removeOrder(orderID:number){
//         this.Orders = this.Orders.filter(function(order){
//             return order.orderID !== orderID;
//         });
//     }
//     searchOrder(orderID:number):Order|undefined{
//         return this.Orders.find(function(order){
//             return order.orderID === orderID;
//         });
//  }
// Update Order Status 
// updateOrder(orderID: number, newStatus: orderStatus ): void { 
// const order = this.searchOrder(orderID); 
// if (order) {
//      order.status = newStatus; 
// console.log("Order updated successfully"); 
// } else { 
//     console.log("Order not found"); 
// } 
// } 
// Getter
//  get getOrders(): Order[] { 
// return this.Orders; 
// }
// // Setter: Update Order Amount 
// setOrderAmount(orderID: number, amount: number): void {
//      const order = this.searchOrder(orderID); 
//      if (!order) { 
//         console.log("Order not found");
//          return; 
//         } if (amount < 0) { 
//             console.log("Negative amount is not allowed"); 
//             return;
//         }
//          order.totalAmount = amount;
//           console.log("Order amount updated successfully");
//          }
//         }
// let orderManger= new OrderManager1();
// orderManger.addOrder(Order1);
// orderManger.addOrder(Order2);
// orderManger.addOrder(Order3);
// console.log(orderManger.getOrders);
// orderManger.removeOrder(1001);
// console.log(orderManger.getOrders);
// let result11 = orderManger.searchOrder(111);
// console.log("search order result:");
// console.log(result11);
// orderManger.searchOrder(111);
// let result12 = orderManger.searchOrder(999);
// console.log("search order result:");
// console.log(result12);
// orderManger.searchOrder(999);
//===================================================== 
// // Update Order Status 
// //=====================================================
//   orderManger.updateOrder(1002, "Delivered");
//    console.log(orderManger.getOrders);
//===================================================== 
// // Update Order Amount
////=====================================================
//  orderManger.setOrderAmount(1002, 5000); 
//  console.log(orderManger.getOrders);
//  Task 5: Inheritance & Polymorphism
// l Create a Payment base class.
// l Create CardPayment, UPIPayment and CashOnDelivery child classes.
// l Use a common processPayment() method.
// l Override the method in each child class with different payment processing logic.
// l Use polymorphism to process different payment objects through the same method.
// class Payment{
//      totalAmount:number;
//      constructor(totalAmount:number){
//         this.totalAmount = totalAmount;
//      }
//      processPayment(): void {
//         console.log("Processing payment...");
//     }
// }
// //child class
// class CardPayment extends Payment{
//     processPayment(): void {
//         console.log("card payment will be processed successfully");
//     }
// }
// class UPIPayment extends Payment{
// processPayment(): void {
//         console.log("upi payment will be processed successfully");
//     }
// }
// class CashOnDelivery extends Payment{
// processPayment(): void {
//         console.log("payment will be collected on delivry");
//     }
// }
// const payments: Payment[] = [
//     new CardPayment(5000),
//     new UPIPayment(2000),
//     new CashOnDelivery(1000)
// ];
// payments.forEach(payment => {
//     payment.processPayment();
// });
// Task 6: JavaScript Promise & TypeScript Promise
// l In JavaScript, create a Promise that simulates fetching order data.
// l Handle the result using then(), catch() and finally()
// Rewrite the same operation using TypeScript with a typed Promise return type.
// l Use async/await to consume the typed Promise.
// l Handle rejected requests using try/catch.
// interface OrderData{
//     orderID:number;
//     customer:string;
//     status:"Pending"|"Delivered"|"Cancelled";
// }
// function fetchORderData():Promise<OrderData>{
//     return new Promise<OrderData>((resolve,reject)=>{
//         const success = true;
//         setTimeout(()=>{
//             if(success){
//                 resolve({
//                     orderID:1001,
//                     customer:"Gayatri",
//                     status:"Delivered"
//                 });
//             }else{
//                 reject("Failed to fetch order data");
//             }
//         },2000);
//     });
// }
// async function displayOrderData():Promise<void>{
//     try{
//         const data:OrderData = await fetchORderData();
//         console.log("order data",data);
//     }catch(error){
//         console.log("error",error);
//     }finally{
// console.log("Order fetching process completed");
//     }
// }
// displayOrderData();
// Task 7: API Simulation & Typed Response
// l Create a simulated API function such as getOrders().
// l Return order data asynchronously.
// l Define an interface for the API response.
// l Use Promise to ensure the returned response has the expected structure.
// l Display a suitable error message when the API operation fails
// interface OrderData{
//     orderID:number;
//     customer:string;
//     status:"Pending"|"Delivered"|"Cancelled";
// }
// interface APIresponse{
//     success:boolean;
//     message:string;
//     data:OrderData[];
// }
// function getOrders():Promise<APIresponse>{
//     return new Promise((resolve,reject)=>{
//         const success = true;
//         setTimeout(()=>{
//             if(success){
//                 resolve({
//                     success:true,
//                     message:"orders fetched successfully",
//                 data:[ 
//                     {orderID: 1001, customer: "Gayatri", status: "Delivered" },
//                  { orderID: 1002, customer: "Vishakha", status: "Pending" }, 
//                 { orderID: 1003, customer: "Lina", status: "Cancelled" }
//                          ]
//             });
//             }else{
//                 reject("Failed to fetch order from API");
//             }
//         },2000);
//     });
// }
// getOrders()
//  .then((response) => {
//  console.log(response.message); 
//  console.log("Order Data:", response.data); 
// }) 
// .catch((error) => { 
//     console.log("API Error:", error); 
// });
//Task 8: Generics
// l Create a generic function such as getById() that can search different typed collections.
// l Use the same generic function for customers, products and orders.
// l Create a reusable generic API response type such as ApiResponse.
// l Demonstrate why generics are safer than using any.
// interface Customer{
//     customerID:number
//     customerName:string;
//     customerEmail:string;
//     phone?:string;
// }
// let Customer1:Customer={
//     customerID:111,
//     customerName:"Gayatri",
//     customerEmail:"gayatri@123",
//     phone:"123456789"
// }
// let Customer2:Customer={
//     customerID:112,
//     customerName:"Vishakha",
//     customerEmail:"vishakha@123"
// }
// let Customer3:Customer={
//     customerID:113,
//     customerName:"Lina",
//     customerEmail:"lina@123"
// }
// console.log("Customer1 is:",Customer1);
// console.log("Customer2 is:",Customer2);
// console.log("Customer3 is:",Customer3);
// const Customers: Customer[] = 
// [ Customer1, Customer2, Customer3 ];
// interface Product{
//     productID:number;
//     productName:string;
//     productPrice:number;
//     category:string;
//      stock:number;
// }
// let Product1:Product={
//     productID:1,
//     productName:"Laptop",
//     productPrice:60000,
//     category:"Electronics",
//      stock:10
// }
// let Product2:Product={
//     productID:2,
//     productName:"Mobile",
//     productPrice:30000,
//     category:"Electronics",
//     stock:20
// }
// let Product3:Product={
//     productID:3,
//     productName:"HeadPhones",
//     productPrice:2000,
//     category:"Electronics",
//     stock:15
// }
// console.log("Product1 is:",Product1);
// console.log("Product2 is:",Product2);
// console.log("Product3 is:",Product3);
// const Products: Product[] =
//  [ Product1, Product2, Product3 ];
// interface orderItem {
//     product:string;
//     quantity:number;
// }
// let orderItem1:orderItem={
//     product:"refregrator",
//     quantity:10
// }
// let orderItem2:orderItem={
//     product:"Tab",
//     quantity:5
// }
// let orderItem3:orderItem={
//     product:"Lamp",
//     quantity:15
// }
// let orderItem4:orderItem={
//     product:"AC",
//     quantity:1
// }
// let orderItem5:orderItem={
//     product:"SmartWatch",
//     quantity:2
// }
// type
// type orderStatus = "Pending"|"Delivered"|"Cancelled";
// interface Order{
//     orderID:number;
//     customer:string;
//     items:orderItem[];
//     totalAmount: number;
//     status:orderStatus
// }
// let Order1:Order={
//    orderID:1001,
//     customer:"Gayatri",
//     items:[
//         {
//          product:"refregrator",
//     quantity:10
//         }
//     ],
//     status:"Delivered" ,
//     totalAmount: 50000
// }
// let Order2:Order={
//     orderID:1002,
//     customer:"Vishakha",
//     items:[
//         {
//             product:"Tab",
//     quantity:5
//         }
//     ],
//     status:"Pending",
//     totalAmount: 70000
// }
// let Order3:Order={
//     orderID:1003,
//     customer:"Lina",
//     items:[
//         {
//          product:"Lamp",
//     quantity:15
//         }
//     ],
//     status:"Cancelled",
//     totalAmount:5000
// }
// let Order4:Order={
//     orderID:1004,
//     customer:"Mohit",
//     items:[
//         {
//          product:"AC",
//     quantity:1
//         }
//     ],
//     status:"Delivered",
//     totalAmount: 45000
// }
// let Order5:Order={
//     orderID:1005,
//     customer:"Nachiket",
//     items:[
//         {
//          product:"SmartWatch",
//     quantity:2
//         }
//     ],
//     status:"Pending",
//     totalAmount: 90000
// }
// const AllOrders: Order[] = [
//     Order1,
//     Order2,
//     Order3,
//     Order4,
//     Order5
// ];
// console.log(AllOrders);
//====================================================== 
//// 4. Generic Function: getById() 
// //======================================================
//  function getById<T>(
//      items: T[], 
//      id: number, 
//      getID: (item: T) =>number ): T | undefined
//       {
//          return items.find(item => 
//             getID(item) === id); 
//         }
//====================================================== 
//// 5. Search Customer by ID
//====================================================== 
// const customerResult = getById( Customers, 112, customer => customer.customerID ); 
// console.log("Customer Result:", customerResult);
//======================================================
//6. Search Product by ID 
//====================================================== 
// const productResult = getById( Products, 2, product => product.productID );
//      console.log("Product Result:", productResult);
//====================================================== 
//// 7. Search Order by ID 
//====================================================== 
// const orderResult = getById( AllOrders, 1003, order => order.orderID ); 
// console.log("Order Result:", orderResult);
//====================================================== 
// 8. Generic API Response Interface 
//======================================================
//  interface ApiResponse<T>
// { success: boolean; message: string; data: T; }
//======================================================
//// 9. Customer API Response 
//====================================================== 
// const customerResponse: ApiResponse<Customer[]> =
//  { 
// success: true, 
// message: "Customers fetched successfully", data: Customers 
// }; 
//  console.log("Customer API Response:", customerResponse);
//====================================================== 
// 10. Product API Response
//====================================================== 
// const productResponse: ApiResponse<Product[]> = { 
// success: true,
// message: "Products fetched successfully", data: Products }; 
// console.log("Product API Response:", productResponse);
//====================================================== 
// 11. Order API Response 
//====================================================== 
// const orderResponse: ApiResponse<Order[]> = { 
//     success: true,
//      message: "Orders fetched successfully",
//      data: AllOrders
//     };
//       console.log("Order API Response:", orderResponse);
//====================================================== 
// 12. Demonstrating Type Safety 
//====================================================== 
//  Correct: Customer array is assigned to Customer[] data.
//  const validResponse: ApiResponse<Customer[]> = { 
//     success: true, 
//     message: "Valid customer response", data: Customers }; 
//     console.log("Valid Response:", validResponse); 
// Uncomment the following code to see the TypeScript error.
// const invalidResponse: ApiResponse<Customer[]> = { 
//      success: true, 
//       message: "Invalid response", 
//        data: Products 
//      };
/**************************************************************************************************************
//Task 9: Array Methods & Business Logic
l Calculate the total order amount using reduce().
l Find all pending orders using filter().
l Find an order by ID using find().
l Check whether all order items have valid quantities using every().
l Check whether at least one order is critical/high value using some().
l Create a report showing total orders, total sales, average order value and highest-value order.
***************************************************************************************************************/
//Calculate the total amount using reduce()
// interface orderItem {
//     product:string;
//     quantity:number;
// }
// let orderItem1:orderItem={
//     product:"refregrator",
//     quantity:10
// }
// let orderItem2:orderItem={
//     product:"Tab",
//     quantity:5
// }
// let orderItem3:orderItem={
//     product:"Lamp",
//     quantity:15
// }
// let orderItem4:orderItem={
//     product:"AC",
//     quantity:1
// }
// let orderItem5:orderItem={
//     product:"SmartWatch",
//     quantity:2
// }
// type orderStatus = "Pending"|"Delivered"|"Cancelled";
// type  orderPriority= "Low"|"Medium"|"High"|"Critical";
// interface Order{
//     orderID:number;
//     customer:string;
//     items:orderItem[];
//     totalAmount: number;
//     status:orderStatus;
//     Priority11:orderPriority
// }
// let Order1:Order={
//    orderID:1001,
//     customer:"Gayatri",
//     items:[
//         {
//          product:"refregrator",
//     quantity:10
//         }
//     ],
//     status:"Delivered" ,
//     totalAmount: 50000,
//     Priority11:"Low"
// }
// let Order2:Order={
//     orderID:1002,
//     customer:"Vishakha",
//     items:[
//         {
//             product:"Tab",
//     quantity:5
//         }
//     ],
//     status:"Pending",
//     totalAmount: 70000,
//     Priority11:"Medium"
// }
// let Order3:Order={
//     orderID:1003,
//     customer:"Lina",
//     items:[
//         {
//          product:"Lamp",
//     quantity:15
//         }
//     ],
//     status:"Cancelled",
//     totalAmount:5000,
//     Priority11:"High"
// }
// let Order4:Order={
//     orderID:1004,
//     customer:"Mohit",
//     items:[
//         {
//          product:"AC",
//     quantity:1
//         }
//     ],
//     status:"Delivered",
//     totalAmount: 45000,
//     Priority11:"Critical"
// }
// let Order5:Order={
//     orderID:1005,
//     customer:"Nachiket",
//     items:[
//         {
//          product:"SmartWatch",
//     quantity:2
//         }
//     ],
//     status:"Pending",
//     totalAmount: 90000,
//     Priority11:"Low"
// }
// const AllOrders: Order[] = [
//     Order1,
//     Order2,
//     Order3,
//     Order4,
//     Order5
// ];
// console.log(AllOrders);
// let OrderAmount = AllOrders.reduce(function(total,item){
//     return  total + item.totalAmount;
// },0);
// console.log("total Amount:",OrderAmount);
//  Find all pending orders using filter().
//Display All Status
// function allStatus():void{
//     AllOrders.forEach((orderStatus)=>{
//         console.log(orderStatus);
//     })
// }
// allStatus();
//all pending status
// function pendingOrders(status:orderStatus):void{
//     console.log("function called");
//     console.log("total orders",AllOrders.length);
//     const PendingOrders = AllOrders.filter((pOrders)=>pOrders.status === status
// );
// console.log(PendingOrders);
// }
// pendingOrders("Pending");
// Find an order by ID using find().
// let Output = AllOrders.find((val)=>{
// return val.orderID === 2;
//     return val.orderID === 1002;
// });
// console.log("find the second number order:",Output);
// Check whether all order items have valid quantities using every().
// interface OrderItems {
//     product:string;
//     quantity:number;
// }
// let orderItem1:orderItem={
//     product:"refregrator",
//     quantity:10
// }
// let orderItem2:orderItem={
//     product:"Tab",
//     quantity:5
// }
// let orderItem3:orderItem={
//     product:"Lamp",
//     quantity:15
// }
// let orderItem4:orderItem={
//     product:"AC",
//     quantity:1
// }
// let orderItem5:orderItem={
//     product:"SmartWatch",
//     quantity:2
// }
// const orderItems:OrderItems[]=[
//     {product:"Laptop",quantity:10},
//     {product:"SmartWatch",quantity:2},
//     {product:"Lamp",quantity:1},
//     {product:"AC",quantity:5},
//     {product:"Tabs",quantity:20},
// ]
// let isvalid = orderItems.every((item:OrderItems)=> item.quantity > 0);
// console.log(isvalid);
// //  Check whether at least one order is critical/high value using some().
// let PriorityOrder = AllOrders.some((item:Order)=>{
//     return item. Priority11 === "High" ||
//     item .Priority11 === "Critical";
// });
// console.log("order is extisting:",PriorityOrder);
// Create a report showing total orders, total sales, average order value and highest-value order.
// Average order values
// function averageOrder(total:number,item:{product:string}):number{
//     return total / product.length ;
// }
// let Average11 = product.reduce(averageOrder,0)
// console.log("averageOrder",Average11);
// let totalOrders = AllOrders.length;
// let totalSales = AllOrders.reduce((total,order)=>{
// return total + order.totalAmount;
// },0);
//Average Order
// let AverageOrder = totalSales / totalOrders;
// //highest-value order.
// let highestValueOrder = AllOrders.reduce((highest, current) => {
//     return current.totalAmount > highest.totalAmount
//         ? current
//         : highest;
// });
// console.log("Total Orders:", totalOrders);
// console.log("Total Sales:", totalSales);
// console.log("Average Order Value:", AverageOrder);
// console.log("Highest-Value Order:", highestValueOrder);
// Task 10: DOM Integration
// l Create an order form containing Order ID, Customer Name, Product, Quantity, Payment Type and Status.
// l Use TypeScript to read and validate the form values.
// l Add orders dynamically to an HTML table.
// l Implement Search, Update Status and Delete actions.
// l Update the dashboard without refreshing the page.
// l Use proper TypeScript types for DOM elements instead of using any
let orderid = document.getElementById("OrderID");
let customername = document.getElementById("CustomerName");
let product = document.getElementById("Product");
let quantity = document.getElementById("Quantity");
let paymenttype = document.getElementById("PaymentType");
let Status = document.getElementById("Status");
let updateStatusDropdown = document.getElementById("updateStatus");
const updateOrderId1 = document.querySelector("#updateOrderID");
const addOrderButton = document.getElementById("AddOrder");
const searchOrderID = document.getElementById("searchOrderID");
const ecommercesearchButton = document.getElementById("searchButton");
const ecommmercesearchResult = document.getElementById("searchResult");
const orderBody = document.getElementById("orderBody");
const totalOrders = document.getElementById("totalOrder");
const Customer = document.getElementById("Customer");
const pendingOrders = document.getElementById("Pending");
const deliveredOrders = document.getElementById("Delivered");
const cancelledOrders = document.getElementById("Cancelled");
const totalSalesElement = document.getElementById("totalSales");
const reportTotal = document.getElementById("reportTotal");
const reportSales = document.getElementById("reportSales");
const reportAverage = document.getElementById("reportAverage");
const reportHighestOrder = document.getElementById("reportHighestOrder");
const filterOrderInput = document.getElementById("filterOrderInput");
const filterOrderButton = document.getElementById("filterOrderButton");
let AllOrders = [];
const productList = [
    { productName: "Laptop", price: 60000 },
    { productName: "Tab", price: 15000 },
    { productName: "Mobile", price: 30000 },
    { productName: "AC", price: 40000 },
    { productName: "SmartWatch", price: 5000 }
];
function getProductPrice(productName) {
    const foundProduct = productList.find(item => item.productName === productName);
    return foundProduct ? foundProduct.price : 0;
}
let selectedOrderID = null;
let selectedDeleteID = null;
addOrderButton.addEventListener("click", (event) => {
    event.preventDefault();
    // Read form values
    const id = Number(orderid.value);
    const name = customername.value.trim();
    const selectedProduct = product.value;
    const qty = Number(quantity.value);
    const payment = paymenttype.value;
    const orderStatus = Status.value;
    // Validate empty fields
    if (orderid.value.trim() === "" ||
        name === "" ||
        selectedProduct === "" ||
        quantity.value.trim() === "" ||
        payment === "PaymentType" ||
        orderStatus === "SelectStatus") {
        alert("Please fill all fields");
        return;
    }
    // Validate Order ID
    if (!Number.isInteger(id) || id <= 0) {
        alert("Please enter a valid Order ID");
        return;
    }
    // Validate Quantity
    if (!Number.isInteger(qty) || qty <= 0) {
        alert("Quantity must be a positive whole number");
        return;
    }
    // Check duplicate Order ID
    const existingOrder = AllOrders.find(order => order.orderID === id);
    if (existingOrder) {
        alert("Order ID already exists");
        return;
    }
    // Get product price
    const price = getProductPrice(selectedProduct);
    if (price <= 0) {
        alert("Please select a valid product");
        return;
    }
    // Create new order
    const newOrder = {
        orderID: id,
        customerName: name,
        product: selectedProduct,
        quantity: qty,
        paymentType: payment,
        status: orderStatus,
        totalAmount: qty * price
    };
    // Add order
    AllOrders.push(newOrder);
    // Update table and dashboard
    displayOrders();
    updateDashboard1();
    generateOrderReport();
    // alert("Order added successfully");
});
// fetch("http://localhost:3000/ServiceRequest11", {
//  method: "POST",
//  headers: {
//  "Content-Type": "application/json"
//  },
//  body: JSON.stringify(request)
// })
// .then((response) => {
//  if (!response.ok) {
//  throw new Error("failed to save Order");
//  }
//  return response.json();
// })
// .then((data) => {
//  console.log("Customer saved successfully:", data);
//  ServiceRequest11.push(data);
// displayOrders();
// updateDashboard1();
// })
// .catch((error) => {
//  console.log("Error:", error);
// });
// //diaplay order
function displayOrders() {
    orderBody.innerHTML = "";
    AllOrders.forEach((order) => {
        let row = document.createElement("tr");
        row.innerHTML += `
    <td>${order.orderID}</td>
    <td>${order.customerName}</td>
    <td>${order.product}</td>
    <td>${order.quantity}</td>
    <td>${order.totalAmount}</td>
    <td>${order.paymentType}</td>
    <td>${order.status}</td>

<td> 
<button onclick="updateOrder(${order.orderID})">Update</button>
<button onclick="deleteOrder(${order.orderID})">Delete</button> 
</td> `;
        orderBody.appendChild(row);
    });
}
// //search order
ecommercesearchButton.addEventListener("click", (event) => {
    event.preventDefault();
    const id = Number(searchOrderID.value);
    if (searchOrderID.value.trim() === "") {
        ecommmercesearchResult.textContent = "Please enter a Order ID!";
        return;
    }
    const foundOrder = AllOrders.find(order => order.orderID === id);
    if (foundOrder) {
        ecommmercesearchResult.textContent =
            `Order ID: ${foundOrder.orderID},
     Customer: ${foundOrder.customerName} ,
      Product: ${foundOrder.product} ,
     Quantity: ${foundOrder.quantity} ,
      Payment: ${foundOrder.paymentType} ,
       Status: ${foundOrder.status}`;
    }
    else {
        ecommmercesearchResult.textContent = "Order not found!";
    }
});
filterOrderButton.addEventListener("click", () => {
    searchOrder(filterOrderInput.value.trim());
});
//Update order
const updatePopup1 = document.querySelector("#UpdatePopup");
const closeUpadtePopup1 = document.querySelector("#closeUpdatePopup");
const updateOrderId = document.querySelector("#updateOrderID");
// const product11= document.querySelector("#Product")as HTMLElement;
// const paymenttype1= document.querySelector("#PaymentType")as HTMLElement;
// const status11 = document.querySelector("#Status")as HTMLSelectElement;
const saveUpdate1 = document.querySelector("#saveUpdate");
const updateProduct = document.getElementById("updateProduct");
const updatePaymentType = document.getElementById("updatePaymentType");
function updateOrder(id) {
    let foundOrder = AllOrders.find((order) => order.orderID === id);
    if (!foundOrder) {
        // alert("Order not found");
        return;
    }
    selectedOrderID = id;
    // updateOrderId.value = String(foundOrder.orderID)
    // updateStatusDropdown.value = foundOrder.status;
    updateOrderId.value = String(foundOrder.orderID);
    updateProduct.value = foundOrder.product;
    updatePaymentType.value = foundOrder.paymentType;
    updateStatusDropdown.value = foundOrder.status;
    updatePopup1.style.display = "block";
}
saveUpdate1.addEventListener("click", () => {
    if (selectedOrderID === null) {
        return;
    }
    const orderToUpdate = AllOrders.find((order) => order.orderID === selectedOrderID);
    if (!orderToUpdate) {
        alert("order is not found");
        return;
    }
    // orderToUpdate.status = updateStatusDropdown.value;
    orderToUpdate.product = updateProduct.value;
    orderToUpdate.totalAmount = orderToUpdate.quantity * getProductPrice(updateProduct.value);
    orderToUpdate.paymentType = updatePaymentType.value;
    orderToUpdate.status = updateStatusDropdown.value;
    selectedOrderID = null;
    updatePopup1.style.display = "none";
    displayOrders();
    updateDashboard1();
    generateOrderReport();
});
closeUpadtePopup1.addEventListener("click", () => {
    selectedOrderID = null;
    updatePopup1.style.display = "none";
    displayOrders();
    updateDashboard1();
});
//search
function searchOrder(searchtext) {
    const result = AllOrders.filter((order) => order.orderID.toString() === searchtext ||
        order.customerName.toLowerCase().includes(searchtext.toLowerCase()) ||
        order.product.toLowerCase().includes(searchtext.toLowerCase()) ||
        order.quantity.toString() === searchtext ||
        order.paymentType.toLowerCase().includes(searchtext.toLowerCase()) ||
        order.status.toLowerCase().includes(searchtext.toLowerCase()));
    orderBody.innerHTML = "";
    if (result.length === 0) {
        orderBody.innerHTML = `
            <tr>
                <td colspan="8">No orders found</td>
            </tr>
        `;
        return;
    }
    result.forEach((res) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${res.orderID}</td>
            <td>${res.customerName}</td>
            <td>${res.product}</td>
            <td>${res.quantity}</td>
            <td>${res.paymentType}</td>
            <td>${res.totalAmount}</td>
            <td>${res.status}</td>
            <td>
                <button onclick="updateOrder(${res.orderID})">Update</button>
                <button onclick="deleteOrder(${res.orderID})">Delete</button>
            </td>
        `;
        orderBody.appendChild(row);
    });
}
//status and delete action
const deletePopup1 = document.querySelector("#deletePopup");
const confirmDeleteButton1 = document.querySelector("#confirmDelete");
const cancelDeleteButton1 = document.querySelector("#cancelDelete");
let orderID;
function deleteOrder(id) {
    let Order = AllOrders.find(order => order.orderID === id);
    if (!Order) {
        console.log("Order is not found");
        return;
    }
    if (!Order.orderID) {
        console.log("order is not found");
        return;
    }
    selectedDeleteID = id;
    deletePopup1.style.display = "block";
}
confirmDeleteButton1.addEventListener("click", () => {
    if (selectedDeleteID === null) {
        return;
    }
    const orderIndex = AllOrders.findIndex(order => order.orderID === selectedDeleteID);
    if (orderIndex === -1) {
        alert("Order is not found");
        return;
    }
    AllOrders.splice(orderIndex, 1);
    selectedDeleteID = null;
    deletePopup1.style.display = "none";
    displayOrders();
    updateDashboard1();
    generateOrderReport();
    // alert("Order deleted successfully");
});
cancelDeleteButton1.addEventListener("click", () => {
    selectedDeleteID = null;
    deletePopup1.style.display = "none";
});
//update Dashboard
// function updateDashboard1():void{
// totalOrders.textContent = String(AllOrders.length);
// Customer.textContent = String(
//  new Set(AllOrders.map(order => order.customerName)).size);
// pendingOrders.textContent = String(
//     AllOrders.filter(order => order.status === "Pending").length);
// deliveredOrders.textContent = String(
// AllOrders.filter(order => order.status ==="Delivered").length);
// cancelledOrders.textContent = String(
//     AllOrders.filter(order=>order.status==="Cancelled").length);
// }
function updateDashboard1() {
    totalOrders.textContent = String(AllOrders.length);
    Customer.textContent = String(new Set(AllOrders.map(order => order.customerName)).size);
    pendingOrders.textContent = String(AllOrders.filter(order => order.status === "Pending").length);
    deliveredOrders.textContent = String(AllOrders.filter(order => order.status === "Delivered").length);
    cancelledOrders.textContent = String(AllOrders.filter(order => order.status === "Cancelled").length);
    const sales = AllOrders.reduce((total, order) => {
        return total + order.totalAmount;
    }, 0);
    totalSalesElement.textContent = `${sales}`;
}
let Products = [
    {
        ProductName: "Laptop",
        Quantity: 10,
        Price: 60000
    },
    {
        ProductName: "Mobile",
        Quantity: 1,
        Price: 45000
    },
    {
        ProductName: "Lamp",
        Quantity: 30,
        Price: 2000
    }
    // {
    //     ProductName:"AC",
    //     Quantity:"fifty thousand",
    //     Price:50000
    // }
];
console.log(Products);
//function using ts
function calculateOrders(items) {
    return items.reduce((total, items) => {
        return total + items.Quantity * items.Price;
    }, 0);
}
console.log("enter Oders Price", calculateOrders(Products));
//static checking
let Customers = {
    CustomerName: "Gayatri",
    CutomerID: 111,
    // CutomerID:"111",
    Status: "Deliverd",
    ProductPrice: 450000,
    ProductName: "AC"
};
console.log(Customers);
let Orders1 = {
    orderID: 1001,
    customer: "Gayatri",
    ProductName: "Laptop",
    totalAmount: 90000
};
let Orders2 = {
    orderID: 1002,
    customer: "Lina",
    ProductName: "AC",
    totalAmount: 40000
};
let Orders3 = {
    orderID: 1003,
    customer: "Vishakha",
    ProductName: "SmartWatch",
    totalAmount: 50000
};
console.log(Orders1);
console.log(Orders2);
console.log(Orders3);
// Demonstrate Promise vs Promise.
function getData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Order recieved successfully");
        }, 5000);
    });
}
getData()
    .then((data) => {
    console.log(data);
})
    .catch((error) => {
    console.log(error);
});
// Demonstrate a JavaScript object being converted into a typed TypeScript object.
let Customer11 = {
    customerName: "Mohit",
    customerage: 18
};
console.log("enter customer object", Customer11);
// Task 12: Final E-Commerce Dashboard
// Create a dynamic dashboard showing Total Orders, Pending Orders, Completed Orders, Cancelled Orders and
// Total Sales.
// l Display all orders in a table with customer, amount, payment type and status.
// l Provide search/filter functionality.
// l Generate a final order report using TypeScript functions, array methods, classes and typed asynchronous data.
// l Ensure the application demonstrates both JavaScript fundamentals and TypeScript safety.
// Task 12: Final Order Report
class OrderReport {
    constructor(orders) {
        this.orders = orders;
    }
    getTotalOrders() {
        return this.orders.length;
    }
    getTotalSales() {
        return this.orders.reduce((total, order) => total + order.totalAmount, 0);
    }
    getAverageOrderAmount() {
        if (this.orders.length === 0) {
            return 0;
        }
        return this.getTotalSales() / this.orders.length;
    }
    getHighestValueOrder() {
        return this.orders.reduce((highest, current) => {
            if (!highest || current.totalAmount > highest.totalAmount) {
                return current;
            }
            return highest;
        }, undefined);
    }
    displayReport() {
        reportTotal.textContent = String(this.getTotalOrders());
        reportSales.textContent = `${this.getTotalSales()}`;
        reportAverage.textContent =
            `${this.getAverageOrderAmount().toFixed(2)}`;
        const highestOrder = this.getHighestValueOrder();
        if (highestOrder) {
            reportHighestOrder.textContent =
                `Order ID: ${highestOrder.orderID}, ` +
                    `Customer: ${highestOrder.customerName}, ` +
                    `Amount: ${highestOrder.totalAmount}`;
        }
        else {
            reportHighestOrder.textContent = "No orders yet";
        }
    }
}
// Fetch Orders Asynchronously
function getOrders() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(AllOrders);
        }, 2000);
    });
}
// Generate Final Order Report
async function generateOrderReport() {
    const orders = await getOrders();
    const report = new OrderReport(orders);
    report.displayReport();
}
generateOrderReport();
//# sourceMappingURL=ecommerce.js.map