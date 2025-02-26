import { Link } from "react-router-dom";
function Login() {
    var styling={
        textAlign:"center",
        backgroundColor:"blue",
        color:"white",
    }
    return (
        <div>
            <h2 style={styling}>Login</h2>
            <form >
                <input type="email" name="email" id="email"placeholder="Email" required />
                <br />
                <input type="password" name="password"id="password" placeholder="Password" required />
                <br />
                <button type="submit">Login</button>
            </form>
            <p>Don't have an account?<Link to='/signup'>Sign up</Link></p>
        </div>
    );
}

export default Login;
