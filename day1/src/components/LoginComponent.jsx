import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../assets/LoginComponent.css";
import bg from "../assets/background.jpg";

const LoginComponent = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Username:", username);
    console.log("Password:", password);
    // if user is admin and password id 12345 navigate to /dash
    if (username === "admin" && password === "12345") {
      setPassword("");
      setUsername("");
      navigate("/dash");
    } else {
      setUsername("");
      setPassword("");
      navigate("/landing");
    }
  };

  return (
    <>
      <div
        className="back"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
      >
        <div id="image">
          <div id="login">
            <h1>Login</h1>
            <form onSubmit={handleLogin}>
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <input type="submit" value="Let's Meditate!" />
              <p>
                Dont have an account? <Link to="/signup">Sign Up</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginComponent;
