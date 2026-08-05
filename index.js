let loggedIn = false;
let username;
let password;

do{
    username = window.prompt(`enter your name`);
    password = window.prompt(`enter your password`);
    
    if(username === "myusername" && password === "mypassword"){
     loggedIn = true;
     console.log(`u are in`);
    }
    else{
        console.log(`Invalid credentials please try again`);

    }

}while(!loggedIn)