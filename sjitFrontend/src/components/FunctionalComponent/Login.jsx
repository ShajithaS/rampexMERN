import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
function Login() {
    var styling={
        textAlign:"center",
        backgroundColor:"blue",
        color:"white",
    }
    const navigate = useNavigate()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleLogin = async(event) => {
    event.preventDefault()
    const req=await axios.post("https://backend-38dh.onrender.com/login", {
      email: email,
      password: password
    });
    const message=req.data.message;
    const isLogin=req.data.isLogin;
    if(isLogin){
        alert(message)
        navigate('/')
    }
    else{
        alert(message)
    }
  };
    return (
        <div>
            <h2 style={styling}>Login</h2>
            <form onSubmit={handleLogin}>
                <input type="email" name="email" id="email"placeholder="Email" required value={email}
          onChange={(e) => setEmail(e.target.value)}/>
                <br />
                <input type="password" name="password"id="password" placeholder="Password" required value={password}
          onChange={(e) => setPassword(e.target.value)}/>
                <br />
                <button type="submit">Login</button>
            </form>
            <p>Don't have an account?<Link to='/signup'>Sign up</Link></p>
        </div>
    );
}

export default Login;
