//Singleton

//Object Literals
const mySym = Symbol("key1")
const Juser = {
    name: "Sujeet Singh",
    [mySym]: "myKey",
    age: 22,
    location: "Siwan",
    email: "sujeetsingh0029@gmail.com",
    isLoggedIn: true
}
console.log(Juser);
//console.log(Juser.location);
//console.log(Juser["name"]);