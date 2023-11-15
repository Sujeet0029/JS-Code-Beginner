function sayMyname(){
console.log("S");
console.log("U");
console.log("J");
console.log("E");
console.log("E");
console.log("T");
}
//sayMyname()

function addTwoNumbers(num1,num2){
    console.log(num1+num2);
    return addTwoNumbers
}
//addTwoNumbers(12,22)

function loginUserMesssage(username){
    if(username===undefined){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}
// console.log(loginUserMesssage());
// console.log(loginUserMesssage(""));
// console.log(loginUserMesssage("Sujeet Singh"));

function calculateCartPrice(...num1){
    return num1
}
//console.log(calculateCartPrice(200,400,600,800));

const User = {
    username:"Jaspreet",
    price:299
}
function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}
handleObject(User)