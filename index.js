hello(wait);

function hello(callback){
    console.log("hello!");
    callback();
}

function leave(){
     console.log("leave")
}
function wait(){
    console.log("Wait");
}
function goodbye(){
     console.log("goodbye!");
}