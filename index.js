const minNum = 1;
const maxNum = 100;
const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
 
let attempts = 0;
let guess;
let running = true;

while(running){
    guess = window.prompt(`Guess a number from ${minNum} to ${maxNum}:`);
    console.log(typeof guess, guess);

    if(isNaN(guess)){
        window.alert(`please enter a valid number!`);
    }
    else if(guess > maxNum || guess < minNum){
        window.alert(`please enter a valid number!`);
    }
    else{
        attempts++;
        if(guess < answer){
            window.alert("that number is too low!  try again!");
        }
        else if(guess > answer){
            window.alert("that number is too high! try again!");
        }
        else{
            window.alert(`perfect! the answer was ${answer} it took u ${attempts} attempts `)
            running = false;
        }
    }    
}

    










