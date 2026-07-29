const myLabel = document.getElementById("myLabel");
const myText = document.getElementById("myText");
const myBtn = document.getElementById("myBtn");
const myP = document.getElementById("myP");
let age;

myBtn.onclick = function(){
    age = myText.value;
    age = Number(age);
    if(age >= 80){
        myP.textContent = "Sorry sir you cannot be alone ur old";
    }
    else if(age >= 18){
       myP.textContent = "you are capable of living by your own";
    }
    
    else if(age == 0){
        myP.textContent = "you just born kiddo go cry or something";
    }
    else if(age <= 10){
        myP.textContent = "you need a legal guardian";
    }
    else if(age < 0){
        myP.textContent = "age can not be under 0";
    }
}