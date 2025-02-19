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
                <input type="email" name="email" placeholder="Email" required />
                <br />
                <input type="password" name="password" placeholder="Password" required />
                <br />
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default Login;
