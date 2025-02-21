import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/Home.css";
import axios from "axios";
const Home = () => {
    const navigate = useNavigate();
    const [showLogin, setShowLogin] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:8080/api/login", { email, password });
            alert("Login Successful");
            navigate("/main");
        } catch (error) {
            alert("Invalid credentials. Try again!");
        }
    };

    return (
        <div className="home-container">
            <div className="home-content">
                <h1>Welcome to the Library</h1>
                <p className="quote">"A reader lives a thousand lives before he dies." – George R.R. Martin</p>

                <button onClick={() => navigate("/register")}>Register</button>
                <button onClick={() => setShowLogin(!showLogin)}>Login</button>

                {showLogin && (
                    <form onSubmit={handleLogin}>
                        <h2>Login</h2>
                        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                        <button type="submit">Submit</button>
                    </form>
                )}
            </div>
        </div>
    );
};

export default Home;
