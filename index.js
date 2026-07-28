/*console.log("Asselamu aleykum");
console.log(`u doing good??`);
window.alert(`This is alert so run run run`);
window.alert(`so are u happy`);
document.getElementById(`firsth1`).textContent = `Asselamu aleykum`;
document.getElementById(`firstp`).textContent = `keyfe haluki?`;



document.getElementById("firsth1").textContent = `nedra`;


let age = 11;
let girlname = `Nedra`;
let gpa = 3.85;
let name = `donkey`;
let email = `asmaabubeker@gmail.com;`
let isStudent = true;
let fatherName = `Seid`;




console.log(`You are ${age} years old.`);
console.log(`from animals ${name} is really hard working one`);
console.log(`your class mate ${girlname} is very clever and even got ${gpa} on first semister`);
console.log(`You are ${age} years old.`);
console.log(`is this your email? ${email}`);
console.log(`is the student enrolled?: ${isStudent}`);
console.log(`so the girls father name is ${fatherName}`); 




let fullName = "Nedra";
let age = 19;
let isStudent = false;



document.getElementById("firsth1").textContent = `The name ${fullName} is such an awsome name to have.`;
document.getElementById("firstp").textContent = `the girl named ${fullName} just turned ${age} a month ago.` ;
document.getElementById("secondp").textContent = ` Is ${fullName} a student?: ${isStudent}`;



arithmethis operations


let student = 47;
student += 1;
student *= 3;
console.log(`${student}`);

to accept use input
1st using window prompt


let username;
username = window.prompt("can u tell us ur username?");
console.log(username);

2nd using proffessional html textbx

let username;
document.getElementById("mysubmit").onclick = function(){
    username = document.getElementById("mytext").value;
    document.getElementById('myh1').textContent = `Hellow ${username}`;
}


type converter

let age = window.prompt(`tell us your age`);
age = Number(age);
age+=1;
console.log(age, typeof age);



const in js


const PI = 3.1415;
let radius;
let circumference;




document.getElementById(`mysubmitbtn`).onclick = function(){
    radius = document.getElementById(`mytext`).value;
    radius = Number(radius);
    circumference = 2 * PI * radius;
    document.getElementById(`myh3`).textContent = circumference + "cm";

}

project on counting numbers

const decrease = document.getElementById("decreaseBtn");
const reset = document.getElementById("resetBtn");
const increase = document.getElementById("increaseBtn");
const countLabel = document.getElementById("countLabel");
let count = 0;

increaseBtn.onclick = function(){
    count++;
    countLabel.textContent = count;
}
decreaseBtn.onclick = function(){
    count--;
    countLabel.textContent = count;
}
resetBtn.onclick = function(){
    count = 0;
    countLabel.textContent = count;
}*/


let x = 60;
let y = 5;
let z = -9


//console.log(Math.PI);
//console.log(Math.E);

//z = Math.sign(x);
//z = Math.floor(x);
//z = Math.ceil(x);
//z = Math.trunc(x);
//z = Math.sqrt(x);
//z = Math.abs(x);
//z = Math.min(x, y, z);






console.log(z);













