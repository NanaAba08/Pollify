import { useState } from 'react'
import '../App.css';
import NavComponent from '../Components/Nav';

const Login = () => {
    // Event handler for login button click
    const handleLogin = () => {
        // Retrieve username and password from the form
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        // Validate the username and password (you can modify this logic based on your requirements)
        if (username === "your_username" && password === "your_password") {
            // Authentication successful
            // Redirect the user to a dashboard or another page
            window.location.href = "dashboard.html";
        } else {
            // Invalid credentials
            document.getElementById("errorMessage").innerText = "Invalid username or password";
            document.getElementById("errorMessage").style.display = "block";
        }
    };

    return (
        <div className="loginHeader">
            <section className="loginHeader">
                <nav>
                    <a href="login.html"><img src="pollifylogo.jpg" alt="Pollify Logo" /></a>
                    <div className="nav-links" id="navLinks">
                        <i className="fa fa-close" onClick={() => {}}></i>
                        <NavComponent />
                    </div>
                </nav>

            <div className="login-container">
                <form className="login-form">
                    <h2>Login</h2>
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input type="text" id="username" name="username" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password" required />
                    </div>
                    <button type="button" onClick={handleLogin}>Login</button>
                    <p id="errorMessage" className="error" style={{ display: "none" }}></p>
                </form>
            </div>
            </section>
        </div>
    );
};

export default Login;
