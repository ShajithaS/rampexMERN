//1.variables :: refer declarations and datatypes

function test(){
     console.log("This is normal function");
}
test();

//2.arrow function

var testArrowfunction = () => {
     console.log("This is Arrow function")
}
testArrowfunction();

//3.Scope
//var - global
//let - local
//no var , no let - global (var)
let a=10;
console.log(a); //10
{
     a=20;
     console.log(a); //20
     const b=30;
     console.log(b); //30
     let c=40;
     console.log(c); //40
     a=50;
     console.log(a); //50
     e=10;
}
console.log(a); // 50
console.log(e); // 10
//console.log(c); //undefined
//console.log(b); // const is local but can be converted to global in react

//4.Ternary operator
let num=11
console.log((num%2)?"odd":"even"); //instead of putting num%2==0 we can put condition (num%2) if it returns 1 it is true, then num is odd , else the num is even(as it returns 0, it is false)


//5.Spread operator(...)
stud1year=["user1","user2","user3"]
stud2year=["user4","user5","user6"]
stud3year=["user7","user8","user9"]
stud4year=["user10","user11","user12"]
studDB=[stud1year,stud2year,stud3year,stud4year]
console.log(studDB) // array inside array
studDB=[...stud1year,...stud2year,...stud3year,...stud4year]
console.log(studDB)  // simple array

//6.rest operator(...)
function studentdb(...studentdatabase){
     console.log(studentdatabase);
}
studentdb(studDB);

//7.destructing operator
var arr=[1,2,3,4,5]
var [x,y,z,z1,z2,z3]=arr;
console.log(x,y,z2,z3);
//example:car mantle and dismantle

//8.Hoisting - concept that checks everything inside the codebase
//a.variable hoisting
console.log(check) // when we do not declare 'check' in next line it gives reference error , but we declare 'check' it gives output as undefined . Reason:Hoisting
var check;

/*console.log(check1);
let check1;//reference error:Cannot access 'check1' before initialization , same goes for const*/

//b.functional hoisting
hoisting();
function hoisting(){
     console.log("this is functional hoisting")
}

/*arrowfunhoisting() //o/p:TypeError: arrowfunhoisting is not a function

var arrowfunhoisting = () =>{
     console.log("This is arrow function")
}*/

//Classes and objects
class ClassEg{
     classFun(){
          console.log("hello! This is classFun")
     }
}
obj =new ClassEg
console.log(obj.classFun()) // no return value thus output is 'undefined'

class eg{
     classfun(){
          console.log("this is from eg class");
          return 1;
     }
}
console.log(new eg().classfun()) // use 'new' to create object
