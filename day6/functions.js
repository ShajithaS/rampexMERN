function noParameterNoReturn(){
    console.log("This is my function");
}
noParameterNoReturn();

function noParameterHasReturn(){
    return("This is my function1");
}
console.log(noParameterHasReturn());

function hasParameterNoReturn(name){
    console.log(`Hello, ${name} !`);
}
//use backticks ` dont use " " or '' while using string interpolation
//${} only works inside backticks(`)
hasParameterNoReturn("Shajitha");

function hasParameterhasReturn(name){
    return(`Hello, ${name} !,Welcome back.`);
}
//use backticks ` dont use " " or '' while using string interpolation
console.log(hasParameterhasReturn("Shajitha"));