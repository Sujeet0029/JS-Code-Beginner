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
