function SJIT(message,callback){
    console.log(message);
    callback();
}
function callbackSJIT(){
    console.log("Welcome back to SJIT");
}
SJIT("Welcome to SJIT",callbackSJIT);

function formSubmission(message,cbFun){
    cbFun();
    console.log(message);
}

function formValidation(){
    console.log("Form validation Successful");
}
formSubmission("Form Submitted Successfully",formValidation);