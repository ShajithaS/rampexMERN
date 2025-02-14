//print statement
/*console.log("Hello SJIT!!")


//primitive data types
var a=10.2
let b="abc"
const c=true
console.log(a,b,c)
console.log(typeof a,typeof b, typeof c)
//c=true; Assignment to constant variable || throws type error


//Secondary data types
//1.Array
array=[1,6,"abc",true,[1,2,3]]
console.log(array[0])
console.log(array[1])
console.log(array[2])
console.log(array[3])
console.log(array)
console.log(typeof array) //object


//2.Object
//1st type of object declaration
object1={
    "firstname":"St.Joseph's",
    "lastname":"Institute of Technology",
    "dept":["CSE","IT","ADS","ECE"],
    training:"MERN"
}
//keys can be given within quotes or without , but values are always within quotes
//output of a string is always within single quotes even if we give within double quotes in the input
console.log(object1)

//2nd type of declaration
//always give keys within double quotes, otherwise it will be considered as some variable
object2={}
object2["firstname"]="hello"
object2["lastname"]="SJIT"
console.log(object2)

//3rd type of declaration
object3=new Object()
object3["firstname"]="bye"
object3["lastname"]="SJIT"
object3.training="MERN" // can also use dot operator
console.log(object3)


//3.Set
set=new Set("hello")
console.log(set)

set1=new Set(["hello"])
console.log(set1)

set2=new Set();
set2.add("hi")
set2.add("hello")
console.log(set2)
console.log(typeof set2) //object*/


//operators

//logical operators
console.log('logical AND operators')
//check first operand if it is false return false, else check second operand, if it it is true, return second operand else return false 
console.log(5&&10) //o/p:10
console.log(true && 10) //op:10
console.log(false && 10) //op:false
console.log(false && true) //op:false
console.log(true && false) //op:false

console.log('logical OR operators')
//check first operand if it is true return first operand, else check second operand, if it it is true, return second operand (both false -> return false )
console.log(5 || 10) //o/p:5
console.log(true || 10) //op:true
console.log(false || 10) //op:10
console.log(false || true) //op:true
console.log(true || false) //op:true

