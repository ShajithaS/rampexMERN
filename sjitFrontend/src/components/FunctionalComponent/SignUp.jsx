function SignUp() {
    var styling={
        textAlign:"center",
        backgroundColor:"blue",
        color:"white",
    }
    return (
        <div>
            <h2 style={styling}>Sign Up</h2>
            <form >
                <input type="text" name="name" placeholder="Name" required />
                <br />
                <input type="email" name="email" placeholder="Email" required />
                <br />
                <input type="password" name="password" placeholder="Password" required />
                <br />
                <button type="submit">Sign in</button>
            </form>
        </div>
    );
}

export default SignUp;
