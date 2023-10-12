//Primitive
//7 Types: String, Number, Boolean, Null, Undefined, Symbol, BigInt

const score = 100
const isLoggedIn = true
const outsideTemp = null
let userEmail;
const id = ('123')
const bigNumber = 121314142316556787675n

//Non-Primitive(Referance)
//Array, Object, Function

const superHeros = ["Shaktiman", "Krish", "Meander"];
console.log(superHeros)
let myObj ={
    name: "Sujeet Singh",
    age: 22,
    roll: 1
}
console.log(myObj);

const myFunction = function(){
    console.log(Hello, World)
}

//************************************************************************************/
// There are two types of memory

// 1.Stack(Primitive)
//Example:- 

let Obj = "Sujeet Singh"
let new_Obj = Obj
new_Obj = "Jaspreet Singh"
console.log(new_Obj);
console.log(Obj);


// 2.Heap(Referance/Non-Primitive)
//Example:-

let myFile ={
    name: "Sujeet Singh",
    email: "sujeetsingh00292gmail.com",
    upi: "sujeet@ybl"
}
let new_myFile = myFile
new_myFile.email = "askmjd23@gmail.com"
console.log(new_myFile.email)
console.log(myFile.email)



