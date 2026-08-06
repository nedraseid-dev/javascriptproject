function add(x, y){
    return x + y;
}
function substract(x, y){
    return x - y;
}
function multiply(x, y){
    return x * y;
}
function division(x, y){
    return x / y;
}
function isEven(number){
    return number % 2 === 0 ? true : false;
}
function isValidEmail(email){
   return email.includes("@") ? true : false;
}
console.log(isValidEmail("Nedra@gmail.com"))
