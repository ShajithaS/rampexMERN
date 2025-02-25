const express = require("express");
const mdb = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const Signup = require("./models/signupSchema");
const app = express(); /* responsible for creating server */
app.use(express.json()) 
const PORT = 3001;



console.log(process.env.MONGODB_URL);

mdb
  .connect(process.env.MONGODB_URL) //if the connection string doest work, replace localhost with with 127.0.0.1
  .then(() => {
    console.log("MDB connection successful");
  })
  .catch((err) => {
    console.log("Check your connection string", err);
  });
/**/
app.get("/", (req, res) => {
  res.send("<h1>Welcome to Backend</h1>");
});
app.get("/static", (req, res) => {
  res.sendFile("/home/shaji/MERN_TRAINING/index.html");
});
app.post("/signup", (req, res) => {
try {
    console.log(req.body)
    const {firstname,lastname,phoneNumber,password,email} = req.body
    const newSignup = new Signup({
    firstname: firstname,
    lastname: lastname,
    phoneNumber: phoneNumber,
    password: password,
    email: email
  });
 
    newSignup.save();
    console.log("Signup succesful")
    res.status(201).json({message:"Signup succesful",isSignup:true})
  } 
    catch (error) {
    console.log(error)
    res.status(201).json({message:"Signup unsuccesful",isSignup:false})
  }
});

app.listen(PORT, () => console.log("Server started successfully"));
