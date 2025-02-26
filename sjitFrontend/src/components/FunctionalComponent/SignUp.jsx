import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
function SignUp() {
  var styling = {
    textAlign: "center",
    backgroundColor: "blue",
    color: "white",
  };
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [mail, setMail] = useState("");
  const [phoneNo, setPhoneno] = useState(0);
  const [password, setPassword] = useState("");
  const handleSubmit = () => {
    axios.post("http://localhost:3001/signup", {
      firstname: firstname,
      lastname: lastname,
      mail: mail,
      phoneNo: phoneNo,
      password: password,
    });
  };
  return (
    <div>
      <h2 style={styling}>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="firstname"
          placeholder="First Name"
          required
          value={firstname}
          onChange={(e) => setFirstname(e.target.value)}
        />
        <br />
        <input
          type="text"
          id="lastname"
          placeholder="Last Name"
          required
          value={lastname}
          onChange={(e) => setLastname(e.target.value)}
        />
        <br />
        <input
          type="email"
          id="email"
          placeholder="Email"
          required
          value={mail}
          onChange={(e) => setMail(e.target.value)}
        />
        <br />
        <input
          type="number"
          id="phoneNumber"
          placeholder="Phone no"
          required
          value={phoneNo}
          onChange={(e) => setPhoneno(e.target.value)}
        />
        <br />
        <input
          type="password"
          id="password"
          placeholder="Password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button type="submit">Sign in</button>
      </form>
      <p>
        Already have an account?<Link to="/login">Login</Link>
      </p>
    </div>
  );
}

export default SignUp;
