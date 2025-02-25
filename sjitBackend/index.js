const express= require('express')

const app=express()   /* responsible for creating server */

app.get("/",(req,res)=>{
    res.send("<h1>Welcome to Backend</h1>")
})
app.get("/static",(req,res)=>{
    res.sendFile("/home/shaji/MERN_TRAINING/index.html")
})
const PORT =3001

app.listen(PORT,()=>console.log("Server started successfully"))

