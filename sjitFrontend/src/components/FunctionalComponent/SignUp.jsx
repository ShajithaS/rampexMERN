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
                <input type="text" name="firstname" placeholder="First Name" required />
                <br />
                <input type="text" name="lastname" placeholder="Last Name" required />
                <br />
                <input type="email" name="email" placeholder="Email" required />
                <br />
                <input type="password" name="password" placeholder="Password" required />
                <br />
                <input type="password" name="password" placeholder="Repeat Password" required />
                <br />
                <button type="submit">Sign in</button>
            </form>
        </div>
    );
}

export default SignUp;
