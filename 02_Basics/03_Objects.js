const mySym = Symbol("mykey1")
const JsUser = {
    name: "Sujeet Singh",
    age: 22,
    roll: "20BTCSE026",
    email: "sujeetsingh0029@gmail.com",
    [mySym]: "mykey1"
}
// console.log(JsUser)

const student ={
   name: "John",
   class: "5th",
   roll_no: 23,
   email: "john.google.com"
}
//console.log(student.name);
// Object.freeze(student)
// student.email= "sujeet0029@gmail.com"
// console.log(student);

// student.greeting = function(){
//     console.log("Hi Sujeet");
// }
// console.log(student.greeting());

// student.greetingTwo = function(){
//     console.log(`Hi Welcomeback ${this.name}`);
// }
// console.log(student.greetingTwo());

const User = {}
User.id = "12asw3"
User.name = "Joson"
User.email = "john"
// console.log(User);

const UserDetails = {
   fullname: {
       userfullname: {
            firstname: "Vansh",
            lastname: "Choudhary"
        }
    }
}
// console.log(UserDetails.fullname.userfullname.firstname);

const Obj1 = {1:"a", 2: "b"}
const Obj2 = {3:"c", 4: "d"}

// const Obj3 = {Obj1, Obj2}
// console.log(Obj3);

// const Obj4 = Object.assign({},Obj1,Obj2)
// console.log(Obj4);

// const Obj5 = {...Obj1,...Obj2}
// console.log(Obj4);

// console.log(Object.keys(User));
// console.log(Object.values(User));
// console.log(Object.entries(User));

// console.log(User.hasOwnProperty('name'));
// console.log(User.hasOwnProperty('isLoggedIn'));