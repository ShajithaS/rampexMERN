function SignUp() {
    return (
        <div>
            <h2>Sign Up</h2>
            <form >
                <input type="text" name="name" placeholder="Name" required />
                <br />
                <input type="email" name="email" placeholder="Email" required />
                <br />
                <input type="password" name="password" placeholder="Password" required />
                <br />
                <button type="submit">Register</button>
            </form>
        </div>
    );
}

export default SignUp;
