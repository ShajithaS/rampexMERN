const mdb=require("mongoose")
//creating blueprint
const signupSchema=mdb.Schema({
firstname:String,
lastname:String,
email:String,
password:String,
phoneNumber:Number
})
//build model using blueprint
const signup_schema=mdb.model("signup",signupSchema)
module.exports=signup_schema

/* why do we need schema when we use mongodb, why cant we use mysql ?
* */