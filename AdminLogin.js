// AdminLogin Component
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/Login.css";

const AdminLogin = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        if (username === "admin" && password === "password123") {
            navigate("/admin/dashboard");
        } else {
            alert("Invalid credentials");
        }
    };

    return (
        <div className="admin-login-container">
            <h2>Admin Login</h2>
            <form onSubmit={handleLogin}>
                <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required />
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default AdminLogin;
