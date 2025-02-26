const express = require("express");
const mdb = require("mongoose");
const dotenv = require("dotenv");
const bcrypt = require("bcrypt");
dotenv.config();
const Signup = require("./models/signupSchema");
const app = express(); /* responsible for creating server */
app.use(express.json());
const PORT = 3001;
const cors =require('cors');
app.use(cors())

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

app.post("/signup", async (req, res) => {
  try {
    console.log(req.body);
    const { firstname, lastname, phoneNumber, password, email } = req.body;
    const hashedpassword = await bcrypt.hash(password, 10);
    const newSignup = new Signup({
      firstname: firstname,
      lastname: lastname,
      phoneNumber: phoneNumber,
      password: hashedpassword,
      email: email,
    });

    newSignup.save();
    console.log("Signup succesful");
    res.status(201).json({ message: "Signup successful", isSignup: true });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Signup unsuccesful", isSignup: false });
  }
});

app.get('/getsignupdet',async(req,res)=>{
const signup=await Signup.find()
console.log(signup)
res.send("signup details fetched")
})

app.post("/login", async(req, res) => {
  try {
    const { email, password } = req.body;
    const existingUser = await Signup.findOne({email:email})
    console.log(existingUser)
    if(existingUser){
        const isValidPassword = await bcrypt.compare(password,existingUser.password)
        console.log(isValidPassword)
        if(isValidPassword){
            res.status(201).json({message:"Login successful",isLogin:true})
        }
        else{
          res.status(201).json({message:"incorrect password",isLogin:false})
        }
    }
    else{
      res.send(400).json({message:"User not found, Sign up first",isLogin:false})
    }
  } catch (error) {
    console.log(error);
    res
      .status(400)
      .json({ message: "Login Error Check your code", isLogin: false });
  }
});

app.listen(PORT, () => console.log("Server started successfully"));
