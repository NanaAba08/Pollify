import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/pollifylogo.jpg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section class="header">
        <nav>
            <a href="index.html"><img src="pollifylogo.jpg"/></a> 
            <div class="nav-links" id="navLinks">
              <i class="fa fa-close" aria-hidden="true" onclick="hideMenu()"></i> 
              <ul> 
                <li> <a href="./index.html">HOME</a></li>
                <li> <a href="./about.html">ABOUT US</a></li>
                <li> <a href="./service.html">SERVICE</a></li>
                <li> <a href="./pollhandler.html">HELP</a></li>
                <li> <a href="./SignUp.html">SIGNUP</a></li>
                <li> <a href="./Login.html">LOGIN</a></li>
              </ul>
          </div>
          <i class="fa fa-bars" aria-hidden="true" onclick="showMenu()"></i>
        </nav>
        <div class="text-box">
            <h1>POLLIFY</h1>
            <p>"Where Everyone's decision Matters!" </p>
            <a href="pollifylogo.jpg" class="Learn-btn">Learn More About Us </a>
            
        </div>
    
    
    </section>
    <section class="About">
        <h1>About Us</h1><br/>
        <p> Welcome to Pollify!<br/> Pollify is an app that helps makes decision to be taken with everyone's input. <br/>Our mission is to achieve inclusivity, convinience and gather real-time responses.<br/> This platform strives to ensure that your experiences with respect to polls! Sign up and enjoy our unique features. <br/>"inclusivity in decision making!"</p>
    </section>

    <section class="Services">
        <h1>Services</h1><br/><br/>
        <p>Polllify has the following services</p> 

        <div class="row">
            <div class="Services-col">
                <h3>Live Polls</h3>
                <p>Create and launch polls within seconds.</p>
                </div>
        </div>
            <div class="Services-col">
                <h3>Surveys</h3>
                <p>Build surveys with no technical skills required.</p>
            </div>
            <div class="Services-col">
                <h3>Quizzes</h3>
                <p>Create engaging quizzes. </p>
        </div>
    <div class="Services-col">
        <h3>Analytics</h3>
        <p>Turn raw data into actionable insights.</p>
    </div>
</section>
    
    <br/><br/><br/><br/><br/><br/>


        <div class="row-col" align="center">
            <h1>Contact Us</h1>
            <p><b> Email</b>: pollify@gmail.com 
                <br/>
                <b>Phone</b>: +233 54 098 5123
                <br/>
                <b>Instagram</b>: @Pollify_polls
                <br/>
                <b>Facebook</b>: Pollify Polls</p>
        </div>
                <br/><br/><br/>
                <p align="center">
                    &copy;Pollify's Copyright 2024 </p>
    <br/><br/>
    
    {/* <script>
        var navLinks= document.getElementById("navLinks");
        function showMenu() {
            navLinks.style.right ="0";
        }
        function hideMenu() {
            navLinks.style.right ="-200px";
        }
    

    </script> */}

    </>
  )
}

export default App

