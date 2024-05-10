import { useState } from 'react'
import '../App.css';
import NavComponent from '../Components/Nav';

const Signup = () => {
    return (
        <section className="signupHeader">
            <nav>
                <a href="signup.html">
                    <img src="pollifylogo.jpg" alt="Pollify Logo" />
                </a>
                <div className="nav-links" id="navLinks">
                    <i className="fa fa-close" onClick={() => {}}></i> 
                    <NavComponent />
                </div>
            </nav>

            <div className="signup-container">
                <form className="signup-form" action="signup.php" method="POST">
                    <h2>Sign Up</h2>
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input type="text" id="username" name="username" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="confirm-password">Confirm Password</label>
                        <input type="password" id="confirm-password" name="confirm-password" required />
                    </div>
                    <button type="submit">Sign Up</button>
                </form>
            </div>
        </section>
    );
};

export default Signup;
