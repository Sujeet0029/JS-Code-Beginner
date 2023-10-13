const name = "Sujeet Singh"
const repoCount = 50

console.log(`My Name is ${name} and my repo count is ${repoCount}`);

const gameName =  new String('Jaspreet')
console.log(gameName[0]);
console.log(gameName.charAt(3));
console.log(gameName.indexOf('t'));
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.toLowerCase());
console.log(gameName.slice(0,5));
console.log(gameName.substring(0,4));

const newstring = "    Sujeet     "
console.log(newstring.trim());
console.log(newstring);

const newString = gameName.substring(0,3)
console.log(newString);

const url = "https://google.com/google%20newfile"
console.log(url.replace('%20','_'));

console.log(url.includes("google"));
console.log(url.includes("sujeet"));

const newstringOne = "Ayushman_ Akshay Ramgopal"
console.log(newstringOne.split('_'));