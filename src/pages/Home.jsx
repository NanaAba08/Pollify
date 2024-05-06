import { useState } from 'react'
import '../App.css';
import NavComponent from '../Components/Nav';
import ServiceComponent from '../Components/Service';

const Home = () => {
  const [count, setCount] = useState(0)

  return (
    <>
      <section class="header">
        <nav>
            <a href="index.html"><img src="pollifylogo.jpg"/></a> 
            <div class="nav-links" id="navLinks">
              <i class="fa fa-close" aria-hidden="true" onclick="hideMenu()"></i> 
              <NavComponent />
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
            <ServiceComponent title={'Live Polls'} description={'Create and launch polls within seconds.'} />
            <ServiceComponent title={'Surveys'} description={'Build surveys with no technical skills required.'} />
            <ServiceComponent title={'Quizzes'} description={'Create engaging quizzes.'} />
            <ServiceComponent title={'Analytics'} description={'Turn raw data into actionable insights.'} />

            <ServiceComponent title={'Code'} description={'Solve a problem today!'} />
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

export default Home;
